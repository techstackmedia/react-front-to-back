# Event Handler

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Issue](#issue)
- [Contributing](#contributing)
- [License](#license)

## Description

The provided code defines a React functional component called `FeedbackItem`. This component is responsible for displaying a feedback item, which includes a `rating`, `text`, and a close button represented by the `FaTimes` icon from the `react-icons/fa` library. The `FeedbackItem` component is wrapped inside a custom `Card` component (which is not shown in the provided code) for styling purposes.

### Logic and Functionality

- The `FeedbackItem` component receives the `rating`, `text`, and `id` as props destructured from the `item` prop.
- Inside the component, there's a commented out `handleClick` function and an alternative `handleClick` implementation. Both are used to log the `id` when the close button is clicked.

### Alternative Solutions (Commented)

1. The commented out version of the close button event handler:

```jsx
{
  /* <button onClick={() => console.log(id)} className='close'> */
}
```

In this alternative, the event handler is defined directly in the `onClick` attribute of the button element using an arrow function. When the button is clicked, it logs the `id` of the feedback item.

**2.** The commented out version of `handleClick` used as the event handler:

```jsx
{
  /* <button onClick={handleClick} className='close'> */
}
```

In this alternative, the `handleClick` function is defined and used as the event handler for the button. When the button is clicked, it invokes the `handleClick` function, which logs the `id`.

### Current Implementation

The current implementation uses a third alternative solution:

```jsx
const onClick = () => {
  handleClick(id);
};

<button onClick={onClick} className='close'>
  <FaTimes color='purple' />
</button>;
```

In this implementation, a new function `onClick` is defined that calls the `handleClick` function with the `id` as an argument. This way, the `handleClick` function receives the `id` of the feedback item as a parameter and logs it when the close button is clicked.

### PropTypes Explanation

The `FeedbackItem` component expects the `item` prop to be an object with `rating` and `text` properties, both of which must be provided and are of specific data types (`PropTypes.number.isRequired` for `rating` and `PropTypes.string.isRequired` for `text`). The `isRequired` modifier ensures that both `rating` and `text` are mandatory props, and their absence will trigger a prop type warning.

Below is a quick summary:

The `FeedbackItem` component provides a reusable and interactive way to display feedback items, including the ability to handle close button clicks. To use the `FeedbackItem` component in your own projects, follow these steps:

1. Install [react-icons](https://react-icons.github.io/react-icons/) with the command `npm install react-icons` or `yarn add react-icons`.

2. Import the required components and icons.

3. Render the `FeedbackItem` component with the appropriate props, such as `rating`, `text`, and `id`.

Now you have a customizable and functional feedback item component with a close button event handler that can be integrated into your React applications.

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
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin feature/new-feature`
5. Create a pull request.

Please make sure to follow the project's coding guidelines and conventions when contributing.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
