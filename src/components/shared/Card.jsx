const Card = ({ children, reverse }) => {
  const classes = `card ${reverse ? 'reverse' : ''}`.trim();
  
  return <div className={classes}>{children}</div>;
};

export default Card;
