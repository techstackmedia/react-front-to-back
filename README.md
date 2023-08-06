# Implementing Time Format Toggling - Feedback List

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

We will create a general toggling button to control the time format for all feedback items in the `FeedbackList` component. To achieve this, we can use the `localStorage` to store the user's preference for the time format, and then apply that format to all feedback items accordingly.

Here's how you can modify the `FeedbackList` component to implement the general toggling for the time format:

```jsx
import React, { useState, useEffect } from 'react';
import FeedbackItem from './FeedbackItem';
import Pulse from '../Pulse';
import useFeedback from '../../hooks/useFeedback';

const FeedbackList = () => {
  const { feedback, isLoading } = useFeedback();
  const [is24HrFormat, setIs24HrFormat] = useState(true);

  // Load the user's preference from localStorage on component mount
  useEffect(() => {
    const storedFormat = localStorage.getItem('timeFormat');
    if (storedFormat) {
      setIs24HrFormat(storedFormat === '24-hour');
    }
  }, []);

  // Function to toggle the time format and update localStorage
  const handleTimeToggle = () => {
    setIs24HrFormat((prevFormat) => {
      const newFormat = !prevFormat;
      localStorage.setItem('timeFormat', newFormat ? '24-hour' : '12-hour');
      return newFormat;
    });
  };

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }

  return isLoading ? (
    <Pulse />
  ) : (
    <div className='feedback-list'>
      {/* Display the time format toggle button */}
      <div>
        <button onClick={handleTimeToggle}>
          {is24HrFormat ? 'Switch to 12-hour format' : 'Switch to 24-hour format'}
        </button>
      </div>

      {feedback.map((feedbackItem) => {
        // Pass the is24HrFormat state to the FeedbackItem component
        return <FeedbackItem item={feedbackItem} key={feedbackItem._id} is24HrFormat={is24HrFormat} />;
      })}
    </div>
  );
};

export default FeedbackList;
```

In the modified `FeedbackList` component, we have added a state variable `is24HrFormat` to manage the time format preference. We also load the user's preference from `localStorage` using the `useEffect` hook when the component mounts.

The `handleTimeToggle` function is responsible for toggling the time format and updating the state and `localStorage` accordingly. It updates the `is24HrFormat` state and sets the value in `localStorage`.

The time format toggle button is displayed at the top of the `FeedbackList` component. When clicked, it toggles the time format for all the feedback items displayed. The `is24HrFormat` state is passed down to the `FeedbackItem` component through the `is24HrFormat` prop.

Finally, in the `FeedbackItem` component, you can remove the `is24HrFormat` state and use the `is24HrFormat` prop passed from the `FeedbackList` component instead:

```jsx
const FeedbackItem = ({ item, is24HrFormat }) => {
  // Rest of the FeedbackItem component code remains the same

  const formatTime = (date) => {
    // Use the is24HrFormat prop instead of the state
    // ... (same as before)
  };

  // Rest of the FeedbackItem component code remains the same
};
```

Now, the time format for all feedback items will be consistent with the user's preference, and it will persist even when the user navigates to different pages or refreshes the page, thanks to the use of `localStorage`.

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
