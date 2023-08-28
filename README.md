# Dynamic Values and Lists in JSX

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Issue](#issue)
- [Contributing](#contributing)
- [License](#license)

## Description

In this section, you will learn how to use dynamic values in JSX elements to display content based on variables, and how to create lists of elements using the `map` function. Understanding these concepts is crucial for building interactive and data-driven React applications.

The `App` component in this project showcases various features and concepts of React. Let's break down the code step by step:

```javascript
const title = 'Blog Post';
const body = 'This is my blog post';

const comments = [
  { id: 1, text: 'Comment one' },
  { id: 2, text: 'Another comment' },
  { id: 3, text: 'more than just two' },
];
```

- In the above lines, we define three variables: `title`, `body`, and `comments`. These variables hold dynamic values. `title` and `body` store strings, while `comments` is an array of objects containing comment data.

```javascript
return (
  <div className='container'>
    <h1>{title}</h1>
    <p>{body}</p>
    {/* Any expressions in curly braces are always evaluated within the returned JSX statement - to go from JSX to JS. */}
    <p>5 + 5 = {5 + 5}</p>
    <p>Random Number: {Math.random() * 10}</p>
    <h2>{title.toUpperCase()}</h2>

    <div className='comments'>
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  </div>
);
```

- The `return` statement defines the JSX structure that represents the user interface of the `App` component.
- We use curly braces `{}` to insert dynamic values into JSX. For example, `{title}` and `{body}` are replaced with the values stored in the `title` and `body` variables.
- We can also perform computations within curly braces. For instance, `{5 + 5}` will be transpiled to `10` in the compiled code, and `{Math.random() * 10}` will be replaced with a random number between 0 and 10 during transpilation.
- In the code, we use the `map` function to iterate through the `comments` array and dynamically generate a list of comments using JSX. Each comment's text is displayed within `<li>` elements, and the `key` prop is set to the `index` for better performance when rendering lists.

By understanding this code, you'll gain insights into using dynamic values and lists in JSX elements, which are crucial concepts when building interactive and data-driven React applications.

## Installation

To set up the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `react-front-to-back`
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
