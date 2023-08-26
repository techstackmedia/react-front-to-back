import PropTypes from 'prop-types';

const Card = ({ children, reverse }) => {
  const classes = `card ${reverse && 'reverse'}`;
  return <div className={classes}>{children}</div>;
};

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
