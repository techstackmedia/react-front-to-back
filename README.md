# Defining nested routes - FeedbackDetails

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The use of `<Routes>` and `<Route>` components from `react-router-dom` is to define the routing configuration for the application and determine which components should be rendered based on the current URL path.

1. `<Routes>` and `<Route path='/show' element={<Footer />} />` in `FeedbackDetails.js`:

   - The `<Routes>` component is used to define the routing configuration within the `FeedbackDetails` component.
   - The `<Route>` component is nested inside `<Routes>` and specifies the URL path '/show' and the component to be rendered when the path matches. In this case, it is rendering the `Footer` component when the URL path matches '/show'.
   - By adding this `<Route>` component inside `FeedbackDetails`, you are allowing the `Footer` component to be rendered alongside the rest of the content in the `FeedbackDetails` component. This allows you to have multiple components rendered on the same page, depending on the URL path.

2. `<Route path='/details/:id/*' element={<Detail />}/>` in `App.js`:
   - This `<Route>` component defines a dynamic URL path using the `:id` parameter. The colon `:` indicates that it is a dynamic parameter, and it can match any value in that position of the URL.
   - The `element` prop is set to render the `Detail` component when the URL path matches '/details/:id/\*'. The `Detail` component will receive the matched `id` as a URL parameter through the `useParams` hook in its implementation.
   - The purpose of using `/:id/*` is to handle nested routes for the `Detail` component. It means that when the URL path starts with '/details/:id/', the `Detail` component will be rendered. The `*` at the end of the path acts as a wildcard, allowing any additional subpaths to be matched under '/details/:id/'.

In summary, the `<Routes>` and `<Route>` components in `FeedbackDetails.js` allow the rendering of the `Footer` component alongside the rest of the content in the `FeedbackDetails` component. On the other hand, the `<Route path='/details/:id/*' element={<Detail />}/>` in `App.js` sets up a dynamic route for the `Detail` component, allowing it to handle nested routes under '/details/:id/'.

> In short:
>
> The route at `/details/id/show` shows the footer, while `/details/id` will not.

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
