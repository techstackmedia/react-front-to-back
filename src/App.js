import PropTypes from 'prop-types'
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
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

/* You can optionally remove all prop-types checking  */
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

FeedbackItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

FeedbackStats.prototype = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      rating: PropTypes.string,
    })
  ),
};
