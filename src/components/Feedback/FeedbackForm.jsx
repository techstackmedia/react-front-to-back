import { useContext, useEffect, useReducer } from 'react';
import FeedbackContext from '../../context/FeedbackContext';
import Card from '../shared/Card';
import Button from '../shared/Button';
import Rating from '../Rating';
import { feedbackReducer } from '../../context/feedbackReducer';

const initialState = {
  text: '',
  btnDisabled: true,
  message: null,
  rating: 0,
};

const FeedbackForm = () => {
  const { addFeedback, updateFeedback, feedbackEdit, isFalse } =
    useContext(FeedbackContext);

  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  const handleTextChange = (e) => {
    const newText = e.target.value;

    if (newText.trim() === '') {
      dispatch({ type: 'SET_TEXT', payload: newText });
      dispatch({ type: 'SET_BTN_DISABLED', payload: true });
      dispatch({ type: 'SET_MESSAGE', payload: null });
    } else if (newText.trim().length < 10) {
      dispatch({ type: 'SET_TEXT', payload: newText });
      dispatch({ type: 'SET_BTN_DISABLED', payload: true });
      dispatch({
        type: 'SET_MESSAGE',
        payload: 'Text must be at least 10 characters',
      });
    } else {
      dispatch({ type: 'SET_TEXT', payload: newText });
      dispatch({ type: 'SET_BTN_DISABLED', payload: false });
      dispatch({ type: 'SET_MESSAGE', payload: null });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (state.text.trim().length > 9) {
      const newFeedbackItem = {
        text: state.text,
        rating: state.rating,
      };

      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.id, newFeedbackItem);
      } else {
        addFeedback(newFeedbackItem);
      }

      dispatch({ type: 'SET_BTN_DISABLED', payload: true });
      dispatch({ type: 'SET_TEXT', payload: '' });
      dispatch({ type: 'SET_RATING', payload: 0 });
    }
  };

  useEffect(() => {
    if (feedbackEdit.edit) {
      dispatch({
        type: 'SET_INITIAL_STATE',
        payload: {
          text: feedbackEdit.item.text,
          btnDisabled: false,
          message: null,
          rating: feedbackEdit.item.rating,
        },
      });
    }
  }, [feedbackEdit]);

  return (
    <Card reverse={isFalse}>
      <h2>How would you rate your service with us?</h2>
      <form onSubmit={handleFormSubmit}>
        <Rating selectedRating={(rating) => dispatch({ type: 'SET_RATING', payload: rating })} />
        <div className='input-group'>
          <input
            placeholder='Write a review'
            type='text'
            onChange={handleTextChange}
            value={state.text}
          />
          <Button type='submit' isDisabled={state.btnDisabled}>
            Send
          </Button>
        </div>
        {state.message ? <div className='message'>{state.message}</div> : null}
      </form>
    </Card>
  );
};

export default FeedbackForm;
