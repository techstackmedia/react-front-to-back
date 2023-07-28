# State - useState Hook

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

**`FeedbackItem` Component:**

1. The `FeedbackItem` component uses the `useState` hook to create three state variables: `rating`, `text`, and `increment`.

2. The `rating` state is initialized with the value `10`, and `setRating` is the function used to update the `rating` state.

3. The `text` state is initialized with the string "This is an example of a feedback Item", and `setText` is the function used to update the `text` state.

4. The `increment` state is initialized with the value `10`, and `setIncrement` is the function used to update the `increment` state.

5. The `handleClick` function is defined to update the `rating` and `text` states when a button is clicked. It uses the `setRating` and `setText` functions to update the states with new values.

6. The `handleClickIncrement` function is defined to increment the `increment` state when another button is clicked. It uses the functional form of `setIncrement`, which takes the previous state as an argument and returns the new state based on the previous state value.

7. In the JSX return, the `rating`, `text`, and `increment` states are displayed along with buttons that trigger the `handleClick` and `handleClickIncrement` functions.

```jsx
import { useState } from 'react';

const FeedbackItem = () => {
  const [rating, setRating] = useState(10);
  const [text, setText] = useState('This is an example of a feedback Item');
  const [increment, setIncrement] = useState(10);

  const handleClick = () => {
    // rating = 7 or text = 'This text is updated' will not work because state in React is immutable.
    // That is it can't be directly changed, it has to be reset
    setRating(7);
    setText('This text is updated');
  };

  const handleClickIncrement = () => {
    // if you need access to the previous state for example in the case of incrementing values
    setIncrement((prevState) => {
      return prevState + 1;
    });
  };
  
  return (
    <div className='card'>
      {/* <div className="num-display">10</div>
      <div className="text-display">This is an example of a feedback Item</div> */}
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
      <button onClick={handleClick}>Change Text and Rating</button>
      <button onClick={handleClickIncrement}>Increment</button>
      <div className='text-display'>{increment}</div>
    </div>
  );
};

export default FeedbackItem;
```

**`App` Component:**

1. The `App` component renders the `Header` component and the `FeedbackItem` component.

2. The `Header` component is used to display the header section with the provided props (`text`, `bgColor`, and `textColor`). It has default prop values if these props are not provided.

```jsx
import FeedbackItem from './components/FeedbackItem'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackItem />
      </div>
    </>
  )
}

export default App
```

**`Header` Component:**

1. The `Header` component accepts three props: `text`, `bgColor`, and `textColor`.

2. It uses inline CSS styles to set the background color (`bgColor`) and text color (`textColor`) of the header.

3. The header's content is determined by the `text` prop.

**Note:**

States in React are simply data and can be used to store information that changes over time. States allow React components to manage and update data dynamically, leading to dynamic user interfaces. The comment emphasizes the concept of immutability in React states, where states should not be directly modified but updated using the appropriate functions provided by React, like `setRating` and `setText` in the `FeedbackItem` component.

Overall, the code demonstrates a simple example of managing and updating states using the `useState` hook in React. The `FeedbackItem` component showcases how to use the `useState` hook to handle different types of data, including numbers and strings, as well as how to use the functional form of `setState` for state updates that depend on the previous state.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

In this section, we will explore how to use JSX to efficiently display images, text, and utilize attributes in JSX elements. Additionally, we will delve into the process of transpiling JSX code into plain JavaScript that can be easily understood by the browser.

- If you open the react dev tool, you will see the component tree with App the parent component and FeedbackItem and Header as the children components to the App component. You will also see the props passed in Header and the state used in the FeedbackItem in the React Devtools

let's update state

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
