import PropTypes from 'prop-types';

const FeedbackStats = ({ feedback }) => {
  const average =
    feedback.length === 0
      ? 0
      : feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length;

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average.toFixed(1).replace(/[.,]0$/, '')}</h4>
    </div>
  );
};

export default FeedbackStats;

FeedbackStats.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      text: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
};
