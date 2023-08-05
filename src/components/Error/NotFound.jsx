// NotFound.jsx
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import { feedbackReducer } from '../../context/feedbackReducer';

const NotFound = () => {
  const navigate = useNavigate();
  const initialState = {
    text: 'This page is not found',
    btnDisabled: false,
    message: null,
    rating: 0,
  };

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className='container'>
      <div className='not-found'>
        <h1 style={{ position: 'relative', top: -10 }}>{state.text}</h1>
        <div style={{ justifyContent: 'center' }}>
          <Button type='button' version='secondary' onClick={handleClick}>
            Back to Home
          </Button>
          <h1 style={{ position: 'absolute', top: '30vh', fontSize: 60 }}>
            <span className='error'>4</span>0<span className='error'>4</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
