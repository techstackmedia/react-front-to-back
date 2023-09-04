import { useContext, useEffect, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import { nanoid } from 'nanoid';
import { Link, Navigate, useLocation } from 'react-router-dom';
import QRCode from 'react-qr-code';
import TokenExpiredModal from './TokenExpiredModal';
import Toast from './Toast';

const Login = () => {
  const {
    handleLogin,
    formDataLogin,
    setFormDataLogin,
    loggedIn,
    otp,
    isTwoFactorEnabled,
    setOtp,
    setIsTwoFactorEnabled,
    generateQRCode,
    showModal,
    setShowModal, 
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (showModal) {
      const modalTimer = setTimeout(() => {
        setShowModal(false);
      }, 3000);

      return () => {
        clearTimeout(modalTimer); 
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
            <div
              className='linke-register'
              style={{
                position: 'relative',
                top: 8,
                backgroundColor: '#f8f8f8',
                width: 80,
                marginInline: 'auto',
                textAlign: 'center',
              }}
            >
              <Link style={{ textDecoration: 'none' }} to='/register'>
                Register
              </Link>
            </div>
          </div>
        </form>
        <Toast />
        {showModal && <TokenExpiredModal showModal={showModal} />}
      </div>
    </div>
  );
};

export default Login;
