import FeedbackItem from './FeedbackItem';
import Pulse from '../Pulse';
import useFeedback from '../../hooks/useFeedback';

const FeedbackList = () => {
  const { feedback, isLoading } = useFeedback();

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
