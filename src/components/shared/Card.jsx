const Card = ({ children, reverse, sx }) => {
  const classes = `card ${reverse ? 'reverse' : ''}`.trim();

  return (
    <div className={classes} style={sx}>
      {children}
    </div>
  );
};

export default Card;
