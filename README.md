# Uninstall `framer-motion` library

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The `framer-motion` library can be uninstalled from your app using the following commands:

```bash
npm un framer-motion
```

or

```bash
yarn remove framer-motion
```

Additionally, make sure to remove all imports of framer-motion from your app.

`FeedbackList.jsx`

```jsx
<div className='feedback-list'>
  {feedback.map((feedbackItem) => {
    return (
      <FeedbackItem
        item={feedbackItem}
        key={feedbackItem.id}
        handleDeleteFeedback={handleDeleteFeedback}
        handleEditFeedback={handleEditFeedback}
      />
    );
  })}
</div>
```

`App.js`

```jsx
const alertConfirmationModal = showDeleteModal && (
  <div className='custom-modal' onClick={closeModal}>
    <div className='modal-content'>
      <h2>Confirmation</h2>
      <p>Are you sure you want to delete this item?</p>
      <div className='modal-actions'>
        <button
          type='button'
          onClick={handleDeleteConfirmed}
          className='btn-confirm'
        >
          Confirm
        </button>
        <button
          type='button'
          onClick={handleDeleteCancelled}
          className='btn-cancel'
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
);
```

> **Note:** Optionally uninstall and remove the `framer-motion` package from the app.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

1. Perform the installation steps `npm install`.
2. Run the development server.
3. Interact with the app and manage feedback items.

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
