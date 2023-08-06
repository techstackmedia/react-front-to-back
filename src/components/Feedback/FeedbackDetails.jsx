import { useNavigate, useParams, } from 'react-router-dom';
import useFeedback from '../../hooks/useFeedback';
import Card from '../shared/Card';
import Button from '../shared/Button';
import formatDateAndTime from '../../functions/date';

const FeedbackDetails = () => {
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
      }}
    >
      <Card style={{ width: '80%' }}>
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
          <b>Date:</b> {dateString}
        </p>
        <Button
          type='button'
          version='secondary'
          onClick={onClick}
          style={{ position: 'relative', top: 20 }}
        >
          Back to Home
        </Button>
      </Card>
    </div>
  );
};

export default FeedbackDetails;
