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

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
};
