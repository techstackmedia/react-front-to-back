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

Below is a quick summary:

The `FeedbackStats` component automatically calculates and displays the average rating and the total number of reviews for the feedback data. To use the `FeedbackStats` component in your application, follow these steps:

**1.** Import the `FeedbackStats` component into your desired file:

```jsx
import FeedbackStats from './components/FeedbackStats';
```

**2.** In your component's JSX, render the `FeedbackStats` component and pass the `feedback` state as a prop:

```jsx
<FeedbackStats feedback={feedback} />
```

The `FeedbackStats` component will now display the feedback statistics based on the data in the `feedback` state.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

The code snippet below illustrates the process of acquiring the identical code from this repository onto your local machine.

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
