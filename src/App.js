import { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Modal from './components/Modal';

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
    <Modal
      handleDeleteConfirmed={handleDeleteConfirmed}
      handleDeleteCancelled={handleDeleteCancelled}
    />
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
