import { createContext, useEffect, useState } from 'react';
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
  const [formDataSignUp, setFormDataSignUp] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [formDataLogin, setFormDataLogin] = useState({
    email: '',
    password: '',
  });

  const currentDate = useCurrentDate();

  const clearError = () => {
    setError('');
  };

  const setErrorWithTimeout = (errorMessage, duration) => {
    // Clear existing error timeout, if any
    if (errorTimeout) {
      clearTimeout(errorTimeout);
    }

    setError(errorMessage);

    // Set a new timeout to clear the error message
    const timeoutId = setTimeout(() => {
      clearError();
    }, duration);

    // Store the timeout ID
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
      console.error('Error updating feedback:', error);
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

  // Sign-up Component
  const handleSignUp = async (formData) => {
    try {
      const response = await fetch('/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // Store the access token in local storage
        localStorage.setItem('accessToken', data.accessToken);
        // window.location.href = '/'
        setLoggedIn(true); 
        setSuccess(data.message);
      } else {
        const errorData = await response.json();
        // Handle sign-up failure and show error messages to the user
        setErrorWithTimeout(errorData.error, 3000);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Network error:', error.message);
      setErrorWithTimeout('Network error. Please try again.', 3000);
    }
  };

  // Login Component
  const handleLogin = async (formData) => {
    const storedToken = localStorage.getItem('accessToken');

    if (!storedToken) {
      // Handle the case where the token is not available (user is not authenticated)
      setErrorTimeout('You need to sign in first.');
      return;
    }

    try {
      const response = await fetch('/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${storedToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // Store the new access token in local storage
        localStorage.setItem('accessToken', data.accessToken);
        // window.location.href = '/'
        setLoggedIn(true); 
        setSuccess(data.message);
      } else {
        const errorData = await response.json();
        // Handle login failure and show error messages to the user
        setErrorWithTimeout(errorData.error, 3000);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Network error:', error.message);
      setErrorWithTimeout('Network error. Please try again.', 3000);
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
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export { FeedbackProvider };
export default FeedbackContext;
