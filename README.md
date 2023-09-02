# Profile Image Upload

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Issue](#issue)
- [Contributing](#contributing)
- [License](#license)

## Description

### ProfileImage Component Explanation

We've defined a React component named `ProfileImage`, which serves the purpose of displaying a user's profile image and enabling them to upload a new image. This component relies on context data from `FeedbackContext` and uses Axios for handling file uploads. Let's break down the code step by step:

**1. Imports:**

The component imports the necessary dependencies and libraries:

- `React`: The core library for building React components.
- `useContext`: A React hook used to access context data.
- `useRef`: A React hook for creating a reference to a DOM element.
- `useState`: A React hook for managing component state.
- `FeedbackContext`: A custom context that provides `handleClickDropdown` and `showDropDown` from its value.
- `'react-image-crop/dist/ReactCrop.css'`: A CSS file for styling purposes.

**2. Component Definition:**

The `ProfileImage` component is defined as a functional component.

**3. Context Data:**

The `useContext` hook is used to access context data, specifically extracting `handleClickDropdown` and `showDropDown` from the context.

**4. Refs:**

A `fileInputRef` is created using `useRef(null)`. This reference will be used to access and programmatically trigger the hidden file input element.

**5. Default Image URL:**

`defaultImage` stores the URL of a default profile image. This URL will be used if there is no custom image uploaded by the user.

**6. State:**

- `uploadedImageUrl` is a state variable created using `useState(null)`. It will store the URL of the uploaded profile image.
- `error` is a state variable for storing error messages, and it's initialized as an empty string.
- `animationClass` is a state variable for controlling animation classes and is initially set to an empty string.

**7. `handleUploadButtonClick` Function:**

This function is called when the "Upload Image" button is clicked. It programmatically triggers a click event on the hidden file input element, allowing the user to select a file for upload.

**8. `handleFileChange` Function:**

This function is called when a user selects a file for upload using the file input element. It performs the following actions:

- Checks if the selected file is an image based on its MIME type.
- If the selected file is a valid image, it creates a `FormData` object, appends the selected file to it, and sends a POST request to the server using Axios for image upload.
- If the upload is successful, it updates the `uploadedImageUrl` state with the URL of the uploaded image and clears any previous error messages.
- If an error occurs during the upload, it sets the `error` state with an error message.

**9. Profile Image URL:**

- `storedImage` retrieves the URL of the user's previously uploaded image from local storage if available.
- `profileImage` is set to either the `storedImage` URL (if available) or the `defaultImage` URL. This URL is used as the source for displaying the user's profile image.

**10. Rendering:**

Inside the component's render function:

- A `div` element is rendered. When clicked, it triggers the `handleClickDropdown` function from the context, which presumably toggles a dropdown.

- An `img` element displays the user's profile image. It has a circular border, specific dimensions, and uses the URL stored in the `profileImage` state.

- An `input` element of type `file` is rendered, but it's hidden from view (with `style={{ display: 'none' }}`). This input element is associated with the `fileInputRef` created earlier and has an `onChange` event handler, `handleFileChange`, to handle file selection.

- A "Upload Image" button is conditionally displayed based on the value of `showDropDown`. If `showDropDown` is `true`, the button is displayed. When clicked, it triggers the `handleUploadButtonClick` function, which indirectly opens the file selection dialog.

**11. Export:**

The `ProfileImage` component is exported as the default export of the module, making it available for use in other parts of the application.

In summary, this component allows users to upload and display a profile image. It integrates with the context to handle dropdown interactions and updates the image when a new one is uploaded.

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
