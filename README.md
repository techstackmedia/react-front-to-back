# Enhanced Feedback App: Dark/Light Mode Toggle with Local Storage Persistence

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The added feature to the React application now allows users to toggle between dark and light mode, in addition to leaving feedback and viewing feedback items. There are several components involved in the application, including `FeedbackProvider`, `FeedbackForm`, `FeedbackItem`, `Toggler`, `Header`, `Rating`, `Footer`, and `About`.

### Utilizing Local Storage and State Updates for Enhanced User Experience

#### 1. Handling Toggle Button and Local Storage

The code has added a `Toggler` component that displays a toggle button based on the `isFalse` state obtained from the `FeedbackContext`. The `handleClickToggler` function in the `FeedbackContext` updates the `isFalse` state and also saves its value in the local storage with the key `'switch'`. This allows the application to remember the toggle state even after page reloads.

#### 2. Dynamic Toggling Effect using React State and Local Storage

A new state variable `isFalse` is introduced to keep track of the toggle state. Initially, it is set to `false` by default. The `handleClickToggler` function is used to toggle the value of `isFalse` and store it in the local storage using `localStorage.setItem`.

```jsx
const [isFalse, setIsFalse] = useState(false);

const handleClickToggler = () => {
  setIsFalse((prevState) => !prevState);
  localStorage.setItem('switch', JSON.stringify(!isFalse));
};
```

The `useEffect` hook is used to retrieve the stored value from local storage and set it in the state during the initial component mount.

```jsx
useEffect(() => {
  const storedValue = localStorage.getItem('switch');
  if (storedValue) {
    setIsFalse(JSON.parse(storedValue));
  }
}, []);
```

#### 3. Removal of Default Props

The `defaultProps` for `Card` component (`Card.defaultProps = { reverse: false }`) has been removed since the `isFalse` value from local storage already handles the initial state. The `reverse` prop in the `Card` component is now directly provided from the `isFalse` state. We can remove the following line:

```jsx
Card.defaultProps = {
  reverse: false,
};
```

#### 4. Using `isFalse` for Card Reverse Prop

The `Card` component is updated to use the `isFalse` state variable instead of the `reverse` prop. This allows the Card background to be light when `isFalse` is `true`, and dark when `isFalse` is `false`.

```jsx
const Card = ({ children }) => {
  const classes = `card ${isFalse ? 'reverse' : ''}`.trim();
  return <div className={classes}>{children}</div>;
};
```

#### 5. Changes in the `Rating` Component

The `Rating` component now receives a callback function called `selectedRating`, which is used to update the `rating` state in the `FeedbackForm` component. The `selectedRating` function is triggered whenever a rating is selected in the `Rating` component.

#### 6. SVG Changes for Toggle On/Off

The SVG files for `toggleOn.svg` and `toggleOff.svg` have been modified to change the stroke and fill values from `currentColor` to `#ff6a95`. This changes the color of the toggle button based on the `isFalse` state.

#### 7. CSS Changes in `index.css`

The CSS change in `index.css` adds the `background-color: transparent;` property to the `input` element. This change makes the background of the input field transparent, ensuring it works well with the dark/light mode toggle.

```css
input {
  flex-grow: 2;
  border: none;
  font-size: 16px;
  background-color: transparent;
}
```

Overall, the application now uses the `isFalse` state from local storage to handle the dark/light mode toggle. The components have been updated to use this state, resulting in a functioning dark/light mode feature that persists even after page reloads.
To convert the provided code to use reducers, we'll need to refactor the components that use state and useState hooks. Instead of managing state using individual useState hooks, we'll create a single reducer to manage the state for each component. Here's the refactored code:

Step 1: Create a Reducer

Create a new file named `feedbackReducer.js` and define the reducer function for each component that uses state. We'll use this reducer to manage the state for FeedbackForm, FeedbackItem, and FeedbackList components:

```javascript
const feedbackReducer = (state, action) => {
  switch (action.type) {
    case 'SET_INITIAL_STATE':
      return {
        ...state,
        text: action.payload.text,
        btnDisabled: action.payload.btnDisabled,
        message: action.payload.message,
        rating: action.payload.rating,
      };
    case 'SET_TEXT':
      return { ...state, text: action.payload };
    case 'SET_BTN_DISABLED':
      return { ...state, btnDisabled: action.payload };
    case 'SET_MESSAGE':
      return { ...state, message: action.payload };
    case 'SET_RATING':
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

export { feedbackReducer };
```

Step 2: Refactor FeedbackForm Component

In the `FeedbackForm` component, we'll use the `useReducer` hook to manage the state:

```javascript
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
  const { addFeedback, updateFeedback, feedbackEdit } =
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

      if (feedbackEdit.edit === true) {
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
    if (feedbackEdit.edit === true) {
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
    <Card>
      <h2>How would you rate your service with us?</h2>
      <form onSubmit={handleFormSubmit}>
        <Rating
          selectedRating={(rating) =>
            dispatch({ type: 'SET_RATING', payload: rating })
          }
        />
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
```

Step 3: Repeat Step 2 for FeedbackItem and FeedbackList components

Do the same refactoring using `useReducer` in the `FeedbackItem` and `FeedbackList` components, managing their respective state using the reducer.

By refactoring the components to use reducers, the state management will be centralized, making the code more maintainable and easier to reason about. The reducer handles all state updates based on the dispatched actions, and each component receives its state through the `state` variable returned by the `useReducer` hook.

> **Note:**
>
> 1. Instead of passing the props down through each component, React Context allows you to broadcast props to the components below.
> 2. The useReducer hook is used for complex state manipulations and state transitions. In the next chapter or branch, we will revert to using only useContext since the app does not deal with much state.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

```bash
# Clone the remote Git repository
git clone https://github.com/techstackmedia/react-front-to-back.git

# Change the current directory to the cloned repository's directory
cd react-front-to-back

# Install project dependencies using npm
npm install

# Start the application server
npm start

# List all remote branches
git branch -r

# Switch to a specific branch (replace <branch-name> with the desired branch name)
git checkout <branch-name> # for example: git checkout 35-refactor
```

The provided commands are used to clone a remote Git repository, navigate to the cloned repository's directory, install its dependencies, start the application server, list remote branches, and switch to a specific branch.

Here's a breakdown of each command:

1. `git clone https://github.com/techstackmedia/react-front-to-back.git`: This command clones the remote Git repository from the URL `https://github.com/techstackmedia/react-front-to-back` to your local machine. It creates a new directory named `react-front-to-back.git` and copies the entire repository contents into that directory.

2. `cd react-front-to-back.git`: This command changes the current working directory to the `react-front-to-back.git` directory. After executing this command, you will be inside the project directory.

3. `npm install`: This command installs the dependencies required by the application. It reads the `package.json` file in the project directory and installs all the packages listed in the `dependencies` and `devDependencies` sections.

4. `npm start`: This command starts the application server. The specific behavior of this command depends on how it is configured in the `package.json` file. Typically, it will run the application server and make it accessible at a specific port, allowing you to interact with the application in your web browser.

5. `git branch -r`: This command lists all the remote branches in the Git repository. Remote branches are branches that exist on the remote repository (in this case, on GitHub) and not on your local machine.

6. `git checkout <branch-name>`: This command is used to switch to a specific branch. Replace `<branch-name>` with the name of the branch you want to switch to. After executing this command, you will be on the specified branch, and you can start working on that branch.

In summary, these commands are commonly used to clone a Git repository, set up a local development environment by installing dependencies, start the application server, and switch to a specific branch to work on a particular feature or bug fix.

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
