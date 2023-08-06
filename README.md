# Toggling Formatted Time - Feedback Item

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

### The `FeedbackItem` Component

### Creating a Date Object

The first step in formatting the date is to create a `Date` object from the date provided by the backend. The date is provided as an ISO string, such as "2023-08-05T19:22:33.873Z," which represents the year, month, day, hour, minute, second, and milliseconds in UTC.

```javascript
const inputDate = item.date;
const dateObject = new Date(inputDate);
```

By creating a `Date` object, we can easily extract various components of the date, such as the month, day, and year, required to present the date in a user-friendly manner.

### Formatting the Date

The next step is to format the date components obtained from the `Date` object into a more readable format. We create an array of month names and use the `getMonth()`, `getDate()`, and `getFullYear()` methods to obtain the corresponding month name, day, and year.

```javascript
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const monthName = monthNames[dateObject.getMonth()];
const day = dateObject.getDate();
const year = dateObject.getFullYear();

const calendar = `${monthName} ${day}, ${year}`;
```

In the example above, we construct the `calendar` variable, which holds the formatted date in the format "Month day, year," such as "August 5, 2023."

### Formatting the Time

The `FeedbackItem` component goes a step further and allows the user to toggle between 24-hour and 12-hour time formats. By clicking on the time displayed, the format switches between "hr:min:sec" (24-hour format) and "hr:min:sec AM/PM" (12-hour format).

We use the `useState` hook to maintain the current time format state and the `formatTime` function to handle the formatting logic.

```javascript
const [is24HourFormat, setIs24HourFormat] = useState(true);

const formatTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  if (is24HourFormat) {
    return `${hours.toString().padStart(2, '0')}:${minutes}:${seconds}`;
  } else {
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const twelveHourFormat = (hours % 12 || 12).toString().padStart(2, '0');
    return `${twelveHourFormat}:${minutes}:${seconds} ${amOrPm}`;
  }
};
```

In the `formatTime` function, we obtain the hour, minute, and second components from the `Date` object. If the `is24HourFormat` state is true, we display the time in the 24-hour format. Otherwise, we convert the hour component to a 12-hour format and display it with AM or PM.

### Toggling the Time Format

To toggle the time format, we add an `onClick` event to the time displayed. When the user clicks on the time, the `handleTimeToggle` function is called, which switches the `is24HourFormat` state between `true` and `false`.

```javascript
const handleTimeToggle = () => {
  setIs24HourFormat((prevFormat) => !prevFormat);
};
```

### Bringing it All Together

With all the components in place, the `FeedbackItem` component displays the feedback information with the formatted date and time. Users can easily read and understand when the feedback was submitted, and they have the option to view the time in either a 24-hour or 12-hour format.

The ability to format dates effectively is crucial for providing an excellent user experience. By displaying dates and times in a human-readable format, we ensure that our users can easily interpret and interact with the information, making our React applications more intuitive and user-friendly.

In conclusion, by using JavaScript's `Date` object and formatting methods, along with React's state management, we can easily format and toggle

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
