import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import useFeedback from '../../hooks/useFeedback';
import Card from '../shared/Card';
import Button from '../shared/Button';
import formatDateAndTime from '../../functions/date';
import Footer from '../Footer';

const FeedbackDetails = () => {
  const {isFalse} = useFeedback()
  const { id } = useParams();
  const { feedback } = useFeedback();
  const detail = feedback.find((item) => {
    return item?._id === id;
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
        <Card reverse={isFalse} style={{ width: '90%' }}>
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
      </div>
      <Routes>
        <Route path='/show' element={<Footer />} />
      </Routes>
    </>
  );
};

export default FeedbackDetails;
