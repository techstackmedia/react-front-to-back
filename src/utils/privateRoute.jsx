import { Outlet, Navigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import spinner from '../images/spinner.svg'

const PrivateRoutes = () => {
  const { loggedIn } = useContext(FeedbackContext);

  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem('loggedIn', loggedIn);
    }
  }, [loggedIn]);

  const isAuth = localStorage.getItem('loggedIn');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoggedIn = async () => {
      setLoading(false);
    };
    void checkLoggedIn();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          position: 'relative',
          zIndex: 10
        }}
      >
        <img src={spinner} alt='spinner' />
      </div>
    );
  }

  return loggedIn || isAuth ? <Outlet /> : <Navigate to='/signin' />;
};

export default PrivateRoutes;
