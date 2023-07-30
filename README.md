# Create or Add Feedback Item

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

In the given code, the `FeedbackForm` component is used in the `App` component, and the `App` component passes down the `handleAddItem` function as a prop to the `FeedbackForm` component. The purpose of this prop is to allow the `FeedbackForm` component to communicate with the `App` component and update the state of the `feedback` array in the `App` component.

Here's how the two logics are connected:

1.  In the `FeedbackForm` component:

    - When the user submits the form (by clicking the "Send" button), the `handleFormSubmit` function is called.
    - Inside `handleFormSubmit`, a new feedback item is created with the current `text` and `rating`.
    - The `handleAddItem` function, which is passed down as a prop from the `App` component, is called with the newly created `newFeedbackItem`. This function is responsible for updating the state of the `feedback` array in the `App` component by adding the new feedback item to it.
    - After calling `handleAddItem`, the `text` state is reset to an empty string so that the input field is cleared.

2.  In the `App` component:

    - The `addFeedbackItem` function is defined in the `App` component, and it takes a `newFeedbackItem` as a parameter.
    - Inside `addFeedbackItem`, a new unique `id` is generated for the feedback item using `v4()` from the `uuid` library.
    - The `id` is then added to the `newFeedbackItem` object.
    - The `feedback` array state is updated by creating a new array that contains the `newFeedbackItem` at the beginning, followed by the existing `feedback` array. This ensures that the newest feedback item is displayed first in the feedback list.
    - The state is updated using `setFeedback`, and the UI will re-render with the newly added feedback item.
    - The comments in `FeedbackList` and `FeedbackItem` are related to the use of UUIDs (Universally Unique Identifiers) as the unique identifier for the feedback items. Let's explain them one by one:

          - In `FeedbackList`:

          ```jsx
          /* Now that we are using uuid as our updated id, the prop type for id can either be a number (initial ids) or a string (updated ids) */
          // Warning: Failed prop type: Invalid prop `feedback[0].id` of type `string` supplied to `FeedbackList`, expected `number`.
          ```

    Explanation: The `FeedbackList` component receives the `feedback` prop, which is an array of feedback items. With the use of UUIDs as the unique identifier for feedback items, the `id` property of the items can be either a number (for the initial feedback items that used numeric identifiers) or a string (for the updated feedback items that use UUIDs). The prop type definition for `id` in the `PropTypes` check needs to allow for both types, so it should be defined as `PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired`. This way, the component will correctly handle both numeric and UUID-based `id` values.

        - In `FeedbackItem`:

        ```jsx
        /* Now that we are using uuid as our updated id, the prop type for id can be either a number (for initial ids) or a string (for updated ids) */
        // Warning: Failed prop type: Invalid prop `item.id` of type `string` supplied to `FeedbackItem`, expected `number`.
        ```

    Explanation: The `FeedbackItem` component receives the `item` prop, which represents a single feedback item. Since the `id` property of the feedback item can now be either a number or a string, the `PropTypes` check for the `item` prop should also allow for both types. Therefore, the `id` prop of the `item` object should be defined as `PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired`.

To summarize, these comments indicate that due to the use of UUIDs as the unique identifiers for feedback items, the `id` prop in `FeedbackList` and `FeedbackItem` should allow for both number and string types to accommodate the different types of IDs used in the feedback data. This way, the components can correctly handle and display the feedback items regardless of their ID format.

So, by passing the `handleAddItem` function as a prop to the `FeedbackForm` component, the `FeedbackForm` component can communicate back to the `App` component and update the state of the feedback items list. This is how the logic in `FeedbackForm` is connected to the `App` component, enabling the two components to work together and manage the feedback data effectively.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

The main usage and connection between the components can be summarized as follows:

1. **FeedbackForm Component**:

   - The `FeedbackForm` component is responsible for gathering user feedback in the form of text input and a rating selection.
   - It maintains its state using `useState` for the `text`, `btnDisabled`, `message`, and `rating` properties.
   - It renders a `Rating` component to allow the user to select a rating. The `selectedRating` prop function is passed to `Rating`, which allows `FeedbackForm` to update the `rating` state whenever the user selects a rating.
   - When the user submits the form (by clicking the "Send" button), the `handleFormSubmit` function is called.
   - In `handleFormSubmit`, a new feedback item is created with the current `text` and `rating`.
   - The `handleAddItem` function, passed down as a prop from the `App` component, is called with the newly created `newFeedbackItem`. This function is responsible for updating the state of the `feedback` array in the `App` component by adding the new feedback item to it.
   - After calling `handleAddItem`, the `text` state is reset to an empty string so that the input field is cleared.

2. **App Component**:

   - The `App` component serves as the top-level component and manages the state of the feedback items in the `feedback` array using `useState`.
   - It also manages the visibility of the delete confirmation modal through the `showDeleteModal` state and sets the item to delete with `itemToDelete`.
   - The `addFeedbackItem` function is defined in `App` to handle adding a new feedback item to the `feedback` array. It generates a unique `id` for the new item using `v4()` from the `uuid` library, adds the `id` to the `newFeedbackItem`, and then updates the `feedback` array by creating a new array with the new item at the beginning, followed by the existing feedback array.
   - The `handleDeleteCard` function is used to trigger the delete confirmation modal and set the item to be deleted.
   - The `closeModal` function is used to close the delete confirmation modal when the user clicks outside of it.
   - The `FeedbackForm` component is rendered with the `addFeedbackItem` function passed down as a prop to allow `FeedbackForm` to add new feedback items to the `App` component's state.
   - The `FeedbackStats` component is rendered to display the total number of reviews and the average rating based on the feedback in the `feedback` array.
   - The `FeedbackList` component is rendered with the `feedback` array and `handleDeleteCard` function passed down as props to display the list of feedback items and allow deleting feedback.

3. **FeedbackList and FeedbackItem Components**:

   - The `FeedbackList` component receives the `feedback` array and the `handleDeleteCard` function as props from the `App` component.
   - It maps through the `feedback` array and renders individual `FeedbackItem` components for each feedback item in the list, passing the feedback item and the `handleDeleteCard` function as props to each `FeedbackItem`.
   - The `FeedbackItem` component receives an individual feedback item and the `handleDeleteCard` function as props from `FeedbackList`.
   - It displays the rating, text, and a delete button for each feedback item.
   - When the delete button is clicked, it triggers the `handleDeleteCard` function from the `FeedbackList` component, which sets the `showDeleteModal` state to true and sets the `itemToDelete` state to the ID of the item to be deleted.
   - The `FeedbackItem` component contains comments related to the use of UUIDs (Universally Unique Identifiers) as the unique identifier for feedback items, suggesting that the `PropTypes` for `id` in both `FeedbackList` and `FeedbackItem` should allow for both number and string types to accommodate the different types of IDs used in the feedback data.

4. **FeedbackStats Component**:
   - The `FeedbackStats` component receives the `feedback` array as a prop from the `App` component.
   - It calculates the average rating based on the feedback ratings in the `feedback` array and displays the total number of reviews and the average rating.

Overall, the components are designed to work together to gather, display, and manage user feedback, with the `App` component acting as the main data container and passing down necessary data and functions to its child components. The components maintain their own specific responsibilities, leading to a modular and maintainable code structure.

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
