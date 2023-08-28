import { useState } from 'react';

const FeedbackItem = () => {
  const [rating, setRating] = useState(10);
  const [text, setText] = useState('This is an example of a feedback Item');
  const [increment, setIncrement] = useState(10);

  const handleClick = () => {
    // rating = 7 or text = 'This text is updated' will not work because state in React is immutable.
    // That is it can't be directly changed, it has to be reset
    setRating(7);
    setText('This text is updated');
  };

  const handleClickIncrement = () => {
    // if you need access to the previous state for example in the case of incrementing values
    setIncrement((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div className='card'>
      {/* <div className="num-display">10</div>
      <div className="text-display">This is an example of a feedback Item</div> */}
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
      <button onClick={handleClick}>Change Text and Rating</button>
      <button onClick={handleClickIncrement}>Increment</button>
      <div className='text-display'>{increment}</div>
    </div>
  );
};

export default FeedbackItem;
