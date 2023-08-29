# Details Page - FeedbackDetails

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Issue](#issue)
- [Contributing](#contributing)
- [License](#license)

## Description

There are several updates made to the components to enhance their functionality and appearance:

1. Added a new component `Detail` that acts as a container for the `Header`, `FeedbackDetails`, and `AboutIcon` components.

2. Updated the `FeedbackItem` component to include a link to the details page for each feedback item. The link is generated using the `Link` component from `react-router-dom`. When clicked, it will navigate to the details page with the specific feedback item's ID.

3. Updated the `Button` and `Card` components to accept a `style` prop, allowing custom styles to be passed to the components.

4. Extracted the `formatDateAndTime` function to a separate file and exported it for reuse in multiple components. This function takes a date string and converts it into the desired date and time format.

5. Added the `formatDateAndTime` function to the `FeedbackDetails` component to display the formatted date and time of the feedback item.

By adding the `FeedbackDetails` page, users can now view more detailed information about each feedback item, including the formatted date and time. Additionally, the components' styles can be customized using the `style` prop, making them more attractive and flexible. The `formatDateAndTime` function was extracted to improve code reusability across different components that require date formatting.

The two files, `FeedbackItem.js` and `FeedbackDetails.js`, are related components in a Feedback React application that are used to display and handle feedback data.

1. `FeedbackItem.js`:

   - This component displays an individual feedback item in a Card format.
   - It imports `useContext` and `useState` from 'react', indicating that it uses the React Context API for state management and hooks for local state.
   - It imports the `FeedbackContext` from `'../../context/FeedbackContext'`, suggesting that it is accessing the global feedback context to get data and functions related to feedback management.
   - The component receives `item` and `is24HrFormat` as props, which represent the data of the feedback item and the time format preference, respectively.
   - It uses the `useContext` hook to access the feedback context, allowing it to use functions like `deleteFeedback` and `editFeedback`.
   - The component renders the feedback item's data such as rating, text, date, and time using HTML elements like `div`, `h5`, and `button`.
   - It uses the `Link` component from `'react-router-dom'` to create a link to the details page for each feedback item. The link is based on the feedback item's ID (`item._id`).
   - It contains functions like `handleTimeToggle`, `handleDeleteButton`, and `handleEditButton` to manage user interactions like toggling time format, deleting feedback, and editing feedback.
   - It utilizes the `useState` hook to manage the `is24HourFormat` state, which is updated when the user toggles the time format.

2. `FeedbackDetails.js`:
   - This component displays detailed information about a specific feedback item.
   - It imports `useParams`, `useNavigate`, and `useFeedback` from 'react-router-dom', suggesting that it is accessing the URL parameters, navigation functionality, and the feedback context.
   - It imports the `Card`, `Button`, and `formatDateAndTime` components or functions from other files.
   - The component uses the `useParams` hook to get the ID parameter from the URL, indicating that it fetches the specific feedback item using the ID.
   - It uses the `useFeedback` hook to get the feedback data from the global context.
   - The component then renders the details of the feedback item, including its text, rating, ID, and formatted date and time.
   - It uses the `Button` component to display a button for navigating back to the home page.
   - It contains the `onClick` function to handle the navigation back to the home page when the button is clicked.
   - It also uses the `formatDateAndTime` function to convert the feedback item's date string into a formatted date and time.

Overall, `FeedbackItem.js` and `FeedbackDetails.js` are two connected components that work together to display feedback data, allow users to interact with the feedback, and navigate to a detailed view of each feedback item. The components use React Context and React Router to manage state and handle navigation.

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

In case you come across the error "Module not found: Error: Can't resolve 'package-name' in 'your/path/here'", address this by running the command `npm install` (and consider restarting the development server if needed). This action will guarantee the installation of the required dependencies, successfully resolving the issue.

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
