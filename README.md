# Form Input State

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

1. `FeedbackForm` Component:

   - This is a functional component that renders a form to collect user feedback.
   - It uses the `useState` hook to manage the state of the text input field. The state variable `text` holds the user's feedback text, and the `handleTextChange` function updates this state whenever the user types in the input field.
   - The form contains an `<input>` element for the user to write their review and a "Send" button for submitting the feedback.
   - The form is wrapped inside a `Card` component, which is likely a custom component responsible for displaying the form with a card-like layout.
   - Regarding the comment `{/* @todo - rating select component */}`, it suggests that there is a plan to add a "rating select" component in the future. The component will allows users to select a rating (from 1 to 10 input buttons) for the feedback. It serves as a reminder or a note for future development.

2. `App` Component
   - In the App.js file, we imported the `FeedbackForm` component above the `FeedbackStats` based on the design pattern.

> **Note**: Check the React developer tool and notice that besides the props we've seen in the past, we also have the state (hooks). The state keeps updating when inputting text to the input field; the state updates.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

1. Import the `FeedbackForm` component:
   In your `App.js` (or any other file where you want to use the `FeedbackForm`), you need to import the `FeedbackForm` component. The `App.js` is directly below the project directory and `FeedbackForm.js` is in the component folder, you would import it like this:

```jsx
import FeedbackForm from './components/FeedbackForm';
```

The file structure of your project looks like this:

```jsx
project_directory/
  |- App.js
  |- components/
      |- FeedbackForm.js
```

2. Use the `FeedbackForm` component:
   Once you've imported the `FeedbackForm` component, you can use it in your `App` component's JSX to render the feedback form. For example, in your `App.js`, you can include the `FeedbackForm` like this:

```jsx
import React from 'react';
import FeedbackForm from './FeedbackForm';
import FeedbackStats from './FeedbackStats';

const App = () => {
  return (
    ...
    <>
      <Header />
      <div className='container'>
        <FeedbackForm /> {/* Above FeedbackStats */}
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDeleteCard={handleDeleteCard} />
      </div>
 
      {alertConfirmationModal}
    </>
  );
};

export default App;
```

In this example, the `App` component renders a header, the `FeedbackForm`, component (which is imported at the top), and the `FeedbackStats` and `FeedbackList` component. Now, whenever you visit the app, you will see the feedback form being displayed on the page.

3. Functionality of `FeedbackForm` component:
   The `FeedbackForm` component uses the `useState` hook to manage the state of the input field. When the user types in the input field, the `handleTextChange` function is called, which updates the `text` state with the user's feedback text. The input value is controlled by the `text` state, ensuring that it reflects the current state value.

4. Future Development:
   The comment `{/* @todo - rating select component */}` suggests that there is a plan to add a "rating select" component in the future. This component will allow users to select a rating for the feedback.

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
