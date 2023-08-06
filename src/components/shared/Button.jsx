const Button = ({ children, version, type, isDisabled, onClick, sx }) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn btn-${version}`}
      onClick={onClick}
      style={sx}
    >
      {children}
    </button>
  );
};

export default Button;
