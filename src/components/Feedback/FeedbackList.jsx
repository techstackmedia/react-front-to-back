import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../../context/FeedbackContext';
import Pulse from '../Pulse';

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }

  return isLoading ? (
    <Pulse />
  ) : (
     <div className='feedback-list'>
      {feedback.map((feedbackItem) => {
        return <FeedbackItem item={feedbackItem} key={feedbackItem._id} />;
      })}
    </div>
  );
};

export default FeedbackList;
