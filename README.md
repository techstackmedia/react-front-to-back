# React Router in Feedback App

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

To understand the use of `react-router-dom` in each of the files and the overall logic, let's go through them one by one:

**1. Blog.jsx:**

- In this file, the `react-router-dom` library is not used directly, and there is no routing logic. The `Blog` component is a functional component that checks the `status` variable, and if it equals 500, it uses the `Navigate` component to redirect the user to the '/notfound' route. Otherwise, it displays a simple "Hello World!" message.

> **Note**: The use of `Navigate` component is appropriate for handling redirection based on the `status` variable. However, it's generally better to use HTTP status codes to handle server errors. You can return an HTTP 404 status code directly from the server, and then let the `react-router-dom` handle the rendering of the `NotFound` component for you. This way, the server returns the correct status code, and the routing is handled by the router.

**2. About.jsx:**

- The `react-router-dom` library is used to create a link to the home page. The `About` component renders a header, a card with some information, and a link to the home page using the `Link` component from `react-router-dom`.

**3. Home/index.jsx:**

- The `Home` component imports several other components and uses them to construct the main layout of the application. It also uses the `useContext` hook to get the `alertConfirmationModal` from the `FeedbackContext`. However, there is no direct use of `react-router-dom` in this file.

**4. App.jsx:**

- This file is responsible for setting up the routing logic using `react-router-dom`. It imports the necessary components and configures the routes using the `BrowserRouter` and `Routes` components from `react-router-dom`.

**5. AboutIcon.jsx:**

- The `AboutIcon` component uses the `Link` component from `react-router-dom` to create a link to the '/about' route. It renders an SVG icon wrapped in a link, allowing users to navigate to the About page.

**6. Footer.jsx:**

- The `Footer` component uses the `NavLink` component from `react-router-dom` to create links for the home and about pages. The `NavLink` component adds an underline style to the active link based on the current location pathname.

**7. ServerError.jsx:**

- The `ServerError` component uses the `Link` component from `react-router-dom` to create a link back to the home page. This component is displayed when there is a server error, and it allows users to navigate back to the home page.

**8. NotFound.jsx:**

- The `NotFound` component uses the `Link` component from `react-router-dom` to create a link back to the home page. This component is displayed when a route is not found (404), and it allows users to navigate back to the home page.

**Note:**

In order to enable the usage of the `handleClick` function handler in the `NotFound` component, the `onClick` prop has been added to the `./shared/Button` component as follows:

```jsx
const Button = ({ children, version, type, isDisabled, onClick }) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn btn-${version}`}
      onClick={onClick} // Pass the onClick prop to the button
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
};

export default Button;
```

By adding the `onClick` prop to the `./shared/Button` component, it becomes possible to use the `handleClick` function defined in the `NotFound` component and pass it to the `Button` component as the `onClick` prop. This enables the button to trigger the `handleClick` function when clicked, and as a result, the user will be navigated back to the home page due to the usage of `useNavigate()` from `react-router-dom`.

```jsx
import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';

const NotFound = () => {
  const navigate = useNavigate('/');

  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className='container'>
      <div className='not-found'>
        <h1>Oops! 🤔</h1>
        <h2>404 - Not Found</h2>
        <div style={{ justifyContent: 'center' }}>
          <Button type='button' version='secondary' onClick={handleClick}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
```

In summary, the main file responsible for handling the routing logic is `AppRouter.jsx`, where the routes for the different pages of the application (Home, About, Blog, 500, and NotFound) are defined using `react-router-dom`. Other components use the `Link` and `NavLink` components to create navigation links to different pages within the application.

Here is a quick and more detailed summary:

`react-router-dom` is a library used for handling routing in React applications. It allows you to create a single-page application (SPA) by enabling navigation and rendering different components based on the URL without reloading the entire page. Below is a brief summary of how `react-router-dom` is used in each of the files mentioned:

**1. Blog.jsx:**

- The `Blog` component uses the `Navigate` component from `react-router-dom` to redirect the user to the '/notfound' route when the `status` variable is equal to 500. This allows the application to handle errors and guide users to an appropriate page if something goes wrong.

**2. About.jsx:**

- The `About` component uses the `Link` component from `react-router-dom` to create a link to the home page. When users click on this link, they can navigate to the home page without a full page reload. This provides a smooth user experience within the single-page application.

**3. Home/index.jsx:**

- The `Home` component itself doesn't directly use `react-router-dom`. Instead, it is a container component that imports and renders other components that make up the main layout of the application. Routing and navigation are set up in `App.jsx`, not in this component.

**4. App.js:**

- The `App` component is responsible for setting up the routing logic using `react-router-dom`. It imports the necessary components (Home, About, Blog, ServerError, and NotFound) and configures the routes using the `BrowserRouter` and `Routes` components from `react-router-dom`. This file is the central place where the routing configuration is defined for the entire application.

**5. AboutIcon.jsx:**

- The `AboutIcon` component uses the `Link` component from `react-router-dom` to create a link to the '/about' route. This allows users to navigate to the About page by clicking on an SVG icon, maintaining the SPA behavior.

**6. Footer.jsx:**

- The `Footer` component uses the `NavLink` component from `react-router-dom` to create links for the home and about pages. The `NavLink` component automatically applies a specific style (underlined in this case) to the active link based on the current location pathname. This helps users visually identify the active page in the navigation.

**7. Server.jsx:**

- The `ServerError` component uses the `Link` component from `react-router-dom` to create a link back to the home page. This component is displayed when there is a server error, allowing users to navigate back to the home page easily.

**8. NotFound.jsx:**

- The `NotFoundError` component uses the `Link` component from `react-router-dom` to create a link back to the home page. This component is displayed when a route is not found (404), allowing users to navigate back to the home page in case they enter an invalid URL.

In summary, `react-router-dom` is used in various components to create navigation links, handle redirections, and provide a smooth single-page application experience in the React application. It plays a vital role in managing the application's routing and allows users to navigate between different pages without reloading the entire page.

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
