# Project: Feedback App - Creating Your First Component

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

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

### Avoiding Auto Import of React with ES7+ React/Redux/React-Native snippets Extension

This section provides a solution to avoid auto import of React when using the "rafce" ([ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)) snippet in Visual Studio Code.

1. Go to File > Preferences > Configure User Snippets in Visual Studio Code.
2. Search for "javascriptreact.json" and select it to open the JavaScript React snippets configuration file.
3. Paste the following code snippet into the configuration file and save the file to apply the changes:

```json
{
  "Create a new react arrow function component with export statement": {
    "prefix": "rafce",
    "body": [
      "const ${1:${TM_FILENAME_BASE}} = () => {",
      "  return (",
      "    <div>",
      "      $0",
      "    </div>",
      "  );",
      "};",
      "",
      "export default ${1:${TM_FILENAME_BASE}};",
      "$2"
    ],
    "description": "Create a new react arrow function component with export statement"
  }
}
```

Remember to always have the "ES7+ React/Redux/React-Native snippets" extension installed and activated in Visual Studio Code for the snippet to work as expected.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

In this section, we will explore how to use JSX to efficiently display images, text, and utilize attributes in JSX elements. Additionally, we will delve into the process of transpiling JSX code into plain JavaScript that can be easily understood by the browser.

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
