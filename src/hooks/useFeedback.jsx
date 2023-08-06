import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const useFeedback = () => {
  const {
    feedback,
    isLoading,
    showDeleteModal,
    itemToDelete,
    feedbackEdit,
    addFeedback,
    editFeedback,
    deleteFeedback,
    updateFeedback,
    alertConfirmationModal,
    isFalse,
    handleClickToggler,
    currentDate,
  } = useContext(FeedbackContext);

  return {
    feedback,
    isLoading,
    showDeleteModal,
    itemToDelete,
    feedbackEdit,
    addFeedback,
    editFeedback,
    deleteFeedback,
    updateFeedback,
    alertConfirmationModal,
    isFalse,
    handleClickToggler,
    currentDate,
  };
};

export default useFeedback