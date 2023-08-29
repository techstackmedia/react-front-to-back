import { createContext, useEffect, useState } from 'react';
import useCurrentDate from '../hooks/useCurrentDate';
import {
  formatDateTime,
  counterZeroPad,
  counterGetAMPM,
  counterFormatHours,
} from '../utils/counterFormatDateTime';
import Modal from '../components/Modal';

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
  const [error, setError] = useState('');

  const currentDate = useCurrentDate();

  const formattedDate = formatDateTime(
    currentDate,
    counterZeroPad,
    counterFormatHours,
    counterGetAMPM
  );

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

      setFeedback(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
      setError('Error fetching data: check your internet connection');
    }
  };

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
        handleDeleteCancelled,
        handleDeleteConfirmed,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export { FeedbackProvider };
export default FeedbackContext;
