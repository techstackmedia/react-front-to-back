import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedback }) => {
  // console.log(feedback)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className='feedback-list'>
      {feedback.map((feedbackItem) => {
        // return <div key={feedbackItem.id}>{feedbackItem.rating}</div>
        return <FeedbackItem item={feedbackItem} key={feedbackItem.id} />;
      })}
    </div>
  );
};

export default FeedbackList;
