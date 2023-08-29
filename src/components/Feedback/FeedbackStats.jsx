import useFeedback from '../../hooks/useFeedback';

const FeedbackStats = () => {
  const { feedback } = useFeedback();
  const average =
    feedback.length === 0
      ? 0
      : feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length;
  const formattedAverage = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <>
      <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {formattedAverage}</h4>
      </div>
    </>
  );
};

export default FeedbackStats;
