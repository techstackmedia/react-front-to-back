import Header from '../components/Header';
import Card from '../components/shared/Card';
import Footer from '../components/Footer';
import AboutIcon from '../components/AboutIcon';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Button from '../components/shared/Button';
import { useNavigate } from 'react-router';

const About = () => {
  const { isFalse } = useContext(FeedbackContext);
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate('/');
  };

  return (
    <>
      <Header />
      <div className='container'>
        <div>
          <Card reverse={isFalse}>
            <div className='about'>
              <h1>About This Project</h1>
              <p>
                This is a React app to leave feedback for a product or service
              </p>
              <p>Version 1.0.0</p>
              <Button
                version='secondary'
                onClick={handleClick}
                style={{ color: isFalse ? '#fff' : undefined }}
              >
                Back to Home
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
      <AboutIcon />
    </>
  );
};

export default About;
