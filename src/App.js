import { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback((prev) => {
        return prev.filter((item) => {
          return item.id !== id;
        });
      });
    }
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default App;
