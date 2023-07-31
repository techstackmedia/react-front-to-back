import { createContext, useState } from 'react';
import FeedbackData from '../data/FeedbackData';
import { v4 } from 'uuid';

const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = (newFeedbackItem) => {
    const id = v4();
    newFeedbackItem.id = id;
    const updatedFeedbackArray = [newFeedbackItem, ...feedback];
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

  const updateFeedback = (id, itemUpdate) => {
    console.log(id, itemUpdate);
    setFeedback(
      feedback.map((item) => {
        return item.id === id ? { ...item, ...itemUpdate } : item;
      })
    );
  };

  const handleDeleteConfirmed = () => {
    setShowDeleteModal(false);
    setFeedback((prev) => {
      return prev.filter((item) => {
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
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export { FeedbackProvider };
export default FeedbackContext;
