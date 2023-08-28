# Managing Global State

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Issue](#issue)
- [Contributing](#contributing)
- [License](#license)

## Description

**Using React Devtools:**

- If you open the React Devtools, you will see the component tree with `App` as the parent component and `FeedbackItem`, `FeedbackList` and `Header` as the children components of the `App` component. You will also see the props passed to `Header` and the state used in `FeedbackItem` in the React Devtools.

**Updating State:**

- You can update the state in the `App` component using the `useState` hook to manage the feedback data dynamically. For example, you can add, remove, or modify feedback items by updating the `feedback` state. For now we not updating the state we get in the App component. Later on we will use the state to perform CRUD (Create, Read, Update, Delete) operations.

In the provided code, the `App` component is the parent component that renders three children components: `Header`, `FeedbackList` and `FeedbackItem`. The `App` component manages the state for the `feedback` data using the `useState` hook and passes the `feedback` data as a prop to the `FeedbackList` component.

Let's focus on how the `feedback` data is passed from the parent (`App`) component to the child (`FeedbackList`) component:

**1.** The `App` component contains the following code:

```jsx
import FeedbackList from './components/FeedbackList';
import FeedbackItem from './components/FeedbackItem';
import FeedbackData from './data/FeedbackData';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} />
        <FeedbackItem />
      </div>
    </>
  );
};

export default App;
```

**2.** In the `App` component, the `useState` hook is used to manage the state of `feedback`, initialized with the data from `FeedbackData`.

**3.** The `FeedbackList` component is rendered with the `feedback` data passed as a prop:

```jsx
<FeedbackList feedback={feedback} />
```

**4.** Inside the `FeedbackList` component, the `feedback` prop is received as an argument:

```jsx
const FeedbackList = ({ feedback }) => {
  console.log(feedback); // check the console

  // ... rest of the code ...
};
```

**5.** The `FeedbackList` component can now access the `feedback` data and use it as needed. In this case, it checks if the `feedback` array is empty and renders a message if there is no feedback data:

```jsx
if (!feedback || feedback.length === 0) {
  return <p>No Feedback Yet</p>;
}
```

**6.** If there is feedback data, the `FeedbackList` component maps through the `feedback` array and renders a list of feedback ratings:

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

The code snippet below illustrates the process of acquiring identical code from this repository onto your local machine.

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

## Issue

In case you come across the error "Module not found: Error: Can't resolve 'package name' in 'your/path/here'", address this by running the command `npm install` (and consider restarting the development server if needed). This action will guarantee the installation of the required dependencies, successfully resolving the issue.

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
