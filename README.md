# Custom Component - Rating Select

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The `Rating` component is a reusable component used in the `FeedbackForm`. It allows the user to select a rating for the service provided. Let's go through the logic of the `Rating` component:

1. `useState`: The `Rating` component uses the `useState` hook to manage its state. It has a state variable `selected` to keep track of the currently selected rating.

2. `numbers` array: The `numbers` array is created using `Array.from(Array(11).keys()).splice(1)`. It generates an array of numbers from 1 to 10. These numbers represent the possible ratings the user can choose from.

3. `handleSelectChange`: This function is called whenever the user selects a rating option. It updates the `selected` state to the newly chosen rating and also calls the `selectedRating` prop function, passing the newly selected rating as an argument. This allows the parent component (`FeedbackForm`) to be notified whenever the user selects a rating and update its own state with the chosen rating.

4. `selectList`: The `selectList` variable is created by mapping through the `numbers` array and generating a list of `<li>` elements, each representing a rating option. For each rating option, an `<input>` element of type "radio" is created with a corresponding label.

5. `checked` attribute: The `checked` attribute of the `<input>` element is set to `selected === item`, which means that the radio button will be checked if the `selected` state is equal to the current rating number `item`. This ensures that the currently selected rating is visually highlighted in the UI.

In the `FeedbackForm`, the `Rating` component is used as follows:

```jsx
<Rating selectedRating={(rating) => setRating(rating)} />
```

The `selectedRating` prop is passed to the `Rating` component, which is a function that sets the `rating` state in the parent component (`FeedbackForm`). When the user selects a rating in the `Rating` component, the `handleSelectChange` function inside `Rating` is triggered, which updates the `selected` state in `Rating` and calls the `selectedRating` prop function with the newly selected rating. This, in turn, updates the `rating` state in the `FeedbackForm`, allowing it to keep track of the selected rating.

Overall, the `Rating` component handles the presentation and selection of rating options, while the `FeedbackForm` component manages the overall form state, including the selected rating and the user's text input.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

The `Rating` component is a reusable component used in the `FeedbackForm` to allow users to select a rating for the service provided. It utilizes the `useState` hook to manage its state, keeping track of the currently selected rating. The component generates a list of rating options (from 1 to 10) using the `numbers` array and displays them as radio buttons with corresponding labels.

When the user selects a rating option, the `handleSelectChange` function is triggered. It updates the `selected` state in the `Rating` component and also calls the `selectedRating` prop function, passing the newly selected rating as an argument. This way, the parent component (`FeedbackForm`) is notified of the selected rating and updates its own state with the chosen rating.

```jsx
const Rating = ({ selectedRating }) => {
  const [selected, setSelected] = useState(null);

  const numbers = Array.from(Array(11).keys()).splice(1);
  const handleSelectChange = (e) => {
    const newSelected = +e.target.value;
    setSelected(newSelected);
    selectedRating(newSelected);
  };

  ...
};

export default Rating;
```

In the `FeedbackForm`, the `Rating` component is used by passing a prop `selectedRating={(rating) => setRating(rating)}`, where `setRating` is a function to update the `rating` state in the `FeedbackForm`. This ensures that the `FeedbackForm` can keep track of the selected rating along with the user's text input.

```jsx
<Rating selectedRating={(rating) => setRating(rating)} />
```

In summary, the `Rating` component handles the visual representation and selection of ratings, while the `FeedbackForm` manages the overall form state, combining both the selected rating and the user's text input.

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
