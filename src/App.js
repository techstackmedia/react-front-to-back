import { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 } from 'uuid';
import { AnimatePresence, motion } from 'framer-motion';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const addFeedbackItem = (newFeedbackItem) => {
    const id = v4();
    newFeedbackItem.id = id;
    const updatedFeedbackArray = [newFeedbackItem, ...feedback];
    setFeedback(updatedFeedbackArray);
  };

  const handleDeleteCard = (id) => {
    setShowDeleteModal(true);
    setItemToDelete(id);
  };

  const handleDeleteConfirmed = () => {
    setShowDeleteModal(false);
    setFeedback((prev) => prev.filter((item) => item.id !== itemToDelete));
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
    <AnimatePresence>
      <motion.div
        className='custom-modal'
        onClick={closeModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className='modal-content'
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
        >
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAddItem={addFeedbackItem} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDeleteCard={handleDeleteCard} />
      </div>

      {alertConfirmationModal}
    </>
  );
};

export default App;
