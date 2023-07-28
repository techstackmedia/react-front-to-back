import PropTypes from 'prop-types';

const Card = ({ children, reverse }) => {
  //   const classes = `card ${reverse && 'reverse'}`;
  //   return <div className={classes}>{children}</div>;
  return (
    <div
      className='card'
      style={{
        backgroundColor: reverse ? 'rgba(0, 0, 0, 0.4)' : undefined,
        color: reverse ? '#fff' : undefined,
      }}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
