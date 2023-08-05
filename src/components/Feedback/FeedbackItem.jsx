// FeedbackItem.jsx
import { useReducer, useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';
import Card from '../shared/Card';
import closeIcon from '../../images/closeIcon.svg';
import editIcon from '../../images/editIcon.svg';
import { feedbackReducer } from '../../context/feedbackReducer';

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  const initialState = {
    rating: item.rating,
  };

  const [state] = useReducer(feedbackReducer, initialState);

  const handleDeleteButton = () => {
    deleteFeedback(item._id);
  };

  const handleEditButton = () => {
    editFeedback(item);
  };

  return (
    <Card>
      <div className='num-display'>{state.rating}</div>
      <button onClick={handleDeleteButton} className='close'>
        <img src={closeIcon} alt='close icon' width={13.328} height={13.328} />
      </button>
      <button onClick={handleEditButton} className='edit'>
        <img src={editIcon} alt='edit icon' width={13.328} height={13.328} />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
