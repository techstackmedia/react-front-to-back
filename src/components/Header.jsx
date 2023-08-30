import { Link } from 'react-router-dom';
import Toggler from './Toggler';
import ProfileImage from './ProfileImage';
import DropDown from './DropDown';

const Header = ({ text, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    // display: 'flex',
    // height: 80,
    // alignItems: 'center',
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <DropDown />
        <h2>
          <Link to='/'>{text}</Link>
        </h2>
      </div>
      <div
        style={{
          display: 'flex',
          width: 100,
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
      >
        <ProfileImage />
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
