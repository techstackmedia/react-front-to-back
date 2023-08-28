# Custom Alert Confirmation Modal Component

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

In the original code, the `handleDeleteCard` function used `window.confirm` to show a browser-default confirmation dialog when the user wants to delete an item. However, this method has limited customization options and may not match the overall design of the application. To improve the user experience and have more control over the confirmation process, a custom confirmation alert modal component is introduced.

Here's how the switch from using `window.confirm` to building a custom confirmation modal is achieved step by step:

1. Introducing State Variables:

   - The state variable `showDeleteModal` is introduced to control the visibility of the custom modal. It will be used to determine whether the modal should be displayed or not.
   - The state variable `itemToDelete` is introduced to store the ID of the item that the user wants to delete. It will be used to identify the item that needs to be deleted once the user confirms the action.

2. Handling the Delete Action:

   - The `handleDeleteCard` function is modified to show the custom delete modal and set the `itemToDelete` state with the ID of the item to be deleted. This function is called when the user initiates the delete action.

3. Building the Custom Modal:

   - The custom delete modal is displayed conditionally based on the value of `showDeleteModal`. If `showDeleteModal` is `true`, the modal will be rendered; otherwise, it will not be displayed.

4. Custom Modal Content:

   - The custom modal displays a confirmation message along with "Confirm" and "Cancel" buttons to allow the user to make a decision.
   - The `handleDeleteConfirmed` function is called when the user clicks the "Confirm" button. This function performs the deletion of the item and closes the modal.
   - The `handleDeleteCancelled` function is called when the user clicks the "Cancel" button. This function simply closes the modal without performing any action.

5. Deleting the Item:
   - When the user confirms the delete action by clicking the "Confirm" button, the `handleDeleteConfirmed` function is called. This function sets `showDeleteModal` to `false` to close the modal and uses the `itemToDelete` state to filter out the item from the `feedback` state array using `setFeedback`.

By using a custom confirmation modal, the application gains more flexibility in terms of design and interaction. It allows for a better user experience as the confirmation dialog is now consistent with the overall application design, and the user can easily understand the consequences of their actions. Additionally, custom modals provide developers with more control over the appearance and behavior, making it easier to customize the confirmation process to match specific application requirements.

> Note: Check the styling of the modal delete confirmation alert in **index.css** file below the comment, `/* Additional styles to enhance the appearance */`.

Below is a quick summary:

The `Custom Alert Confirmation Modal Component` enhances the user experience by providing a customizable alert confirmation modal for delete actions. To use the `Custom Alert Confirmation Modal Component` in your application, follow these steps:

1. Import the component into your application:

```jsx
import CustomAlertConfirmationModal from './components/CustomAlertConfirmationModal';
```

2. Set up the `showDeleteModal` and `itemToDelete` state variables in your parent component:

```jsx
const [showDeleteModal, setShowDeleteModal] = useState(false);
const [itemToDelete, setItemToDelete] = useState(null);
```

3. Create a function to handle the delete action and show the modal:

```jsx
const handleDeleteCard = (id) => {
  setShowDeleteModal(true);
  setItemToDelete(id);
};
```

4. Create functions to handle the user's decision in the modal:

```jsx
const handleDeleteConfirmed = () => {
  setShowDeleteModal(false);
  // Perform the deletion of the item
  // using the itemToDelete state
  // and update the feedback state accordingly.
};

const handleDeleteCancelled = () => {
  setShowDeleteModal(false);
};
```

5. Render the `CustomAlertConfirmationModal` component with the necessary props:

```jsx
{
  showDeleteModal && (
    <CustomAlertConfirmationModal
      onConfirm={handleDeleteConfirmed}
      onCancel={handleDeleteCancelled}
    />
  );
}
```

By following these steps, you can integrate the `Custom Alert Confirmation Modal Component` into your application and have more control

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

In case you come across the error "Module not found: Error: Can't resolve 'package name' in 'your/path/here'", address this by running the command `npm install` (and consider restarting the development server if needed). This action will guarantee the installation of the required dependencies, successfully resolving the issue.

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
