# Form Input Validation

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The `handleTextChange` function is an input validation function that is used to control the state of the form based on the text input value. It is responsible for updating the state of the `text`, `btnDisabled`, and `message` variables based on the user's input.

Here's an explanation of the `handleTextChange` function:

1. The function receives an event object `e` as an argument, which represents the change event on the input field.

2. The function starts by checking if the `text` state is an empty string. If it is, it means the input field is empty. In this case, it sets the `btnDisabled` state to `true` (disabling the "Send" button) and clears the `message` state by setting it to `null`. This means that when the input field is empty, the "Send" button will be disabled, and any previous error message will be cleared.

3. If the input field is not empty, it moves to the next condition: `text !== '' && text.trim().length < 10`. This condition checks if the input text has fewer than 10 characters after trimming any leading or trailing white spaces. If the input text length is less than 10, it sets the `btnDisabled` state to `true` (disabling the "Send" button) and sets the `message` state to `'Text must at least 10 characters'`. This means that when the input text is too short, the "Send" button will be disabled, and an error message will be displayed to inform the user about the minimum character requirement.

4. If none of the above conditions are met, it means the input text is valid. In this case, it sets the `btnDisabled` state to `false` (enabling the "Send" button) and clears the `message` state by setting it to `null`. This means that when the input text is valid and meets the minimum length requirement, the "Send" button will be enabled, and any previous error message will be cleared.

5. Finally, the function updates the `text` state to the current value of the input field, using `setText(e.target.value)`.

Regarding the rendering of the message div, the code uses a ternary operator to conditionally render the message div based on the value of `message`. The expression `{message ? <div className='message'>{message}</div> : null}` checks if `message` is truthy. If it is, it renders the `<div>` element with the error message, and if `message` is `null`, it renders `null`, effectively omitting the error message.

An alternative way to conditionally render the message div is to use the logical AND (`&&`) operator. The `&&` operator returns the second operand if the first operand is truthy, and it returns the first operand if it is falsy. In this case, we can utilize this behavior to conditionally render the message div as follows:

```jsx
{message && <div className='message'>{message}</div>}
```

This code snippet accomplishes the same functionality as the original ternary expression but in a more concise way. If `message` is truthy, it renders the `<div>` element with the error message, and if `message` is `null`, it renders nothing (since `null` is falsy), effectively omitting the error message.

## Issue

There is just one issue with the form validation: when the button turns dark blue color (text.trim().length >= 10) and you then remove all the text (text.trim().length === 0), the button remains dark blue color instead of turning gray.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

Imagine `const newText = e.target.value.trim()` was used instead of `const newText = text.trim()`, the usage applies below:

The `handleTextChange` function is designed to be used as an event handler for handling changes in an input field. It provides input validation and controls the state of a form based on the text input value. It updates the `text`, `btnDisabled`, and `message` variables to enable or disable the "Send" button and display an error message when necessary.

To use `handleTextChange`, follow these steps:

1. Import `useState` from 'react' in your component file:

```jsx
import React, { useState } from 'react';
```

2. Declare and initialize the state variables (`text`, `btnDisabled`, and `message`) using `useState`. For example:

```jsx
const [text, setText] = useState('');
const [btnDisabled, setBtnDisabled] = useState(true);
const [message, setMessage] = useState(null);
```

3. Implement the `handleTextChange` function within your component. You can use the provided explanation to construct the function correctly.

```jsx
const handleTextChange = (e) => {
  const newText = e.target.value.trim();

  if (newText === '') {
    setBtnDisabled(true);
    setMessage(null);
  } else if (newText.length < 10) {
    setBtnDisabled(true);
    setMessage('Text must be at least 10 characters');
  } else {
    setBtnDisabled(false);
    setMessage(null);
  }

  setText(newText);
};
```

4. In your JSX code, attach the `handleTextChange` function to the input field as an `onChange` event handler:

```jsx
<input
  placeholder='Write a review'
  type='text'
  onChange={handleTextChange}
  value={text}
/>
```

5. Conditionally render the error message div using the logical AND (`&&`) operator or a ternary operator:

Using the logical AND (`&&`) operator:

```jsx
{message && <div className='message'>{message}</div>}
```

OR using a ternary operator:

```jsx
{message ? <div className='message'>{message}</div> : null}
```

6. Use the `btnDisabled` state to disable or enable the "Send" button based on the validation:

```jsx
<Button type='submit' isDisabled={btnDisabled}>
  Send
</Button>
```

By following these steps, you will be able to leverage the `handleTextChange` function to control the state of your form's input field, enable/disable the "Send" button, and display an error message when necessary, ensuring a smooth and interactive user experience.

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
