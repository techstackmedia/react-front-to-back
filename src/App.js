import { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 } from 'uuid';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from './components/Modal';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedbackItem = (newFeedbackItem) => {
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

  console.log(feedbackEdit);

  const deleteFeedback = (id) => {
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
    <Modal
      closeModal={closeModal}
      handleDeleteCancelled={handleDeleteCancelled}
      handleDeleteConfirmed={handleDeleteConfirmed}
    />
  );

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm
          handleAddItem={addFeedbackItem}
          feedbackEdit={feedbackEdit}
        />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          handleDeleteFeedback={deleteFeedback}
          handleEditFeedback={editFeedback}
        />
      </div>

      {alertConfirmationModal}
    </>
  );
};

export default App;
