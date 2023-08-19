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

Below is a quick summary:

**1.** Import the `FeedbackForm` component:
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

**2.** Use the `FeedbackForm` component:
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

**3.** Functionality of `FeedbackForm` component:
   The `FeedbackForm` component uses the `useState` hook to manage the state of the input field. When the user types in the input field, the `handleTextChange` function is called, which updates the `text` state with the user's feedback text. The input value is controlled by the `text` state, ensuring that it reflects the current state value.

**4.** Future Development:
   The comment `{/* @todo - rating select component */}` suggests that there is a plan to add a "rating select" component in the future. This component will allow users to select a rating for the feedback.

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
