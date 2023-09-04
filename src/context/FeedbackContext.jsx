import React, { createContext, useEffect, useState } from 'react';
import useCurrentDate from '../hooks/useCurrentDate';
import {
  formatDateTime,
  counterZeroPad,
  counterGetAMPM,
  counterFormatHours,
} from '../utils/counterFormatDateTime';
import Modal from '../components/Modal';
import { Navigate } from 'react-router';

const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
  useEffect(() => {
    getFeedback();
  }, []);

  useEffect(() => {
    const storedValue = localStorage.getItem('switch');
    if (storedValue) {
      setIsFalse(JSON.parse(storedValue));
    }
  }, []);

  useEffect(() => {
    const accessTokenExpiration = localStorage.getItem('accessTokenExpiration');
    if (accessTokenExpiration && parseInt(accessTokenExpiration, 10) === 0) {
      localStorage.removeItem('loggedIn');
    }
  }, []);

  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [isFalse, setIsFalse] = useState(false);
  const [redirectTo500, setRedirectTo500] = useState(null);
  const [error, setError] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorTimeout, setErrorTimeout] = useState(null);
  const [success, setSuccess] = useState('');
  const [showModal, setShowModal] = useState(true);
  const [formDataSignUp, setFormDataSignUp] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    otp: '',
  });

  const [formDataLogin, setFormDataLogin] = useState({
    email: '',
    password: '',
    otp: '',
  });

  const [otp, setOtp] = useState(''); 
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false); 

  const currentDate = useCurrentDate();

  const clearError = () => {
    setError('');
  };

  const setErrorWithTimeout = (errorMessage, duration) => {
    if (errorTimeout) {
      clearTimeout(errorTimeout);
    }

    setError(errorMessage);

    const timeoutId = setTimeout(() => {
      clearError();
    }, duration);

    setErrorTimeout(timeoutId);
  };

  const formattedDate = formatDateTime(
    currentDate,
    counterZeroPad,
    counterFormatHours,
    counterGetAMPM
  );

  const handleClickDropdown = () => {
    setShowDropDown((prevState) => {
      return !prevState;
    });
  };

  const handleClickToggler = () => {
    setIsFalse((prevState) => !prevState);
    localStorage.setItem('switch', JSON.stringify(!isFalse));
  };

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const getFeedback = async () => {
    try {
      const response = await fetch('/feedback', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      setRedirectTo500(response.status);
      setFeedback(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErrorTimeout(`Error fetching data: ${error.message}`);
    }
  };

  if (redirectTo500 === true) {
    return <Navigate to='/500' />;
  }

  const addFeedback = async (newFeedbackItem) => {
    const response = await fetch(`/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedbackItem),
    });

    const data = await response.json();
    const updatedFeedbackArray = [data, ...feedback];
    setFeedback(updatedFeedbackArray);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      id: item._id,
      edit: true,
    });
  };

  const deleteFeedback = (id) => {
    setShowDeleteModal(true);
    setItemToDelete(id);
  };

  const updateFeedback = async (id, itemUpdate) => {
    try {
      const response = await fetch(`/feedback/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemUpdate),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const updatedFeedbackData = await response.json();

      setFeedback((prevFeedback) =>
        prevFeedback.map((item) => {
          return item._id === id ? { ...item, ...updatedFeedbackData } : item;
        })
      );

      setFeedbackEdit((prevFeedbackEdit) => ({
        ...prevFeedbackEdit,
        item: {},
        edit: false,
      }));
    } catch (error) {
      // console.error('Error updating feedback:', error);
      setErrorTimeout('Error updating feedback.');
    }
  };

  const handleDeleteConfirmed = async () => {
    await fetch(`/feedback/${itemToDelete}`, {
      method: 'DELETE',
    });

    setShowDeleteModal(false);
    setFeedback((prevFeedback) => {
      return prevFeedback.filter((item) => {
        return item._id !== itemToDelete;
      });
    });
  };

  const handleSignUp = async (formData) => {
    try {
      const data = {
        ...formData,
        otp,
        twoFactorEnabled: isTwoFactorEnabled,
      };

      const response = await fetch('/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem('accessToken', responseData.accessToken);
        localStorage.setItem('refreshToken', responseData.refreshToken);
        localStorage.setItem('loggedIn', 'true');
        setLoggedIn(true);
        setSuccess(responseData.message);
      } else {
        const errorData = await response.json();
        setErrorWithTimeout(errorData.error, 3000);
      }
    } catch (error) {
      // console.error('Network error:', error.message);
      setErrorWithTimeout('Network error. Please try again.', 3000);
    }
  };

  const handleLogin = async (formData) => {
    const storedToken = localStorage.getItem('accessToken');
    const expirationTime = localStorage.getItem('accessTokenExpiration');

    if (!storedToken) {
      setErrorTimeout('You need to sign in first.');
      return;
    }

    const currentTime = new Date().getTime() / 1000;

    if (expirationTime && parseInt(expirationTime, 10) === 0) {
      setShowModal(false);
    } else if (expirationTime && currentTime >= expirationTime - 60) {
      await handleTokenRefresh();
    }

    try {
      const data = {
        ...formData,
        otp,
      };

      const response = await fetch('/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${storedToken}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem('accessToken', responseData.accessToken);
        localStorage.setItem(
          'accessTokenExpiration',
          responseData.accessTokenExpiration
        );
        localStorage.setItem('refreshToken', responseData.refreshToken);
        setLoggedIn(true);
        setSuccess(responseData.message);
      } else {
        const errorData = await response.json();
        setErrorWithTimeout(errorData.error, 3000);
      }
    } catch (error) {
      // console.error('Network error:', error.message);
      setErrorWithTimeout('Network error. Please try again.', 3000);
    }
  };

  const handleTokenRefresh = async () => {
    const storedRefreshToken = localStorage.getItem('refreshToken');

    try {
      const response = await fetch('/users/refresh-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken: storedRefreshToken }),
      });

      if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem('accessToken', responseData.accessToken);
      } else {
        // console.error('Refresh token failed');
        setErrorWithTimeout('Refresh token failed.', 3000);
      }
    } catch (error) {
      // console.error('Network error while refreshing token:', error.message);
      setErrorWithTimeout('Network error while refreshing token.', 3000);
    }
  };

  const generateQRCode = async () => {
    try {
      const storedToken = localStorage.getItem('accessToken');
      const response = await fetch('/users/generate-qr-code', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(
          `Network response was not ok (Status: ${response.status})`
        );
      }
      const data = await response.json();
      return data.qrCodeDataURL;
    } catch (error) {
      // console.error('Error generating QR code:', error);
      setErrorWithTimeout('Error generating QR code. Please try again.', 3000);
      return ''; 
    }
  };

  const handleDeleteCancelled = () => {
    setShowDeleteModal(false);
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setShowDeleteModal(false);
    }
  };

  const alertConfirmationModal = showDeleteModal && <Modal />;

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        showDeleteModal,
        itemToDelete,
        feedbackEdit,
        addFeedback,
        editFeedback,
        deleteFeedback,
        updateFeedback,
        alertConfirmationModal,
        isLoading,
        isFalse,
        handleClickToggler,
        currentDate: formattedDate,
        error,
        closeModal,
        handleDeleteConfirmed,
        handleDeleteCancelled,
        handleClickDropdown,
        showDropDown,
        handleSignUp,
        handleLogin,
        setFormDataSignUp,
        setFormDataLogin,
        formDataSignUp,
        formDataLogin,
        loggedIn,
        success,
        otp, 
        isTwoFactorEnabled, 
        setOtp, 
        setIsTwoFactorEnabled, 
        generateQRCode,
        showModal,
        setShowModal,
        setSuccess,
        setErrorWithTimeout,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export { FeedbackProvider };
export default FeedbackContext;
