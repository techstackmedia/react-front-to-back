import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import toggleOn from '../images/toggleOn.svg'
import toggleOff from '../images/toggleOff.svg';

const Toggler = () => {
  const { handleClickToggler, isFalse } = useContext(FeedbackContext);

  return (
    <div
      onClick={handleClickToggler}
      style={{ position: 'relative', right: 15, cursor: 'pointer' }}
    >
      {!isFalse ? (
        <img src={toggleOn} alt='Toggle On' />
      ) : (
        <img src={toggleOff} alt='Toggle Off' />
      )}
    </div>
  );
};

export default Toggler;