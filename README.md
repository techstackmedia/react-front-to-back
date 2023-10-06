# Profile Image Upload Functionality in a React Component

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Issue](#issue)
- [Contributing](#contributing)
- [License](#license)

## Description

Here we have a React component for handling profile image uploads and some related functionality. Here, I'll explain the image upload process:

1. **ProfileImage Component**:

   - This component is primarily responsible for handling the profile image upload and displaying the uploaded image or error messages.

   - It imports necessary dependencies, including React, useContext, useRef, useState, and others.

   - It uses the `FeedbackContext` to access some context variables and functions.

   - It sets up some state variables, including `uploadedImageUrl`, `error`, `animationClass`, and `images`.

   - Inside the `handleUploadButtonClick` function, it triggers a click event on a hidden file input element (`fileInputRef`) when a button is clicked. This allows the user to select an image file from their device.

   - The `handleFileChange` function is called when a file is selected in the file input. It checks if the selected file is an image, creates a `FormData` object with the selected file, and sends a POST request to the server to upload the image. Upon successful upload, it updates the `uploadedImageUrl` state and stores the image URL in the browser's local storage.

   - The component also includes a useEffect hook that sets and clears an `animationClass` for a confirmation message displayed after successful image upload or error.

   - It retrieves a default profile image URL from local storage or the server if no image is available.

   - Finally, it renders the profile image, a hidden file input, and a button to trigger file selection.

2. **FeedbackProvider Component**:

   - This component is a context provider and encompasses various functionality related to user feedback and authentication.

   - It imports several dependencies, including React hooks and components.

   - It defines state variables, functions for handling feedback, and various other features such as handling user authentication, error messages, and more.

   - While the `ProfileImage` component handles image uploads, the `FeedbackProvider` component provides a broader context for managing user feedback, user authentication, and related features.

   - It uses the `FeedbackContext.Provider` to wrap its child components, providing them access to the context values and functions.

   - This component is quite extensive and covers features beyond the image upload, including user authentication, feedback handling, error management, and more.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

The backend code located at [`https://github.com/techstackmedia/feedback-application-server`](https://github.com/techstackmedia/feedback-application-server) will be required later, starting from section `33-setting-a-proxy-for-feedback-app` and onward. Repeat the same process from step 1 (cloning the repository) to step 4 (starting the development server with `npm run dev`) as outlined above.

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
