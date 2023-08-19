# Adding Styles to a Component

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

In this section, we will explore how to add styles to a component in React. Specifically, we'll focus on styling the `Header` component with dynamic background and text colors based on the props it receives.

**App.js:**

1. The code starts by importing the `Header` component from the './components/Header' file. This line imports the `Header` component, which is defined in a separate file and allows us to use it in the `App` component.

2. The `App` component is declared as an arrow function (`const App = () => {...}`). In modern React, this is a functional component.

3. Inside the `App` component, there's a return statement with JSX code. JSX allows you to write HTML-like syntax within JavaScript code.

4. There are two variations of rendering the `Header` component commented out in the JSX code. The first variation (commented with `{/* ... */}`) shows how you can pass additional props to the `Header` component, such as `bgColor` and `textColor`, to style it differently. The second variation (commented with `// ...`) demonstrates how you can use inline CSS styles directly in the JSX. However, these commented-out lines are not being used in the current code.

5. The actual rendering of the `Header` component is done with just `<Header />`, which does not include any additional props. This means that the `Header` component will use its default styling and the default text "Feedback UI".

6. There's also a `<div>` element with a class name of 'container' that contains an `<h1>` element with the text "My App". This is the main content of the app.

7. The `App` component is then exported as the default export using `export default App`.

**Header.jsx:**

1. The code starts by importing `PropTypes` from the 'prop-types' library. PropTypes is used for typechecking the props passed to a component.

2. The `Header` component is declared as an arrow function (`const Header = ({text, bgColor, textColor}) => {...}`). It is a functional component that accepts three props: `text`, `bgColor`, and `textColor`.

3. The `headerStyles` constant is defined (but commented out) as an alternative way to define the styles for the header. It shows an example of using inline CSS styles directly in the component. However, it is not used in the current code.

4. The actual `headerStyles` constant is defined as an object that contains the background color (`bgColor`) and text color (`textColor`) based on the props received. The `bgColor` and `textColor` props are used to dynamically set the background color and text color of the header.

5. The return statement contains the JSX code representing the header section of the app. The `style` attribute of the `<header>` element is set to use the `headerStyles` object, which dynamically applies the background and text colors based on the props.

6. The `<h2>` element displays the `text` prop received from the parent component (`App`), which represents the header text.

7. The `Header` component defines default prop values for `text`, `bgColor`, and `textColor` using `Header.defaultProps`. If the corresponding props are not provided when using the `Header` component, these default values will be used.

8. The `Header` component also specifies the expected prop types for `text`, `bgColor`, and `textColor` using `Header.propTypes`. In this case, it ensures that `text`, `bgColor`, and `textColor` should be strings, and if any of these props are provided but not of the expected type, a warning will be shown in the console during development.

9. Finally, the `Header` component is exported as the default export using `export default Header`.

Overall, this code represents a basic React application with two components, `App` and `Header`. The `Header` component can be styled with dynamic background and text colors based on the props it receives. The `App` component uses the `Header` component and includes a default header text ("Feedback UI") with a default styling. The commented-out code shows alternative ways to pass props or apply inline styles, but they are not used in the current code execution.

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
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin feature/new-feature`
5. Create a pull request.

Please make sure to follow the project's coding guidelines and conventions when contributing.

## License

Include the license under which you are releasing your project. For example:

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
