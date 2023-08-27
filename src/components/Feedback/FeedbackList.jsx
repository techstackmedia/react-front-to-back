import React, { useState, useEffect, useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import Pulse from '../Pulse';
import FeedbackContext from '../../context/FeedbackContext';

const FeedbackList = () => {
  const { feedback, isLoading, error } = useContext(FeedbackContext);
  const [is24HrFormat, setIs24HrFormat] = useState(true);

  useEffect(() => {
    const storedFormat = localStorage.getItem('timeFormat');
    if (storedFormat) {
      setIs24HrFormat(storedFormat === '24-hour');
    }
  }, []);

  const handleTimeToggle = () => {
    setIs24HrFormat((prevFormat) => {
      const newFormat = !prevFormat;
      localStorage.setItem('timeFormat', newFormat ? '24-hour' : '12-hour');
      return newFormat;
    });
  };

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }

  return isLoading ? (
    <>
      <Pulse />
      {error && <p className='errorIndicator'>{error}</p>}
    </>
  ) : (
    <div className='feedback-list'>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={handleTimeToggle}
          style={{
            backgroundColor: '#fff',
            border: '1px solid #fff',
            borderRadius: 4,
            cursor: 'pointer',
            padding: '5px 10px',
          }}
        >
          {is24HrFormat
            ? 'Switch to 12-hour format'
            : 'Switch to 24-hour format'}
        </button>
      </div>

      {feedback.map((feedbackItem) => {
        return (
          <FeedbackItem
            item={feedbackItem}
            key={feedbackItem._id}
            is24HrFormat={is24HrFormat}
          />
        );
      })}
    </div>
  );
};

export default FeedbackList;
