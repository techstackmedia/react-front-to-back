const Button = ({ children, version, type, isDisabled, onClick }) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn btn-${version}`}
      onClick={onClick} // Pass the onClick prop to the button
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
