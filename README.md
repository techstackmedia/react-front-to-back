# Managing Global State

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

There is a simple React application that displays a list of feedback items using components like `FeedbackList`, `FeedbackItem`, `Header`, and a main component named `App`. The data for the feedback items is stored in the `FeedbackData` constant, and it is managed using the `useState` hook in the `App` component.

1. **FeedbackItem Component:**
   - The `FeedbackItem` component is a functional component that receives a destructured prop named `item`. Inside this prop, there are two properties: `rating` and `text`.
   - The component renders a card-like structure with the `rating` and `text` displayed on the screen. The `rating` is displayed inside a `div` with the class `num-display`, and the `text` is displayed inside another `div` with the class `text-display`.
   - This component will be used to represent individual feedback items in the `FeedbackList` component.

2. **FeedbackList Component:**
   - The `FeedbackList` component is a functional component that receives a prop named `feedback`. This prop is an array of feedback items, which will be passed from the `App` component.
   - The component first checks if the `feedback` array is either falsy or has a length of zero. If true, it returns a paragraph saying "No Feedback Yet".
   - If there is feedback data, the component maps through each item in the `feedback` array and renders a `FeedbackItem` component for each item. It passes the individual feedback item as the `item` prop to the `FeedbackItem` component.
   - Each `FeedbackItem` component is assigned a unique `key` prop, which is set to the `id` property of the corresponding feedback item. This helps React efficiently update the virtual DOM when the feedback list changes.

3. **FeedbackData Constant:**
   - The `FeedbackData` constant is an array containing three objects, each representing a feedback item.
   - Each feedback item has an `id`, `rating`, and `text` property, representing the unique identifier, the rating value, and the feedback text, respectively.

4. **App Component:**
   - The `App` component is the main component of the application. It uses the `useState` hook to manage the `feedback` state, initializing it with the data from the `FeedbackData` constant.
   - The component renders the `Header` component at the top of the page and the `FeedbackList` component within a `div` with the class `container`.
   - The `FeedbackList` component receives the `feedback` state as a prop, so it can display the list of feedback items based on the current state.

Overall, we have a React application that displays a list of feedback items using the `FeedbackList` component, with each feedback item represented by the `FeedbackItem` component. The data for the feedback items is stored in the `FeedbackData` constant and is managed using the `useState` hook in the `App` component. The `Header` component provides a header section for the application.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

**Using React Devtools:**

- If you open the React Devtools, you will see the component tree with `App` as the parent component and `FeedbackItem` and `Header` as the children components of the `App` component. You will also see the props passed to `Header` and the state used in `FeedbackItem` in the React Devtools.

**Updating State:**

- You can update the state in the `App` component using the `useState` hook to manage the feedback data dynamically. For example, you can add, remove, or modify feedback items by updating the `feedback` state.

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin feature/new-feature`
5. Create a pull request.

Please make sure to follow the project's coding guidelines and conventions when contributing.

## License

Include the license under which you are releasing your project. For example:

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
