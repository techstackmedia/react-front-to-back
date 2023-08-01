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
        <h1 style={{ position: 'relative', top: -10 }}>
          This page is not found
        </h1>
        <div style={{ justifyContent: 'center' }}>
          <Button type='button' version='secondary' onClick={handleClick}>
            Back to Home
          </Button>
          <h1 style={{ position: 'absolute', top: '30vh', fontSize: 60 }}>
            <span className='error'>4</span>0
            <span className='error'>4</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
