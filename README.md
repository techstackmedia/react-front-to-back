# Setting a proxy for the Feedback App

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Issue](#issue)
- [Contributing](#contributing)
- [License](#license)

## Description

In the Feedback App, the `proxy` field in the `package.json` is used to define a proxy for the development server. Let's break it down step by step:

1. `package.json`:
   In Node.js projects, the `package.json` file is used to store various metadata related to the project, including project name, version, dependencies, scripts, and other configurations.

2. `proxy` Field:
   The `proxy` field is a setting that can be added to the `package.json` file in React applications (created using `create-react-app`). It allows you to specify a proxy URL that the development server will use when making API requests during development.

3. Purpose of Proxy:
   When developing a frontend application that communicates with a backend server, it is common for the backend server to run on a different port (e.g., 5000) than the frontend development server (e.g., 3000). This can lead to CORS (Cross-Origin Resource Sharing) issues when trying to make API requests from the frontend to the backend during development.
  
   By setting the `proxy` field in the `package.json`, you instruct the development server to forward specific API requests to the specified proxy URL instead of directly making them from the frontend. This helps bypass the CORS restrictions during development and allows seamless communication between the frontend and backend.

4. Proxy Configuration:
   In the given `package.json`, the proxy is set to `"http://localhost:5000"`. This means that any API requests made to the relative path `/feedback` will be automatically forwarded to `http://localhost:5000/feedback` during development.

For example, instead of making an API request to `http://localhost:5000/feedback`, the frontend code can make the request to `/feedback`, and the development server will handle forwarding the request to the correct backend URL.

This configuration simplifies the development process by abstracting the backend URL in the frontend code, making it easier to switch between development and production environments without manually changing the backend URLs.

> **Note:**
>
> - After setting up the `proxy` in the `package.json`, you may need to restart the server to effect the changes.
> - The `proxy` field in the `package.json` is mainly used during development and is specific to the local development server. It is not applicable or used in production.
> - The purpose of the proxy is to handle CORS (Cross-Origin Resource Sharing) issues during development when the frontend and backend are running on different ports or domains. In production, when the frontend and backend are typically served from the same domain or when CORS is properly configured on the server, the proxy is not needed.

Below is a quick summary:

the `proxy` field in the `package.json` is used to set up a proxy for API requests during development, forwarding them to the specified backend server URL (`http://localhost:5000` in this case). It helps avoid CORS issues and allows a smoother frontend-backend communication during development.

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

In case you come across the error "Module not found: Error: Can't resolve 'package-name' in 'your/path/here'", address this by running the command `npm install` (and consider restarting the development server if needed). This action will guarantee the installation of the required dependencies, successfully resolving the issue.

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
