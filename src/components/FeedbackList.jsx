import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedback, handleDeleteCard }) => {
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
            handleDeleteCard={handleDeleteCard}
          />
        );
      })}
    </div>
  );
};

export default FeedbackList;

/* Now that we are using uuid as our updated id, the prop type for id can either be a number (initial ids) or a string (updated ids) */
// Warning: Failed prop type: Invalid prop `feedback[0].id` of type `string` supplied to `FeedbackList`, expected `number`.

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
