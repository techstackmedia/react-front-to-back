import React, { useState, useEffect } from 'react';
import FeedbackItem from './FeedbackItem';
import Pulse from '../Pulse';
import useFeedback from '../../hooks/useFeedback';

const FeedbackList = () => {
  const { feedback, isLoading } = useFeedback();
  const [is24HrFormat, setIs24HrFormat] = useState(true);

  // Load the user's preference from localStorage on component mount
  useEffect(() => {
    const storedFormat = localStorage.getItem('timeFormat');
    if (storedFormat) {
      setIs24HrFormat(storedFormat === '24-hour');
    }
  }, []);

  // Function to toggle the time format and update localStorage
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
  /*background: #fff;
    border: 1px solid #fff;
    padding: 5px 10px;
    border-radius: 4px; */

  return isLoading ? (
    <Pulse />
  ) : (
    <div className='feedback-list'>
      {/* Display the time format toggle button */}
      <div>
        <button
          onClick={handleTimeToggle}
          style={{
            backgroundColor: '#fff',
            border: '1px solid #fff',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          {is24HrFormat
            ? 'Switch to 12-hour format'
            : 'Switch to 24-hour format'}
        </button>
      </div>

      {feedback.map((feedbackItem) => {
        // Pass the is24HourFormat state to the FeedbackItem component
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
