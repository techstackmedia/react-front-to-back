import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';

const FeedbackStats = () => {
  const { feedback, currentDate } = useContext(FeedbackContext);
  const average =
    feedback.length === 0
      ? 0
      : feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length;
  const formattedAverage = average.toFixed(1).replace(/[.,]0$/, '');
  const date = currentDate.split('⏲️')[0];
  // const time = `${currentDate.split('⏲️')[1]}`;
  const time = `⏲️ ${currentDate.split('⏲️')[1]}`;

  return (
    <>
      <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {formattedAverage}</h4>
      </div>
      <div className='feedback-stats' /* style={{position: 'relative'}} */>
        <h5>{date}</h5>
        {/* <div style={{position: 'absolute', right: 75}}>⏲️</div> */}
        <h5>{time}</h5>
      </div>
    </>
  );
};

export default FeedbackStats;
