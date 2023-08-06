const Button = ({ children, version, type, isDisabled, onClick, style }) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn btn-${version}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
};
