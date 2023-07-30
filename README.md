# Improved Form Validation for "Send" Button

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The `const newText = e.target.value;` was used instead of `const newText = text.trim();` to address an issue with the form validation. The problem was that when the button turned purple (`text.trim().length >= 10`) and then all the text was removed (`text.trim().length === 0`), the button remained purple instead of turning gray.

By using `e.target.value` inside the `handleTextChange` function, we ensure that the validation and state updates are correctly based on the latest input value, resolving the issue where the button would remain purple when all the text was removed.

Here's the updated explanation of the `handleTextChange` function with the change:

1. The function receives an event object `e` as an argument, which represents the change event on the input field.

2. The function starts by extracting the current value of the input field using `const newText = e.target.value;`.

3. It then checks if `newText` is an empty string. If it is, it means the input field is empty. In this case, it sets the `btnDisabled` state to `true` (disabling the "Send" button) and clears the `message` state by setting it to `null`. This means that when the input field is empty, the "Send" button will be disabled, and any previous error message will be cleared.

4. If `newText` is not empty, it moves to the next condition: `newText.trim().length < 10`. This condition checks if the trimmed input text has fewer than 10 characters. If the input text length is less than 10, it sets the `btnDisabled` state to `true` (disabling the "Send" button) and sets the `message` state to `'Text must be at least 10 characters'`. This means that when the input text is too short, the "Send" button will be disabled, and an error message will be displayed to inform the user about the minimum character requirement.

5. If none of the above conditions are met, it means the input text is valid. In this case, it sets the `btnDisabled` state to `false` (enabling the "Send" button) and clears the `message` state by setting it to `null`. This means that when the input text is valid and meets the minimum length requirement, the "Send" button will be enabled, and any previous error message will be cleared.

6. Finally, the function updates the `text` state to the current value of the input field, using `setText(newText)`.

By using `e.target.value` inside the `handleTextChange` function, we ensure that the validation and state updates are correctly based on the latest input value, resolving the issue where the button would remain purple when all the text was removed.

```jsx
import { useState } from 'react';
import Card from './shared/Card';
import Button from './Button';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState(null);
  const handleTextChange = (e) => {
    const newText = e.target.value;

    if (newText.trim() === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (newText.trim().length < 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(newText);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
        <div className='input-group'>
          <input
            placeholder='Write a review'
            type='text'
            onChange={handleTextChange}
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message ? <div className='message'>{message}</div> : null}
      </form>
    </Card>
  );
};

export default FeedbackForm;
```

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

By using `e.target.value` inside the `handleTextChange` function, the issue with the form validation has been successfully addressed. The button now correctly turns gray when all the text is removed (`text.trim().length === 0`), resolving the problem where the button remained purple. The function now ensures that the validation and state updates are based on the latest input value, providing an improved user experience for the feedback form.

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Make your changes and commit them: `git commit -m "Add some feature"`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Create a pull request.

Please make sure to follow the project's coding guidelines and conventions when contributing.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
