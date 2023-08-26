import { FaEdit, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';

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
        <FaTimes color='purple' />
      </button>
      <button onClick={handleEditButton} className='edit'>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;

Card.defaultProps = {
  reverse: false,
};

/* Now that we are using uuid as our updated id, the prop type for id can be either a number (for initial ids) or a string (for updated ids) */
// Warning: Failed prop type: Invalid prop `item.id` of type `string` supplied to `FeedbackItem`, expected `number`.

FeedbackItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
