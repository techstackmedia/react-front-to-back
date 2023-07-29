# Managing Global State

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

In the provided code, the `App` component is the parent component that renders three children components: `Header`, `FeedbackList` and `FeedbackItem`. The `App` component manages the state for the `feedback` data using the `useState` hook and passes the `feedback` data as a prop to the `FeedbackList` component.

Let's focus on how the `feedback` data is passed from the parent (`App`) component to the child (`FeedbackList`) component:

1. The `App` component contains the following code:

```jsx
import FeedbackList from './components/FeedbackList'
import FeedbackItem from './components/FeedbackItem'
import FeedbackData from './data/FeedbackData'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} />
        <FeedbackItem />
      </div>
    </>
  )
}

export default App
```

2. In the `App` component, the `useState` hook is used to manage the state of `feedback`, initialized with the data from `FeedbackData`.

3. The `FeedbackList` component is rendered with the `feedback` data passed as a prop:

```jsx
<FeedbackList feedback={feedback} />
```

4. Inside the `FeedbackList` component, the `feedback` prop is received as an argument:

```jsx
const FeedbackList = ({ feedback }) => {
  console.log(feedback) // check the console 

  // ... rest of the code ...
};
```

5. The `FeedbackList` component can now access the `feedback` data and use it as needed. In this case, it checks if the `feedback` array is empty and renders a message if there is no feedback data:

```jsx
if (!feedback || feedback.length === 0) {
  return <p>No Feedback Yet</p>;
}
```

6. If there is feedback data, the `FeedbackList` component maps through the `feedback` array and renders a list of feedback ratings:

```jsx
return (
  <div className='feedback-list'>
    {feedback.map((feedbackItem) => {
      return <div key={feedbackItem.id}>{feedbackItem.rating}</div>;
    })}
  </div>
);
```

To summarize, the `App` component acts as the parent component that manages the `feedback` data and passes it as a prop to the `FeedbackList` component. The `FeedbackList` component receives the `feedback` data as a prop and uses it to conditionally render the feedback ratings or a message if there is no feedback data. The `FeedbackItem` component is also rendered as another child of the `App` component, but it doesn't receive the `feedback` data as a prop.

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

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
