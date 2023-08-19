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

Below is a quick summary:

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
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Make your changes and commit them: `git commit -m "Add some feature"`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Create a pull request.

Please make sure to follow the project's coding guidelines and conventions when contributing.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
