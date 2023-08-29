# Custom React Hook - useFeedback

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Issue](#issue)
- [Contributing](#contributing)
- [License](#license)

## Description

1. `useFeedback` Custom Hook:
The `useFeedback` hook is a custom hook created to access the state and functions provided by the `FeedbackContext`. It uses the `useContext` hook to get the values from the context and returns them as an object.

```jsx
import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';

const useFeedback = () => {
  const {
    feedback,
    isLoading,
    showDeleteModal,
    itemToDelete,
    feedbackEdit,
    addFeedback,
    editFeedback,
    deleteFeedback,
    updateFeedback,
    alertConfirmationModal,
    isFalse,
    handleClickToggler,
    currentDate,
  } = useContext(FeedbackContext);

  return {
    feedback,
    isLoading,
    showDeleteModal,
    itemToDelete,
    feedbackEdit,
    addFeedback,
    editFeedback,
    deleteFeedback,
    updateFeedback,
    alertConfirmationModal,
    isFalse,
    handleClickToggler,
    currentDate,
  };
};

export default useFeedback;
```

This hook allows us to use the `FeedbackContext` values directly in any component without explicitly importing the context and accessing the state and functions. It helps to keep the components clean and separates the concern of using context logic.

**2.** `FeedbackList` Component:
The `FeedbackList` component is a functional component that renders the list of feedback items. It uses the `useFeedback` hook to access the `feedback` and `isLoading` state from the context.

```jsx
import { useFeedback } from '../hooks/useFeedback';
import FeedbackItem from './FeedbackItem';
import Pulse from '../Pulse';

const FeedbackList = () => {
  const { feedback, isLoading } = useFeedback();

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }

  return isLoading ? (
    <Pulse />
  ) : (
    <div className='feedback-list'>
      {feedback.map((feedbackItem) => {
        return <FeedbackItem item={feedbackItem} key={feedbackItem._id} />;
      })}
    </div>
  );
};

export default FeedbackList;
```

In this component, we import the `useFeedback` hook and call it to get the `feedback` and `isLoading` values. If `isLoading` is `true`, it renders a loading indicator (`<Pulse />`), and if there is no feedback data or the feedback array is empty, it renders a message saying "No Feedback Yet." Otherwise, it maps through the `feedback` array and renders each `FeedbackItem` component passing the feedback item as a prop.

By using the `useFeedback` hook, the `FeedbackList` component can easily access and utilize the feedback data and related functions provided by the `FeedbackContext`, making the code cleaner and more maintainable.

Overall, the `useCurrentDate` hook is used in the `FeedbackProvider` component to get the current date and time, which is then formatted into a human-readable string and provided to the context. This allows other components within the application to access the current date and time easily through the `FeedbackContext`. It can be used, for example, to show when a piece of feedback was added or updated with the current date and time.

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

## Issue

In case you come across the error "Module not found: Error: Can't resolve 'package-name' in 'your/path/here'", address this by running the command `npm install` (and consider restarting the development server if needed). This action will guarantee the installation of the required dependencies, successfully resolving the issue.

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
