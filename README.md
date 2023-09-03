# React Authentication with Context: Registration and Login Implementation

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Issue](#issue)
- [Contributing](#contributing)
- [License](#license)

## Description

We've implemented authentication for registration (`/users/signup`) and login (`/users/login`) using React and a context-based approach. Let's break down how the authentication works for these routes:

1. **Registration (/users/signup):**

   - When a user submits the registration form, the `handleSignUp` function is called.

   - Inside `handleSignUp`, a POST request is made to the `/users/signup` endpoint with the user's registration data (firstName, lastName, email, password) in the request body.

   - If the registration request is successful (HTTP status 200), it means the user was successfully registered. In this case:

     - The access token received in the response (assuming it's returned) is stored in local storage using `localStorage.setItem('accessToken', data.accessToken)`. This access token is commonly used to authenticate the user in subsequent requests.

     - The `setLoggedIn(true)` function is called to indicate that the user is now logged in.

     - The `setSuccess(data.message)` function is called to set a success message (e.g., "Registration successful").

   - If the registration request fails (HTTP status other than 200), it means there was an error during registration. In this case:

     - The error message returned from the server is displayed to the user using `setErrorWithTimeout(errorData.error, 3000)`. This error message will be shown for 3 seconds.

2. **Login (/users/login):**

   - When a user submits the login form, the `handleLogin` function is called.

   - Inside `handleLogin`, a POST request is made to the `/users/login` endpoint with the user's login data (email and password) in the request body.

   - If the login request is successful (HTTP status 200), it means the user was successfully authenticated. In this case:

     - The access token received in the response (assuming it's returned) is stored in local storage using `localStorage.setItem('accessToken', data.accessToken)`.

     - The `setLoggedIn(true)` function is called to indicate that the user is now logged in.

     - The `setSuccess(data.message)` function is called to set a success message (e.g., "Login successful").

   - If the login request fails (HTTP status other than 200), it means there was an error during login. In this case:

     - If the error is related to the user not being authenticated (e.g., invalid credentials), the `setErrorTimeout('You need to sign in first.')` function is called to display an error message indicating that the user needs to sign in first.

     - If the error is related to other issues (e.g., network errors), an appropriate error message is displayed using `setErrorWithTimeout(errorData.error, 3000)`. This error message will be shown for 3 seconds.

3. **Routing:**

   - After successful registration or login, the user is redirected to the desired page. This is done using the `Navigate` component from `react-router-dom`.

   - If `loggedIn` is `true` (indicating the user is logged in), a `Navigate` component is used to redirect the user to a specified route, such as the HOME page (`<Navigate to='/' />`).

   - If `loggedIn` is `false`, the user remains on the registration or login page.

In summary, the provided code handles user registration and login by making API requests to the server and managing the user's authentication status (`loggedIn`) and success/error messages accordingly. It also provides redirection to different pages based on the user's authentication status.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

The code snippet below illustrates the process of acquiring identical code from this repository onto your local machine.

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
