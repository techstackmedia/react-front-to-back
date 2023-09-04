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
    pathname !== '/signin' || pathname !== '/register'
      ? (window.location.href = '/signin')
      : navigate('/signin');
    setShowModal(false);
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <div style={{ position: 'absolute', left: 15, top: 16 }}>
          <Link to='/'>
            <img
              src='https://techstackmedia.com/images/ts-icon.svg'
              alt='techstackmedia logo'
              width={38}
              height={38}
            />
          </Link>
        </div>
        <h2 className='feedback-ui' style={{ position: 'relative', left: 50 }}>
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
        {pathname === '/signin' || pathname === '/register' ? null : (
          <ProfileImage />
        )}
        <div
          style={{
            right:
              pathname === '/signin' || pathname === '/register'
                ? -50
                : undefined,
            position: 'relative',
          }}
        >
          <Toggler text={text} />
        </div>
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
