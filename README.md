# Formatted Dates in React - Feedback Item

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

User feedback is essential for any application or website to understand user experiences and improve its offerings. React, being one of the most popular front-end libraries, provides developers with a flexible and efficient way to manage user feedback. In this article, we'll explore a React component called `FeedbackItem`, which not only handles user feedback display but also enhances the user experience with formatted dates and times.

### The FeedbackItem Component

The `FeedbackItem` component is part of a larger feedback management system, and its primary responsibility is to display individual feedback entries. The component receives a feedback object `item` as a prop, which contains various details such as the rating, text, and the date the feedback was submitted.

### Formatting the Date and Time

One interesting aspect of the `FeedbackItem` component is how it formats the date and time of each feedback entry. The date information is provided as an ISO string, such as "2023-08-05T19:22:33.873Z," retrieved from the backend server. To make the date more user-friendly, the component utilizes JavaScript's built-in `Date` object to convert and format the date and time into a more readable format. This ISO string format is commonly used when exchanging date and time data between the frontend and backend systems.

By utilizing the `Date` object and various methods such as `getMonth()`, `getDate()`, `getFullYear()`, `getHours()`, `getMinutes()`, and `getSeconds()`, the component can extract the individual components of the date and time, such as month, day, year, hours, minutes, and seconds. With this information, the component can present the date in a more human-readable format, such as "August 5, 2023," and the time in a standard "hr:min:sec" format.

The use of the `padStart()` method is particularly noteworthy as it ensures that single-digit values for hours, minutes, and seconds are padded with leading zeros. This ensures a consistent and visually appealing presentation of the time information.

The ability to format and display the date and time in a user-friendly manner enhances the user experience by providing clear and easily understandable feedback submission times. As a result, users can readily identify when each feedback entry was submitted, enabling them to contextualize the feedback and potentially identify patterns or trends in the user feedback data.

By combining the backend-provided ISO date string with JavaScript's `Date` object and formatting methods, the `FeedbackItem` component achieves a balance between technical accuracy and user-friendly presentation, demonstrating effective front-end development practices that contribute to a seamless and engaging user experience.

```javascript
const inputDate = item.date;
const dateObject = new Date(inputDate);
```

The code above creates a new `Date` object using the input ISO string. Next, it extracts the month, day, and year components from the `dateObject` using the `getMonth()`, `getDate()`, and `getFullYear()` methods, respectively.

```javascript
const monthNames = ['January', 'February', 'March', ...'December'];
const monthName = monthNames[dateObject.getMonth()];
const day = dateObject.getDate();
const year = dateObject.getFullYear();
```

In this part of the code, we create an array `monthNames` containing the names of the months. We use the `getMonth()` method (which returns a value from 0 to 11) to get the corresponding month name from the array.

```javascript
const hours = dateObject.getHours().toString().padStart(2, '0');
const minutes = dateObject.getMinutes().toString().padStart(2, '0');
const seconds = dateObject.getSeconds().toString().padStart(2, '0');
```

To format the time, the component extracts the hour, minute, and second components from the `dateObject`. The `toString()` method is applied to each value to convert them to strings. Then, the `padStart()` method is used to ensure that single-digit values are padded with leading zeros to maintain a consistent format (e.g., 01, 02, ..., 09).

### Improving User Interface

The formatted date and time are then displayed alongside the feedback content, enhancing the user interface. By presenting the date in a more human-readable format (e.g., "August 5, 2023") and the time in a standard "hr:min:sec" format, users can easily understand when the feedback was submitted.

```javascript
<div
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    top: 30,
  }}
>
  <h5>{calendar}</h5>
  <h5>{time}</h5>
</div>
```

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
