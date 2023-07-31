import PropTypes from 'prop-types';

const Card = ({ children, reverse }) => {
  const classes = `card ${reverse && 'reverse'}`;
  return <div className={classes}>{children}</div>;
};

Card.defaultProps = {
  reverse: false,
};

/* You can optionally remove all prop-types checking  */
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
