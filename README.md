# Props Drilling

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

Props drilling in React refers to the process of passing data from a parent component down to its child components through props. This is done when a child component needs access to data or functions that are stored in a higher-level parent component. Props drilling can become cumbersome when you have deeply nested components, as you would need to pass the props through each intermediate component even if they are not directly using it.

In the provided code, props drilling is used to pass the `handleDelete` function from the `App` component to the `FeedbackList` component, and then from the `FeedbackList` component to the `FeedbackItem` component. The `handleDelete` function is used to remove an item from the `feedback` state array in the `App` component when the user clicks the delete button in a `FeedbackItem`.

Now let's explain the comments in the `FeedbackItem` component:

1. `// feedback state is not found here but in App.js`: This comment mentions that the `feedback` state is not directly available in the `FeedbackItem` component, but it is coming from the `App` component and passed as props.

2. `// clickButtonHandler`: This comment describes the purpose of the `handleClickButton` function, which is used to handle the click event of the delete button. When the button is clicked, it calls the `handleDelete` function passed as a prop, passing the `id` of the current feedback item as an argument. `clickButtonHandler` is an alternative to function name to `handleClickButton`

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

In this section, we will explore how to use JSX to efficiently display images, text, and utilize attributes in JSX elements. Additionally, we will delve into the process of transpiling JSX code into plain JavaScript that can be easily understood by the browser.

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
