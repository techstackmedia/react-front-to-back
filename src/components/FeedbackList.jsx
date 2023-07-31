import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

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
      {feedback.map((feedbackItem) => {
        return (
          <FeedbackItem
            item={feedbackItem}
            key={feedbackItem.id}
            handleDeleteFeedback={handleDeleteFeedback}
            handleEditFeedback={handleEditFeedback}
          />
        );
      })}
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
