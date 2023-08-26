import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';
import { AnimatePresence, motion } from 'framer-motion';

const FeedbackList = ({
  feedback,
  handleDeleteFeedback,
  handleEditFeedback,
}) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((feedbackItem) => {
          return (
            <motion.div
              key={feedbackItem.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                item={feedbackItem}
                key={feedbackItem.id}
                handleDeleteFeedback={handleDeleteFeedback}
                handleEditFeedback={handleEditFeedback}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
