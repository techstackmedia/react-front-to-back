import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Card from '../components/shared/Card';
import Footer from '../components/Footer';
import AboutIcon from '../components/AboutIcon';
import useFeedback from '../hooks/useFeedback';

const About = () => {
  const {isFalse} = useFeedback()
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
              <Link to='/' style={{color: isFalse ? '#fff' : undefined}}>Back to Home</Link>
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