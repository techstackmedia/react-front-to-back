import { useState } from 'react';

const FeedbackItem = () => {
  const [rating, setRating] = useState(10);
  const [text, setText] = useState('This is an example of a feedback Item');
  const [increment, setIncrement] = useState(10);

  const handleClick = () => {
    setRating(7);
    setText('This text is updated');
  };

  const handleClickIncrement = () => {
    setIncrement((prevState) => {
      return prevState + 1;
    });
  };
  
  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
      <button onClick={handleClick}>Change Text and Rating</button>
      <button onClick={handleClickIncrement}>Increment</button>
      <div className='text-display'>{increment}</div>
    </div>
  );
};

export default FeedbackItem;
