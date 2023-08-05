import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';
// import { FaToggleOn, FaToggleOff } from 'react-icons/fa';
import toggleOn from '../../images/toggleOn.svg';
import toggleOff from '../../images/toggleOff.svg';

const Toggler = () => {
  const { handleClickToggler, isFalse } = useContext(FeedbackContext);

  return (
    <div
      onClick={handleClickToggler}
      style={{ position: 'relative', right: 15 }}
    >
      {!isFalse ? (
        <img src={toggleOn} alt='Toggle On' />
      ) : (
        <img src={toggleOff} alt='Toggle Off' />
      )}
      {/* {!isFalse ? (
        <FaToggleOn size={30} />
      ) : (
        <FaToggleOff size={30} />
      )} */}
    </div>
  );
};

export default Toggler;