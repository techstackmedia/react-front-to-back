import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Card from '../shared/Card';
import Button from '../shared/Button';
import formatDateAndTime from '../../utils/date';
import Footer from '../Footer';
import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';

const FeedbackDetails = () => {
  const { isFalse, feedback } = useContext(FeedbackContext);
  const { id } = useParams();
  const detail = feedback.find((item) => {
    return item._id === id;
  });

  const dateString = formatDateAndTime(detail?.date);
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: 'calc(100vh - 100px)',
          alignItems: 'center',
        }}
      >
        {detail ? (
          <Card reverse={isFalse} sx={{ width: '90%' }}>
            <p>
              <b>Text: </b>
              {detail?.text}
            </p>
            <p>
              <b>Rating:</b> {detail?.rating}
            </p>
            <p>
              <b>ID:</b> {detail?._id}
            </p>
            <p>
              <b>Date:</b>{' '}
              {dateString === 'Invalid Date Invalid Date NaN NaN Invalid Date'
                ? null
                : dateString}
            </p>
            <Button
              type='button'
              version='secondary'
              onClick={onClick}
              sx={{ position: 'relative', top: 20 }}
            >
              Back to Home
            </Button>
          </Card>
        ) : (
          <Card reverse={isFalse} sx={{ width: '90%' }}>
            <h3 className='title'>No Feedback Details</h3>
          </Card>
        )}
      </div>
      <Routes>
        <Route path='/show' element={<Footer />} />
      </Routes>
    </>
  );
};

export default FeedbackDetails;
