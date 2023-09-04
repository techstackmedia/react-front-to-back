import { useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import exclamation from '../images/exclamation.png';

const Toast = () => {
  const { error, success, setSuccess } =
    useContext(FeedbackContext);
  useEffect(() => {
    // Use a setTimeout to automatically clear the success message after 3 seconds
    if (success) {
      const successTimer = setTimeout(() => {
        clearSuccess();
      }, 3000);

      return () => {
        clearTimeout(successTimer); // Clear the timer if the component unmounts
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  const clearSuccess = () => {
    setSuccess('');
  };
  return error ? (
    <div className='error-message'>
      <p style={{ display: 'flex' }}>
        <img src={exclamation} alt='exclamation icon' width={24} height={24} />{' '}
        {error}
      </p>
    </div>
  ) : success ? (
    <div className='success-message' style={{top: 100}}>
      <p style={{ display: 'flex', gap: 5 }}>
        <img src={'https://img.icons8.com/fluency/48/ok--v1.png'} alt='success icon' width={24} height={24} />{' '}
        {success}
      </p>
    </div>
  ) : null;
};

export default Toast;
