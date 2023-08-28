const FeedbackList = ({ feedback }) => {
  console.log(feedback); // check the console

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className='feedback-list'>
      {feedback.map((feedbackItem) => {
        return <div key={feedbackItem.id}>{feedbackItem.rating}</div>;
      })}
    </div>
  );
};

export default FeedbackList;
