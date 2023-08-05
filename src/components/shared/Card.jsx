const Card = ({ children, reverse }) => {
  const classes = `card ${reverse ? 'reverse' : ''}`.trim();
  
  return <div className={classes}>{children}</div>;
};

Card.defaultProps = {
  reverse: false,
};

export default Card;
