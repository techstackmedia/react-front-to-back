# Add Feedback Item

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Issue](#issue)
- [Contributing](#contributing)
- [License](#license)

## Description

Below is a code snippet that shows the operation of `addFeedbackItem` function:

```jsx
const addFeedbackItem = (newFeedbackItem) => {
  const id = v4(); // Generates a unique ID
  newFeedbackItem.id = id; // Assigns the generated ID to the newFeedbackItem
  const updatedFeedbackArray = [newFeedbackItem, ...feedback]; // Creates a new array with the newFeedbackItem added
  setFeedback(updatedFeedbackArray); // Updates the feedback state with the new array
};
```

- `addFeedbackItem` is a function that takes a `newFeedbackItem` object as an argument.
- `v4()` generates a unique ID using the `uuid` library.
- The generated ID is assigned to the `id` property of the `newFeedbackItem` object.
- An updated array is created by spreading the `newFeedbackItem` object along with the existing `feedback` array.
- The `setFeedback` function is used to update the `feedback` state with the new array, effectively adding the new feedback item.

In your `App` component:

```jsx
<FeedbackForm handleAddItem={addFeedbackItem} />
```

- The `FeedbackForm` component is rendered with a prop named `handleAddItem`.
- This prop is assigned the `addFeedbackItem` function defined earlier.
- This allows the `FeedbackForm` component to call the `addFeedbackItem` function when new feedback data is submitted.

This way, you're passing down a function from the parent (`App.js`) to the child (`FeedbackForm.js`), and when the child component wants to add new feedback data, it can call this function, effectively updating the state in the parent component. This is a technique known as "lifting state up" in React, where you manage shared state and functionality at a higher level in the component hierarchy to be used by multiple child components.

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

In case you come across the error "Module not found: Error: Can't resolve 'package name' in 'your/path/here'", address this by running the command `npm install` (and consider restarting the development server if needed). This action will guarantee the installation of the required dependencies, successfully resolving the issue.

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
