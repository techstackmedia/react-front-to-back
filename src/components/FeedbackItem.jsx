import Card from './shared/Card';

const FeedbackItem = ({ item: { rating, text } }) => {
  return (
    // className='card' by default in the Card component
    <Card /* className='card' */>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
    </Card>
  );
};

export default FeedbackItem;
