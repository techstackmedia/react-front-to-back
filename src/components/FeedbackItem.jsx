import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';

const FeedbackItem = ({ item: { rating, text, id }, handleDeleteCard }) => {
  const handleClickButton = () => {
    handleDeleteCard(id)
  }

  return (
    <Card>
      <div className='num-display'>{rating}</div>
      <button onClick={handleClickButton} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{text}</div>
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
