// eslint-disable-next-line no-unused-vars
import { useContext, useReducer } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../../context/FeedbackContext';
import Pulse from '../Pulse';
// eslint-disable-next-line no-unused-vars
import { feedbackReducer } from '../../context/feedbackReducer';

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  // eslint-disable-next-line no-unused-vars
  const initialState = {};

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(feedbackReducer, initialState);

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
