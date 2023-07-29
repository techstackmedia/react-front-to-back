# Event Handler

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The provided code defines a React functional component called `FeedbackItem`. This component is responsible for displaying a feedback item, which includes a `rating`, `text`, and a close button represented by the `FaTimes` icon from the `react-icons/fa` library. The `FeedbackItem` component is wrapped inside a custom `Card` component (which is not shown in the provided code) for styling purposes.

**Logic and Functionality:**

- The `FeedbackItem` component receives the `rating`, `text`, and `id` as props destructured from the `item` prop.
- Inside the component, there's a commented out `handleClick` function and an alternative `handleClick` implementation. Both are used to log the `id` when the close button is clicked.

**Alternative Solutions (Commented):**

1. The commented out version of the close button event handler:

```jsx
{
  /* <button onClick={() => console.log(id)} className='close'> */
}
```

In this alternative, the event handler is defined directly in the `onClick` attribute of the button element using an arrow function. When the button is clicked, it logs the `id` of the feedback item.

2. The commented out version of `handleClick` used as the event handler:

```jsx
{
  /* <button onClick={handleClick} className='close'> */
}
```

In this alternative, the `handleClick` function is defined and used as the event handler for the button. When the button is clicked, it invokes the `handleClick` function, which logs the `id`.

### Current Implementation

The current implementation uses a third alternative solution:

```jsx
const onClick = () => {
  handleClick(id);
};

<button onClick={onClick} className='close'>
  <FaTimes color='purple' />
</button>;
```

In this implementation, a new function `onClick` is defined that calls the `handleClick` function with the `id` as an argument. This way, the `handleClick` function receives the `id` of the feedback item as a parameter and logs it when the close button is clicked.

### PropTypes Explanation

The `FeedbackItem` component expects the `item` prop to be an object with `rating` and `text` properties, both of which must be provided and are of specific data types (`PropTypes.number.isRequired` for `rating` and `PropTypes.string.isRequired` for `text`). The `isRequired` modifier ensures that both `rating` and `text` are mandatory props, and their absence will trigger a prop type warning.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

The `FeedbackItem` component provides a reusable and interactive way to display feedback items, including the ability to handle close button clicks. To use the `FeedbackItem` component in your own projects, follow these steps:

1. Install `react-icons` with the command `npm install react-icons` or `yarn add react-icons`.

2. Import the required components and icons.

3. Render the `FeedbackItem` component with the appropriate props, such as `rating`, `text`, and `id`.

Now you have a customizable and functional feedback item component with a close button event handler that can be integrated into your React applications.

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
