import { useContext, useEffect, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const Rating = ({ selectedRating }) => {
  const [selected, setSelected] = useState(null);
  const { feedbackEdit, isFalse } = useContext(FeedbackContext);
  const numbers = Array.from(Array(11).keys()).splice(1);

  const handleSelectChange = (e) => {
    const newSelected = +e.target.value;
    setSelected(newSelected);
    selectedRating(newSelected);
  };

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const selectList = numbers.map((item) => {
    return (
      <li key={item}>
        <input
          type='radio'
          name='rating'
          id={`num${item}`}
          value={`${item}`}
          onChange={handleSelectChange}
          checked={selected === item}
        />
        <label className={isFalse ? 'checked' : undefined}
          style={{ color: isFalse ? '#000' : undefined }}
          htmlFor={`num${item}`}
        >
          {item}
        </label>
      </li>
    );
  });

  return <ul className='rating'>{selectList}</ul>;
};

export default Rating;