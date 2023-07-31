# Update Feedback Item

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

There are two main components: `App.js` and `FeedbackForm.jsx`, along with other supporting components (`FeedbackList.jsx`, `FeedbackItem.jsx`, and `Rating.jsx`). The purpose of these components is to create a feedback application where users can add, edit, and delete feedback items. Let's understand the flow of the code and the logic behind it.

1. `App.js` Component:

   - This component is the root component of the application.
   - It manages the main state of the application using React's `useState` hook.
   - `feedback` state is used to store an array of feedback items, initialized with the data from `FeedbackData`.
   - `showDeleteModal` and `itemToDelete` are used to manage the visibility of the delete confirmation modal and the ID of the item to be deleted, respectively.
   - `feedbackEdit` is used to store the information about the item being edited. It contains two properties: `item` (the feedback item being edited) and `edit` (a boolean flag indicating whether the user is in edit mode).
   - Functions like `addFeedbackItem`, `editFeedback`, `deleteFeedback`, `updateFeedback`, `handleDeleteConfirmed`, `handleDeleteCancelled`, and `closeModal` handle the various interactions and actions related to feedback items.
   - The component renders `Header`, `FeedbackForm`, `FeedbackStats`, `FeedbackList`, and the delete confirmation modal (`alertConfirmationModal`).

2. `FeedbackForm.jsx` Component:

   - This component is responsible for rendering the form to add/edit feedback items and handling user interactions.
   - It receives three props: `handleAddItem`, `feedbackEdit`, and `handleUpdateFeedback`.
   - The form contains a `Rating` component to allow users to select a rating and an input field to enter the feedback text.
   - When the form is submitted, it calls the `handleFormSubmit` function.
   - If the `feedbackEdit.edit` flag is `true`, it means the user is in edit mode, so it calls the `handleUpdateFeedback` function with the ID of the feedback item being edited and the updated feedback item. Otherwise, it calls the `handleAddItem` function to add a new feedback item.
   - The `useEffect` hook is used to update the local state of the component when the `feedbackEdit` prop changes. This is done to handle the case where the user switches between edit mode and add mode.

3. Alternative for `updateFeedback` Function:

   - In the current implementation, `updateFeedback` is used to update the feedback array with the edited item. An alternative way to handle this is by directly updating the `feedback` array in the `App.js` component using the `setFeedback` function.

   ```jsx
   const updateFeedback = (id, itemUpdate) => {
     const updatedFeedback = feedback.map((item) =>
       item.id === id ? { ...item, ...itemUpdate } : item
     );
     setFeedback(updatedFeedback);
   };
   ```

   - Instead of using `map` and creating a new array, you can find the index of the item to be updated in the `feedback` array and modify it directly.

   ```jsx
   const updateFeedback = (id, itemUpdate) => {
     const feedbackIndex = feedback.findIndex((item) => item.id === id);
     if (feedbackIndex !== -1) {
       const updatedFeedback = [...feedback]; // Create a shallow copy of the feedback array
       updatedFeedback[feedbackIndex] = {
         ...updatedFeedback[feedbackIndex],
         ...itemUpdate,
       };
       setFeedback(updatedFeedback);
     }
   };
   ```

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

Overall, the logic in the code revolves around managing the feedback data, showing a form to add/edit feedback, and handling interactions to update, delete, and add new feedback items. The `FeedbackList` component renders the list of feedback items, while the `FeedbackItem` component renders individual feedback items. The `Rating` component is responsible for rendering the star-based rating input.

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
