# Creating Your First Component - Header

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Issue](#issue)
- [Contributing](#contributing)
- [License](#license)

## Description

In this section, we will explore how to create your first React component and use it in your application. We'll start with the `App` component, which uses the `Header` component to display the header section of the app with the text "Feedback UI". The `App` component also contains the main content of the app.

**App.js:**

1. The code starts by importing the `Header` component from the './components/Header' file. This means that the `Header` component is defined in a separate file and can be used in this file.

2. The `App` component is declared as an arrow function (`const App = () => {...}`). In modern React, this is a functional component.

3. Inside the `App` component, there's a return statement with JSX code. JSX allows you to write HTML-like syntax within JavaScript code.

4. The `<>...</>` is a shorthand syntax for React Fragments. Fragments allow you to return multiple elements without wrapping them in an additional DOM node.

5. Inside the return statement, the `Header` component is used with a prop `text="Feedback UI"`. This prop is passed to the `Header` component and will be used to display the header text.

6. There's also a `<div>` element with a class name of 'container' that contains an `<h1>` element with the text "My App". This is the main content of the app.

7. The `App` component is then exported as the default export using `export default App`.

```jsx
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header text="Feedback UI" />
      <div className='container'>
        <h1>My App</h1>
      </div>
    </>
  )
}

export default App
```

**Header.jsx:**

1. The code starts by importing `PropTypes` from the 'prop-types' library. PropTypes is used for typechecking the props passed to a component.

2. The `Header` component is declared as an arrow function (`const Header = ({text}) => {...}`). It is a functional component that accepts a single prop called `text`.

3. Inside the `Header` component, there's a return statement with JSX code representing the header section of the app.

4. The `<header>` element contains a `<div>` element with a class name of 'container' that wraps an `<h2>` element. The content of the `<h2>` element is determined by the `text` prop passed to the `Header` component.

5. Before the `Header` component is defined, there are two additional blocks of code:

   - `Header.defaultProps`: This sets a default prop value for the `text` prop. If the `text` prop is not provided when using the `Header` component, it will default to "Feedback UI".

   - `Header.propTypes`: This defines the expected prop types for the `Header` component. In this case, it specifies that the `text` prop should be of type `string`. If the `text` prop is provided but not a string, a warning will be shown in the console during development.

6. Finally, the `Header` component is exported as the default export using `export default Header`.

```jsx
import PropTypes from 'prop-types'

const Header = ({text}) => {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div> 
    </header>
  );
};

Header.defaultProps = {
  text: 'Feedback UI'
}

Header.propTypes = {
  text: PropTypes.string
}

export default Header;
```

Overall, this code represents a basic React application with a main `App` component and a reusable `Header` component. The `Header` component accepts a prop called `text`, and if the prop is not provided, it will default to "Feedback UI". The `App` component uses the `Header` component to display the header section of the app and also contains the main content of the app.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Issue

In case you come across the error "Module not found: Error: Can't resolve 'package name' in 'your/path/here'", address this by running the command `npm install` (and consider restarting the development server if needed). This action will guarantee the installation of the required dependencies, successfully resolving the issue.

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
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin feature/new-feature`
5. Create a pull request.

Please make sure to follow the project's coding guidelines and conventions when contributing.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
