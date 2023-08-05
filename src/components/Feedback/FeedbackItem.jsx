import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';
import Card from '../shared/Card';
import closeIcon from '../../images/closeIcon.svg';
import editIcon from '../../images/editIcon.svg';

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback, isFalse } = useContext(FeedbackContext);

  const handleDeleteButton = () => {
    deleteFeedback(item._id);
  };

  const handleEditButton = () => {
    editFeedback(item);
  };

  return (
    <Card reverse={isFalse}>
      <div className='num-display'>{item.rating}</div>
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
