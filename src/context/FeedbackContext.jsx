import { createContext, useEffect, useState } from 'react';
import useCurrentDate from '../hooks/useCurrentDate';

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
  const [error, setError] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [isFalse, setIsFalse] = useState(false);

  const currentDate = useCurrentDate();

  const formatDateTime = (dateObj) => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const month = monthNames[dateObj.getMonth()];
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const hour = formatHours(dateObj.getHours());
    const minute = zeroPad(dateObj.getMinutes());
    const seconds = zeroPad(dateObj.getSeconds());
    const AMPM = getAMPM(dateObj.getHours());

    return `📅 ${month} ${day}, ${year} ⏲️ ${hour}:${minute}:${seconds} ${AMPM}`;
  };

  const zeroPad = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const getAMPM = (hours) => {
    return hours >= 12 ? 'PM' : 'AM';
  };

  const formatHours = (hours) => {
    return hours % 12 || 12;
  };

  const formattedDate = formatDateTime(currentDate);

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

  const alertConfirmationModal = showDeleteModal && (
    <div className='custom-modal' onClick={closeModal}>
      <div className='modal-content'>
        <h2>Confirmation</h2>
        <p>Are you sure you want to delete this item?</p>
        <div className='modal-actions'>
          <button
            type='button'
            onClick={handleDeleteConfirmed}
            className='btn-confirm'
          >
            Confirm
          </button>
          <button
            type='button'
            onClick={handleDeleteCancelled}
            className='btn-cancel'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

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
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export { FeedbackProvider };
export default FeedbackContext;
