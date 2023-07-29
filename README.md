# Feedback Statistics Component

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The `FeedbackStats` component is responsible for displaying statistics related to the feedback data received from the parent component (`App`). It calculates the average rating and shows the total number of reviews present in the feedback data.

In the `App` component, `FeedbackStats` is used alongside `FeedbackList` and a custom alert confirmation modal (`alertConfirmationModal`) to manage and display feedback data and allow users to interact with it.

Here's a breakdown of how the `FeedbackStats` component works:

1. It receives the `feedback` prop from its parent component (`App`). This prop is an array of objects, where each object represents a feedback item with properties like `rating`, `text`, and `id`.

2. Inside the `FeedbackStats` component, it calculates the average rating of all the feedback items. It uses the `reduce` function to sum up all the `rating` values and then divides the sum by the total number of feedback items (`feedback.length`) to get the average rating. If there are no feedback items, the average is set to 0 to avoid dividing by zero.

3. The `average` is then displayed along with the total number of reviews (`feedback.length`) in a nicely formatted manner.

4. The average rating is rounded to one decimal point using `toFixed(1)`. The `replace(/[.,]0$/, '')` removes trailing zeros after the decimal point if they exist.

5. The `FeedbackStats` component returns a JSX element that displays the feedback statistics within a `div` with the class name `feedback-stats`. It shows the total number of reviews and the average rating.

6. The `FeedbackStats` component is used in the `App` component by passing the `feedback` state as a prop. This way, the `FeedbackStats` component always displays the latest feedback data based on the state changes in the `App` component.

The `FeedbackStats` component is a simple, functional component that receives data through props and calculates the average rating and number of reviews. It provides a clean and concise way to display feedback statistics in the parent component's UI.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

The `FeedbackStats` component automatically calculates and displays the average rating and the total number of reviews for the feedback data. To use the `FeedbackStats` component in your application, follow these steps:

1. Import the `FeedbackStats` component into your desired file:

```jsx
import FeedbackStats from './components/FeedbackStats';
```

2. In your component's JSX, render the `FeedbackStats` component and pass the `feedback` state as a prop:

```jsx
<FeedbackStats feedback={feedback} />
```

The `FeedbackStats` component will now display the feedback statistics based on the data in the `feedback` state.

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
