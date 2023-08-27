import { createContext, useEffect, useState } from 'react';

const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
  useEffect(() => {
    getFeedback();
  }, []);

  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [error, setError] = useState('');
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // useEffect(() => {
  //   const getFeedback = () => {
  //     fetch('http://localhost:4000/feedback', {
  //       method: "GET",
  //     })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setFeedback(data)
  //       setIsLoading(false)
  //     })
  //   }
  //   getFeedback()
  // }, [])

  const getFeedback = async () => {
    try {
      const response = await fetch(
        'http://localhost:4000/feedback?_sort=id&_order=desc',
        {
          method: 'GET',
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      setFeedback(data);
      setIsLoading(false);
    } catch (error) {
      setError('Error fetching data: check your internet connection');
      console.error('Error fetching data:', error);
    }
  };

  const addFeedback = async (newFeedbackItem) => {
    const response = await fetch(`http://localhost:4000/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedbackItem),
    });

    const data = await response.json();
    // data.id = -(new Date().getTime()); // You can use any unique negative value for ID. Might not work for JSON Server

    const updatedFeedbackArray = [data, ...feedback];
    setFeedback(updatedFeedbackArray);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const deleteFeedback = (id) => {
    setShowDeleteModal(true);
    setItemToDelete(id);
  };

  const updateFeedback = async (id, itemUpdate) => {
    const response = await fetch(`http://localhost:4000/feedback/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itemUpdate),
    });

    const data = await response.json();

    setFeedback((prevFeedback) =>
      prevFeedback.map((item) => {
        return item.id === id ? { ...item, ...data } : item;
      })
    );
  };

  const handleDeleteConfirmed = async () => {
    await fetch(`http://localhost:4000/feedback/${itemToDelete}`, {
      method: 'DELETE',
    });

    setShowDeleteModal(false);
    setFeedback((prevFeedback) => {
      return prevFeedback.filter((item) => {
        return item.id !== itemToDelete;
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
        error,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export { FeedbackProvider };
export default FeedbackContext;
