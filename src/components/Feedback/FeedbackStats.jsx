import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';

const FeedbackStats = () => {
  const { feedback, currentDate } = useContext(FeedbackContext);
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
