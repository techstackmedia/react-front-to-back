import { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleDeleteCard = (id) => {
    // Show the custom delete modal and set the item to delete
    setShowDeleteModal(true);
    setItemToDelete(id);
  };

  const handleDeleteConfirmed = () => {
    // Close the custom delete modal
    setShowDeleteModal(false);

    // Perform the deletion of the item
    setFeedback((prev) => prev.filter((item) => item.id !== itemToDelete));
  };

  const handleDeleteCancelled = () => {
    // Close the custom delete modal
    setShowDeleteModal(false);
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} handleDeleteCard={handleDeleteCard} />
      </div>

      {/* Custom Delete Modal */}
      {showDeleteModal && (
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
      )}
    </>
  );
};

export default App;
