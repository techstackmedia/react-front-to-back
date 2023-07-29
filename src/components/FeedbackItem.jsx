import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';

const FeedbackItem = ({ item: { rating, text, id }, handleDelete }) => {
  // feedback state is not found here but in App.js
  // const handleDelete = (id) => {
  //   console.log(id)
  // }

  // clickButtonHandler
  const handleClickButton = () => {
    handleDelete(id)
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
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
