import { Link } from 'react-router-dom';
import questionIcon from '../images/questionIcon.svg';

const AboutIcon = () => {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <img src={questionIcon} alt='question icon' width={30} height={30} />
      </Link>
    </div>
  );
};

export default AboutIcon;
