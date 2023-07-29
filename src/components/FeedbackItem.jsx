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

FeedbackItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
