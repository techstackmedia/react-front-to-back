import { useContext } from 'react';
import FeedbackForm from '../../components/Feedback/FeedbackForm';
import FeedbackList from '../../components/Feedback/FeedbackList';
import FeedbackStats from '../../components/Feedback/FeedbackStats';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import AboutIcon from '../../components/AboutIcon';
import FeedbackContext from '../../context/FeedbackContext';
import Timer from '../../components/Timer';
import Toast from '../../components/Toast';

const Home = () => {
  const { alertConfirmationModal } = useContext(FeedbackContext);

  return (
    <>
      {alertConfirmationModal}

      <Header text='Feedback' color='#ff6a95' bgColor='rgba(0, 0, 0, 0.4)' />
      <div className='container'>
        <div>
          <FeedbackForm />
          <FeedbackStats />
          <Timer />
          <FeedbackList />
        </div>
      </div>
      <Footer />
      <AboutIcon />
      <Toast />
    </>
  );
}

export default Home;
