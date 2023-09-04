import { Link, useLocation, useNavigate } from 'react-router-dom';
import Toggler from './Toggler';
import ProfileImage from './ProfileImage';
import Button from './shared/Button';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const Header = ({ text, bgColor, textColor }) => {
  const { setShowModal } = useContext(FeedbackContext);
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClickLogout = () => {
    navigate('/signin');
    setShowModal(false);
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
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
        {pathname === '/signin' ? null : (
          <Button
            version='secondary'
            sx={{
              position: 'absolute',
              top: 16,
              right: 118,
              width: 55,
              zIndex: 1,
              height: 34,
            }}
            onClick={handleClickLogout}
          >
            {pathname === '/register' ? 'Login' : 'Logout'}
          </Button>
        )}
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
