import { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

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

  const alertConfirmationModal = showDeleteModal && (
    <div className='custom-modal'>
      <div className='modal-content'>
        <h2>Confirmation</h2>
        <p>Are you sure you want to delete this item?</p>
        <div className='modal-actions'>
          <button onClick={handleDeleteConfirmed} className='btn-confirm'>
            Confirm
          </button>
          <button onClick={handleDeleteCancelled} className='btn-cancel'>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDeleteCard={handleDeleteCard} />
      </div>

      {alertConfirmationModal}
    </>
  );
};

export default App;
