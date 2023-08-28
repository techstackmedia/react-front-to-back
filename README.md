# Identifying Links in text

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

In the code snippet below, the `parts` array is created by splitting the `text` based on URLs using the `linkRegex`. Then, for each part, the component checks if it matches the URL pattern. If it's a URL, it wraps it in a `a` tag with the desired styles. If it's not a URL, it renders the part as plain text.

```jsx
import { useContext, useState } from 'react';
import FeedbackContext from '../../context/FeedbackContext';
import Card from '../shared/Card';
import closeIcon from '../../images/closeIcon.svg';
import editIcon from '../../images/editIcon.svg';
import { Link } from 'react-router-dom';
import externalLinkIcon from '../../images/externalLinkIcon.svg';
import parse from 'html-react-parser';

const FeedbackItem = ({ item, is24HrFormat }) => {
  const { deleteFeedback, editFeedback, isFalse } = useContext(FeedbackContext);
  const inputDate = item.date;

  const dateObject = new Date(inputDate);

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

  const [is24HourFormat, setIs24HourFormat] = useState(true);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    if (is24HourFormat && is24HrFormat) {
      return `${hours.toString().padStart(2, '0')}:${minutes}:${seconds}`;
    } else {
      const amOrPm = hours >= 12 ? 'PM' : 'AM';
      const twelveHourFormat = (hours % 12 || 12).toString().padStart(2, '0');
      return `${twelveHourFormat}:${minutes}:${seconds} ${amOrPm}`;
    }
  };

  const handleTimeToggle = () => {
    setIs24HourFormat((prevFormat) => !prevFormat);
  };

  const handleDeleteButton = () => {
    deleteFeedback(item._id);
  };

  const handleEditButton = () => {
    editFeedback(item);
  };

  const linkRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g; // Regular expression to match URLs
  const parts = item.text.split(linkRegex);

  return (
    <Card reverse={isFalse}>
      <Link className='link' to={`/details/${item._id}`}>
        <img src={externalLinkIcon} alt='external link icon' />
      </Link>
      <div className='num-display'>{item.rating}</div>
      <button onClick={handleDeleteButton} className='close'>
        <img src={closeIcon} alt='close icon' width={13.328} height={13.328} />
      </button>
      <button onClick={handleEditButton} className='edit'>
        <img src={editIcon} alt='edit icon' width={13.328} height={13.328} />
      </button>
      <div className='text-display'>
        {parts.map((part, index) => {
          if (linkRegex.test(part)) {
            if (part.startsWith('www.')) {
              // Prepend "https://" to the part if it starts with "www."
              const fullURL = `https://${part}`;
              return (
                <a
                  key={index}
                  href={fullURL}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'blue', textDecoration: 'underline' }}
                >
                  {fullURL}
                </a>
              );
            } else {
              // If the part is a link with http/https prefix, use it as is
              return (
                <a
                  key={index}
                  href={part}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'blue', textDecoration: 'underline' }}
                >
                  {part}
                </a>
              );
            }
          }
          // Otherwise, render the part as plain text
          return part;
        })}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
          top: 35,
        }}
      >
        <h5>{calendar}</h5>
        <h5 style={{ cursor: 'pointer' }} onClick={handleTimeToggle}>
          {formatTime(dateObject)}
        </h5>
      </div>
    </Card>
  );
};

export default FeedbackItem;
```

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
