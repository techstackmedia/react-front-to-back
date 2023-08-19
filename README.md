# Feedback App Refactoring

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The refactoring in the Feedback app was done to improve readability and remove unnecessary code.

1. Refactoring in Footer Component:
   In the original version of the Footer component, the ternary operator was used twice to check the conditions for applying the 'underline' style to the NavLink component. However, the conditions were unnecessarily duplicated. In the refactored version, the conditions were combined into a single ternary operator, which makes the code cleaner and easier to understand.

Original:

```javascript
textDecoration:
  pathname === '/' && item === 'home'
    ? 'underline'
    : pathname === '/about' && item === 'about'
    ? 'underline'
    : 'none',
```

Refactored:

```javascript
textDecoration:
  (pathname === '/' && item === 'home') || (pathname === '/about' && item === 'about')
    ? 'underline'
    : 'none',
```

**2.** Refactoring in FeedbackForm Component:
   In the original version of the FeedbackForm component, there was an unnecessary check in the `handleFormSubmit` function. The check `feedbackEdit.edit === true` can be simplified to `feedbackEdit.edit`, as it is a boolean value and already evaluates to true or false. This makes the code more concise and easier to read.

Original:

```javascript
if (feedbackEdit.edit === true) {
  // code block
} else {
  // code block
}
```

Refactored:

```javascript
if (feedbackEdit.edit) {
  // code block
} else {
  // code block
}
```

Overall, these refactoring changes are minor but contribute to better code readability and maintenance. It's always good to write code that is easy to understand and reduces unnecessary complexity.

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
