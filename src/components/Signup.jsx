import { useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import { Navigate, useLocation } from 'react-router-dom';
import exclamation from '../images/exclamation.png';

const Signup = () => {
  const {
    handleSignUp,
    formDataSignUp,
    setFormDataSignUp,
    error,
    loggedIn,
  } = useContext(FeedbackContext);

  const { pathname } = useLocation();

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
