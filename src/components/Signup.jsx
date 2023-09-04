import { useContext, useEffect, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import { Navigate, useLocation } from 'react-router-dom';
import QRCode from 'react-qr-code';
import exclamation from '../images/exclamation.png';

const Signup = () => {
  const {
    handleSignUp,
    formDataSignUp,
    setFormDataSignUp,
    error,
    loggedIn,
    otp, // Added OTP state
    isTwoFactorEnabled, // Added 2FA state
    setOtp, // Function to set OTP
    setIsTwoFactorEnabled, // Function to set 2FA
    generateQRCode,
  } = useContext(FeedbackContext);

  const [qrCodeDataURL, setQRCodeDataURL] = useState(''); // State to store QR code data URL
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTwoFactorEnabled) {
      // Fetch the QR code data URL when 2FA is enabled
      generateQRCode().then((dataURL) => {
        setQRCodeDataURL(dataURL);
      });
    }
  }, [isTwoFactorEnabled, generateQRCode]);

  useEffect(() => {
    if (pathname === '/register') {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('accessTokenExpiration');
    }
  }, [pathname]);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignUp(formDataSignUp);
  };

  if (loggedIn) {
    return <Navigate to='/' />;
  }

  return (
    <div className='auth'>
      <div className='container-auth'>
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='firstName'
            value={formDataSignUp.firstName}
            onChange={(e) =>
              setFormDataSignUp({
                ...formDataSignUp,
                firstName: e.target.value,
              })
            }
            placeholder='First Name'
          />
          <input
            type='text'
            name='lastName'
            value={formDataSignUp.lastName}
            onChange={(e) =>
              setFormDataSignUp({ ...formDataSignUp, lastName: e.target.value })
            }
            placeholder='Last Name'
          />
          <input
            type='email'
            name='email'
            value={formDataSignUp.email}
            onChange={(e) =>
              setFormDataSignUp({ ...formDataSignUp, email: e.target.value })
            }
            placeholder='Email'
          />
          <input
            type='password'
            name='password'
            value={formDataSignUp.password}
            onChange={(e) =>
              setFormDataSignUp({ ...formDataSignUp, password: e.target.value })
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
              {/* Display the QR code to the user */}
              <QRCode value={qrCodeDataURL} />
            </div>
          )}
          <button type='submit'>Sign Up</button>
        </form>
        {error ? (
          <div className='error-message'>
            <p>
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
      </div>
    </div>
  );
};

export default Signup;
