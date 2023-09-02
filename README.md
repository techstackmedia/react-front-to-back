# Identifying Links in text

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Issue](#issue)
- [Contributing](#contributing)
- [License](#license)

## Description

### Implementing Pagination Logic in the Feedback List Component

Below is a concise explanation of the pagination logic step by step:

1. **Import Statements**:
   - Import necessary dependencies and components.

```jsx
import React, { useState, useEffect, useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import Pulse from '../Pulse';
import FeedbackContext from '../../context/FeedbackContext';
```

2. **Functional Component Declaration**:
   - Define the `FeedbackList` functional component.

```jsx
const FeedbackList = () => {
  // ... component code ...
};
```

3. **State Initialization**:
   - Initialize state variables using the `useState` hook.
   - `feedback` holds the feedback data fetched from the context.
   - `is24HrFormat` is a boolean state to track the time format (24-hour or 12-hour).
   - `currentPage` holds the current page number, initialized to 1.
   - `itemsPerPage` defines the number of items to display per page, initialized to 10.

```jsx
const { feedback, isLoading, error } = useContext(FeedbackContext);
const [is24HrFormat, setIs24HrFormat] = useState(true);
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage] = useState(10);
```

4. **Calculate Index of First and Last Item to Display**:
   - Calculate the indices of the first and last items to be displayed on the current page.
   - `indexOfFirstItem` and `indexOfLastItem` are used to slice the `feedback` array to get the items for the current page.

```jsx
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const displayedFeedback = feedback.slice(indexOfFirstItem, indexOfLastItem);
```

5. **Calculate Total Number of Pages**:
   - Calculate the total number of pages based on the total number of feedback items and the items per page.

```jsx
const totalPages = Math.ceil(feedback.length / itemsPerPage);
```

6. **Handle Page Change**:
   - Define a function `handlePageChange` that takes a `newPage` parameter and updates the `currentPage` state with the new page number.

```jsx
const handlePageChange = (newPage) => {
  setCurrentPage(newPage);
};
```

7. **Use Effect for Time Format**:
   - Use the `useEffect` hook to load the time format preference from local storage when the component mounts.
   - If the preference exists in local storage, update the `is24HrFormat` state accordingly.

```jsx
useEffect(() => {
  const storedFormat = localStorage.getItem('timeFormat');
  if (storedFormat) {
    setIs24HrFormat(storedFormat === '24-hour');
  }
}, []);
```

8. **Conditional Rendering for Empty Feedback**:
   - If there is no feedback data (`feedback` is empty or falsy) and the loading has finished (`isLoading` is `false`), render a message indicating there is no feedback yet.

```jsx
if (!isLoading && (!feedback || feedback.length === 0)) {
  return <p>No Feedback Yet</p>;
}
```

9. **Conditional Rendering for Loading and Error**:
   - If the data is still loading (`isLoading` is `true`), render a loading animation (Pulse component).
   - If there is an error (`error` is truthy), display an error message.

```jsx
  return isLoading ? (
    <>
      <Pulse />
      {error && <p className='errorIndicator'>{error}</p>}
    </>
  ) : (
    // ... rest of the component code ...
  );
```

10. **Render Pagination Controls**:
    - Render the pagination controls with "Previous" and "Next" buttons.
    - Disable the "Previous" button on the first page (`currentPage === 1`) and the "Next" button on the last page (`currentPage === totalPages`).
    - Display the current page number and total pages in a span.

```jsx
  return (
    <div className='feedback-list'>
      {/* ... (existing code) */}

      <div className='pagination-controls'>
        <button
          style={{ color: currentPage === 1 ? '#000' : undefined }}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span style={{ color: '#fff' }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          style={{ color: currentPage === totalPages ? '#000' : undefined }}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};
```

This code snippets provides a complete example of a paginated feedback list component with the logic for changing pages, displaying the appropriate feedback items, and handling time format and loading/error states.

> **Note:** The code provided in this example demonstrates front-end pagination. While this approach offers benefits such as improved responsiveness and reduced server load, it's worth noting that pagination can also be implemented on the back end for certain use cases. If you are interested in exploring backend API pagination, you can refer to the dedicated branch on the GitHub repository, [05-pagination](https://github.com/techstackmedia/feedback-application-server/tree/05-pagination). Please ensure that you update the front-end code accordingly to maintain synchronization and prevent potential errors.

## Considerations for Choosing Pagination Approach

Whether to implement pagination on the front-end or the back-end depends on various factors and use cases. Both approaches have their advantages and considerations, and the choice often depends on your specific requirements and constraints. Here are some considerations for each approach:

**Front-End Pagination:**

1. **Responsiveness:** Front-end pagination allows for a more responsive user experience. Users can navigate between pages quickly without waiting for server requests.

2. **Reduced Server Load:** With front-end pagination, the server only sends a subset of data (e.g., a page of items) at a time, reducing the server load and bandwidth usage.

3. **Client-Side Caching:** Front-end pagination can leverage client-side caching, making it faster to switch between pages without re-fetching data.

4. **Complex UI Interactions:** If your pagination involves complex interactions, like client-side filtering or sorting, it's often easier to implement these on the front-end.

**Considerations for Front-End Pagination:**

1. **Data Size:** If you're dealing with a very large dataset, fetching all data to the client and paginating it there can lead to excessive memory usage on the client-side.

2. **Security:** Be cautious when paginating sensitive data. Ensure that you're not sending more data to the client than necessary, even if it's hidden from view.

**Back-End Pagination:**

1. **Security:** Back-end pagination ensures that only the required data is sent to the client, which can enhance security and privacy, especially for sensitive data.

2. **Optimized Queries:** Backend pagination allows for optimized database queries. The server can fetch only the necessary records, making queries more efficient.

3. **Consistency:** Back-end pagination provides a consistent view of data across all clients. The same page of data will be shown to all users, reducing the chances of data inconsistencies.

**Considerations for Back-End Pagination:**

1. **Server Load:** If your application has a high volume of traffic and requests, fetching data for each page can put a significant load on the server.

2. **Latency:** Back-end pagination may introduce some latency as users have to wait for server responses when navigating between pages.

3. **Scalability:** It might be more challenging to scale the back end to handle a large number of concurrent users requesting different pages.

In conclusion, the choice between front-end and back-end pagination depends on your specific use case, data size, and performance requirements. It's also common to use a combination of both approaches, where the back end provides paginated data, and the front end enhances the user experience by providing dynamic interactions and client-side caching.

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
