import { useContext, useEffect, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import { nanoid } from 'nanoid';
import { Link, Navigate, useLocation } from 'react-router-dom';
import QRCode from 'react-qr-code';
import TokenExpiredModal from './TokenExpiredModal';
import exclamation from '../images/exclamation.png';

const Login = () => {
  const {
    handleLogin,
    formDataLogin,
    setFormDataLogin,
    error,
    loggedIn,
    otp,
    isTwoFactorEnabled,
    setOtp,
    setIsTwoFactorEnabled,
    generateQRCode,
    showModal,
    setShowModal, // Add setShowModal function
  } = useContext(FeedbackContext);
  const { pathname } = useLocation();
  const token = nanoid();

  useEffect(() => {
    if (pathname === '/signin') {
      localStorage.setItem('accessToken', `${token}`);
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('refreshToken');
      localStorage.setItem('accessTokenExpiration', '0');
    }
  }, []);

  const [qrCodeDataURL, setQRCodeDataURL] = useState('');

  useEffect(() => {
    if (isTwoFactorEnabled) {
      generateQRCode().then((dataURL) => {
        setQRCodeDataURL(dataURL);
      });
    }
  }, [isTwoFactorEnabled, generateQRCode]);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(formDataLogin);
  };

  useEffect(() => {
    // Use a setTimeout to automatically close the modal after 3 seconds
    if (showModal) {
      const modalTimer = setTimeout(() => {
        setShowModal(false);
      }, 3000);

      return () => {
        clearTimeout(modalTimer); // Clear the timer if the component unmounts
      };
    }
  }, []);

  if (loggedIn) {
    return <Navigate to='/' />;
  }

  return (
    <div className='auth'>
      <div className='container-auth'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            value={formDataLogin.email}
            onChange={(e) =>
              setFormDataLogin({ ...formDataLogin, email: e.target.value })
            }
            placeholder='Email'
          />
          <input
            type='password'
            name='password'
            value={formDataLogin.password}
            onChange={(e) =>
              setFormDataLogin({ ...formDataLogin, password: e.target.value })
            }
            placeholder='Password'
          />
          <input
            type='text'
            name='otp'
            placeholder='OTP'
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <label className='enable-label-2fa'>
            <div className='enable2fa'>
              Enable Two-Factor Auth
              <span className='removeText'>entication</span>
            </div>
            <input
              type='checkbox'
              name='twoFactorEnabled'
              checked={isTwoFactorEnabled}
              onChange={(e) => setIsTwoFactorEnabled(e.target.checked)}
              title='Enable Two-Factor Authentication'
            />
          </label>
          {isTwoFactorEnabled && (
            <div style={{ textAlign: 'center', marginBlock: 30 }}>
              <QRCode value={qrCodeDataURL} />
            </div>
          )}
          <button type='submit'>Login</button>
          <div>
            <hr
              style={{
                borderBottom: 'none',
                borderTop: '1px solid #ccc',
                position: 'relative',
                top: 22,
              }}
            />
            <div className='linke-register'
              style={{
                position: 'relative',
                top: 8,
                backgroundColor: '#f8f8f8',
                width: 80,
                marginInline: 'auto',
                textAlign: 'center',
              }}
            >
              <Link to='/register'>Register</Link>
            </div>
          </div>
        </form>
        {error ? (
          <div className='error-message'>
            <p style={{ display: 'flex' }}>
              <img
                src={exclamation}
                alt='exclamation icon'
                width={24}
                height={24}
              />{' '}
              {error}
            </p>
          </div>
        ) : null}
        {showModal && <TokenExpiredModal showModal={showModal} />}
      </div>
    </div>
  );
};

export default Login;
