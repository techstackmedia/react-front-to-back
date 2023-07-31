# Feedback Context API

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The comments in the code files indicate that the prop-types checking can be optionally removed. The reason for this is that the application is stable and has been thoroughly tested, so the developers may choose to skip prop-types checking to improve performance, reduce bundle size, and make the codebase cleaner.

```jsx
/* You can optionally remove all prop-types checking  */
```

In fact in the next branch or chapter all prop-Types will be removed since it has served it's purpose and the app is ready for deployment.

Prop-types are used to enforce the type and presence of certain props passed to React components. They are especially helpful during development and debugging as they provide warnings in the console when incorrect props are passed. However, in production, these checks can add some overhead and might not be necessary if the app is well-tested and stable.

Now, let's talk about the use of the Context API. The Context API is a feature provided by React that allows data to be passed down the component tree without manually passing props at every level. It is used for sharing state and data between components that are not directly related through parent-child relationships. Context API helps simplify the management of state in large applications and can be used as an alternative to passing props through multiple levels of components.

In the given code, a context called "FeedbackContext" is defined in the file `FeedbackContext.js`. This context provides access to various pieces of feedback-related data and functions throughout the app. The data managed by the context includes the feedback items, the edit status of feedback, whether the delete modal is shown, and the item to be deleted. The context also provides functions to add, edit, and delete feedback.

The context is consumed in different components like `FeedbackForm`, `FeedbackItem`, `FeedbackList`, `FeedbackStats`, and `App` through the `useContext` hook, which allows these components to access the data and functions provided by the `FeedbackContext`.

Using the Context API here prevents the need to pass feedback-related data and functions as props through multiple levels of components. It offers a centralized way to manage and share this data, making it easier to update and maintain the application. The components can simply use `useContext` to access the necessary data from the context without worrying about the component hierarchy.

The reason why `FeedbackProvider` is wrapped around the `App` component in the index.js file is to make the data and functions provided by the `FeedbackContext` available to all components rendered within the `App` component.

The `FeedbackProvider` is a custom component defined in the `FeedbackContext.js` file. It wraps the entire application with the context data that includes feedback-related state and functions. By wrapping the `App` component with `FeedbackProvider`, all child components rendered by `App` can access this shared data and functions using the `useContext` hook.

Here's how it works:

1. The `FeedbackProvider` component in `FeedbackContext.js` contains the state for feedback data, the status of the delete modal, the item to be deleted, the feedback edit status, and various functions to manage feedback.

2. In the `index.js` file, the `FeedbackProvider` is imported from `./context/FeedbackContext`.

3. The `FeedbackProvider` is then wrapped around the `App` component using JSX syntax within the `ReactDOM.createRoot(...)` method.

4. By doing this, the entire application tree, starting with the `App` component, becomes a child of the `FeedbackProvider`.

5. As a result, all components within the `App` component (i.e., `FeedbackForm`, `FeedbackList`, `FeedbackStats`, and others) will have access to the state and functions provided by the `FeedbackContext` through the `useContext` hook.

This approach ensures that the data and functions related to feedback management are available globally across the application, without the need to pass them down manually through props. This pattern makes it easier to manage and share state among components, especially when the components are not directly related through parent-child relationships. It also helps to avoid "prop drilling," which can make the codebase cleaner and more maintainable.

In summary, the use of the Context API in this application simplifies the management of feedback-related data and functions, making it more maintainable and avoiding prop drilling. Additionally, the removal of prop-types checking in the production build can lead to performance improvements, as prop-types checks are primarily useful during development for catching potential issues with props passed to components.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

1. Usage: Prop-types Checking
Explanation: Prop-types are used to enforce the type and presence of certain props passed to React components. They are helpful during development and debugging as they provide warnings in the console when incorrect props are passed. However, in this case, the comments indicate that the developers may choose to remove prop-types checking in the production build. The reason for this is that the application is stable and thoroughly tested, so the overhead of prop-types checks might not be necessary in the final build. By removing prop-types checking, the app's performance can be improved, the bundle size reduced, and the codebase made cleaner.

2. Usage: Context API
Explanation: The Context API is used to allow data to be passed down the component tree without manually passing props at every level. It facilitates sharing state and data between components that are not directly related through parent-child relationships. In this application, the Context API is implemented through the "FeedbackContext" defined in the `FeedbackContext.js` file. It provides various pieces of feedback-related data and functions to different components, including `FeedbackForm`, `FeedbackItem`, `FeedbackList`, `FeedbackStats`, and `App`. The use of `useContext` hook in these components allows them to access the data and functions provided by the "FeedbackContext" easily. By using the Context API, the need for prop drilling is avoided, making the codebase more maintainable and improving the management of state in large applications.

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
