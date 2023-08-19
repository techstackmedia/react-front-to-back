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

   > **Note:** Check out the browser's console and notice the response when a feedback item object (text and rating) is updated (after the send button is clicked).

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

Overall, the logic revolves around managing the feedback data, showing a form to add/edit feedback, and handling interactions to update, delete, and add new feedback items. The `FeedbackList` component renders the list of feedback items, while the `FeedbackItem` component renders individual feedback items. The `Rating` component is responsible for rendering the star-based rating input.

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
