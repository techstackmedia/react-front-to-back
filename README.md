# Real-Time Date and Time Update in React: Understanding setInterval and Displaying the Current Time

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

In the provided code, the date and time are being updated and displayed using the `currentDate` state and the `setInterval` function. Let's go through the code snippet to understand how the date and time are continuously updated:

1. Setting Up the Date and Time State:
   At the beginning of the `FeedbackProvider` component, the `currentDate` state is initialized using `useState(new Date())`. This state holds the current date and time and will be updated every second using the `setInterval` function.

2. Updating the Date and Time:
   Inside the `FeedbackProvider`, there is a `useEffect` that runs only once when the component mounts:

   ```javascript
   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentDate(new Date());
     }, 1000); // Update every second

     return () => {
       clearInterval(interval);
     };
   }, []);
   ```

   In this `useEffect`, a new interval is created using `setInterval`. The function inside `setInterval` sets the `currentDate` state to a new `Date` object, which is the current date and time. The interval is set to 1000 milliseconds (1 second), so the date and time will be updated every second.

3. Formatting the Date and Time:
   In the `FeedbackStats` component, the `currentDate` context value received from the `FeedbackProvider` is used to display the date and time:

   ```javascript
   const { currentDate } = useContext(FeedbackContext);
   const date = currentDate.split('⏲️')[0];
   const time = `⏲️ ${currentDate.split('⏲️')[1]}`;
   ```

   The `currentDate` value is split using the '⏲️' emoji as the separator. The first part of the split (`currentDate.split('⏲️')[0]`) represents the formatted date, and the second part (`currentDate.split('⏲️')[1]`) represents the formatted time.

4. Displaying the Date and Time:
   The formatted date and time are displayed in the `FeedbackStats` component:

   ```javascript
   <div className='feedback-stats'>
     <h5>{date}</h5>
     <h5>{time}</h5>
   </div>
   ```

   The date and time are displayed in separate `h5` elements. The `date` variable represents the formatted date, and the `time` variable represents the formatted time.

Overall, the code snippet ensures that the date and time are continuously updated every second, and the formatted date and time are displayed in the `FeedbackStats` component. The displayed time will keep ticking as the interval updates the `currentDate` state every second, reflecting the current date and time.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

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
