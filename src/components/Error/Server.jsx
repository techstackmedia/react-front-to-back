import { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { feedbackReducer } from '../../context/feedbackReducer';

const Server = () => {
  const initialState = {
    centerText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    linkColor: {
      color: '#00f',
      textDecoration: 'none',
      backgroundColor: '#fff',
      padding: 5,
      borderRadius: 4,
    },
  };

  const [state] = useReducer(feedbackReducer, initialState);

  return (
    <div style={state.centerText}>
      <h1>
        Server Error <b>please check back</b>
      </h1>
      <Link to='/' style={state.linkColor}>
        Back to Home
      </Link>
    </div>
  );
};

export default Server;
