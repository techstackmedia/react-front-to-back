import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';

const NotFound = () => {
  const navigate = useNavigate('/');

  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className='container'>
      <div className='not-found'>
        <h1>Oops! 🤔</h1>
        <h2>404 - Not Found</h2>
        <div style={{ justifyContent: 'center' }}>
          <Button type='button' version='secondary' onClick={handleClick}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
