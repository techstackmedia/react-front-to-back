const Card = ({ children, reverse, style }) => {
  const classes = `card ${reverse ? 'reverse' : ''}`.trim();

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

export default Card;
