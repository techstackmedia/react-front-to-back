# Fix nested routes bug - FeedbackDetails

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

If you checked the console in the previous branch, you would notice the warning:

> Warning
>
> "You rendered descendant `<Routes>` (or called `useRoutes()`) at `/details/64cf0663cab171cf5ab1449f` (under `<Route path="/details/:id">`) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render."

The warning message is related to the use of nested `<Routes>` within the `FeedbackDetails` component. The warning is indicating that you have rendered a `<Routes>` element inside a parent `<Route path="/details/:id">`, but the parent route path does not have a trailing "*". This means that if you navigate deeper into the nested routes, the parent won't match anymore, and the child routes will not render.

In the `<FeedbackDetails>` component is rendered under the parent route `<Route path="/details/:id">`. However, you also have a nested `<Routes>` element within `<FeedbackDetails>` that handles the path `/show` and renders the `<Footer>` component.

To fix the warning, you should modify the parent route's path to include a trailing "*". The modified route should look like this:

```jsx
<Route path='/details/:id/*' element={<Detail />} />
```

This change ensures that the parent route matches any URL that starts with `/details/:id/`, allowing the child routes to continue rendering as you navigate deeper into the nested routes.

Here's the updated code:

```jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import ServerError from './components/Error/Server';
import NotFoundError from './components/Error/NotFound';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/500' element={<ServerError />} />
        <Route path='*' element={<NotFoundError />} />
        <Route path='/details/:id/*' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

With this change, the warning should be resolved, and the nested routes under `<FeedbackDetails>` will render correctly as you navigate deeper into the app.

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
