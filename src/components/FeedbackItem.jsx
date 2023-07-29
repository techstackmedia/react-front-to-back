import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';

const FeedbackItem = ({ item: { rating, text, id } }) => {
  // const handleClick = () => {
  //   console.log(id)
  // }

  // pass the id
  const handleClick = (id) => {
    console.log(id)
  }

  const onClick = () => {
    handleClick(id)
  }

  return (
    <Card>
      <div className='num-display'>{rating}</div>
      {/* onClick is an event */}
      {/* <button onClick={() => console.log(id)} className='close'> */}
      {/* <button onClick={handleClick} className='close'> */}
      {/* if you want to pass the id */}
      {/* <button onClick={() => handleClick(id)} className='close'> */}
      <button onClick={onClick} className='close'>
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
