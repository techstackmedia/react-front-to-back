import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const Timer = () => {
  const { currentDate } = useContext(FeedbackContext);

  const date = currentDate.split('⏲️')[0];
  // const time = `${currentDate.split('⏲️')[1]}`;
  const time = `⏲️ ${currentDate.split('⏲️')[1]}`;
  return (
    <div className='feedback-stats' /* style={{position: 'relative'}} */>
      <h5>{date}</h5>
      {/* <div style={{position: 'absolute', right: 75}}>⏲️</div> */}
      <h5>{time}</h5>
    </div>
  );
};

export default Timer;
