import React, { useState, useEffect, useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import Pulse from '../Pulse';
import FeedbackContext from '../../context/FeedbackContext';

const FeedbackList = () => {
  const { feedback, isLoading, error } = useContext(FeedbackContext);
  const [is24HrFormat, setIs24HrFormat] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [itemsPerPage] = useState(10); // Number of items to display per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const displayedFeedback = feedback.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(feedback.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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

      {displayedFeedback.map((feedbackItem) => {
        return (
          <FeedbackItem
            item={feedbackItem}
            key={feedbackItem._id}
            is24HrFormat={is24HrFormat}
          />
        );
      })}

      <div className='pagination-controls'>
        <button
          style={{ color: currentPage === 1 ? '#000' : undefined }}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span style={{ color: '#fff' }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          style={{ color: currentPage === totalPages ? '#000' : undefined }}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FeedbackList;
