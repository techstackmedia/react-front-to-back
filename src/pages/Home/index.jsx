import { useContext } from 'react';
import FeedbackForm from '../../components/Feedback/FeedbackForm';
import FeedbackList from '../../components/Feedback/FeedbackList';
import FeedbackStats from '../../components/Feedback/FeedbackStats';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import AboutIcon from '../../components/AboutIcon';
import FeedbackContext from '../../context/FeedbackContext';

function App() {
  const { alertConfirmationModal } = useContext(FeedbackContext);

  return (
    <>
      {alertConfirmationModal}

      <Header text='Feedback UI' color='#ff6a95' bgColor='rgba(0, 0, 0, 0.4)' />
      <div className='container'>
        <div>
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
        </div>
      </div>
      <Footer />
      <AboutIcon />
    </>
  );
}

export default App;
