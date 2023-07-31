import PropTypes from 'prop-types';
import Card from './shared/Card';
import closeIcon from '../images/closeIcon.svg';
import editIcon from '../images/editIcon.svg';

const FeedbackItem = ({ item, handleDeleteFeedback, handleEditFeedback }) => {
  const handleDeleteButton = () => {
    handleDeleteFeedback(item.id);
  };

  const handleEditButton = () => {
    handleEditFeedback(item);
  };

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={handleDeleteButton} className='close'>
        <img
          src={closeIcon}
          alt='close icon'
          /* width={16} */ width={13.328}
          height={13.328}
        />
      </button>
      <button onClick={handleEditButton} className='edit'>
        <img
          src={editIcon}
          alt='edit icon'
          /* width={16} */ width={13.328}
          height={13.328}
        />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;

Card.defaultProps = {
  reverse: false,
};

FeedbackItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
