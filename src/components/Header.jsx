import { Link } from 'react-router-dom';
import Toggler from './shared/Toggler';

const Header = ({ text, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>
          <Link to='/'>{text}</Link>
        </h2>
      </div>
      <div>
        <Toggler text={text} />
      </div>
    </header>
  );
};

export default Header;

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a95',
};
