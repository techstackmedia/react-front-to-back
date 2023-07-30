import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState(null);
  const handleTextChange = (e) => {
    const newText = text.trim();

    /* ...will explain why we need to use the variable newText to store the value e.target.value.trim() instead of text.trim() in the next chapter or branch. */
    // const newText = e.target.value

    if (newText === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (newText.length < 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
    // setText(newText)
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
        <div className='input-group'>
          <input
            placeholder='Write a review'
            type='text'
            onChange={handleTextChange}
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message ? <div className='message'>{message}</div> : null}
      </form>
    </Card>
  );
};

export default FeedbackForm;
