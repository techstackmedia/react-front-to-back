import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

const App = () => {
  const { alertConfirmationModal } = useContext(FeedbackContext);
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </div>

      {alertConfirmationModal}
    </>
  );
};

export default App;

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a95',
};
