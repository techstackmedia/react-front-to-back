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

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

The code snippet below illustrates the process of acquiring the identical code from this repository onto your local machine.

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
