const Header = ({ text, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>
          <a href='/'>{text}</a>
        </h2>
      </div>
    </header>
  );
};

export default Header;
