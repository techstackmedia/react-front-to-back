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

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

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
