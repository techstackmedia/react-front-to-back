# React DevTool and Feedback List Component

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

There is a simple React application that displays a list of feedback items using components like `FeedbackList`, `FeedbackItem`, `Header`, and a main component named `App`. The data for the feedback items is stored in the `FeedbackData` constant, and it is managed using the `useState` hook in the `App` component.

### Component Tree

A component tree refers to the hierarchical structure of React components in your application. The component tree represents the relationship between parent and child components, with the root component being the top-level parent. Each component can have zero or more child components, forming a tree-like structure.

Both `Header` and `FeedbackList` are children to the `App` component.

To illustrate:

```jsx
<App> (Parent)
  └── <Header> (Child)
  └── <div className='container'>
        └── <FeedbackList feedback={feedback} /> (Child)
      </div>
```

**Using React Devtools:**

Once the React Developer Tools extension is installed in your browser, you can open it to access the component tree and inspect individual components. When you run your React application, you will see the component tree with `App` as the parent component and `FeedbackItem` and `Header` as the children components of the `App` component. You will also see the props passed to `Header` and the state used in `FeedbackItem` in the React Devtools.

**Updating State:**

To update the state in the `App` component, you can utilize the `useState` hook to manage the feedback data dynamically. For example, you can add, remove, or modify feedback items by updating the `feedback` state.

1. **FeedbackItem Component:**
   - The `FeedbackItem` component is a functional component that receives a destructured prop named `item`. Inside this prop, there are two properties: `rating` and `text`.
   - The component renders a card-like structure with the `rating` and `text` displayed on the screen. The `rating` is displayed inside a `div` with the class `num-display`, and the `text` is displayed inside another `div` with the class `text-display`.
   - This component will be used to represent individual feedback items in the `FeedbackList` component.

2. **FeedbackList Component:**
   - The `FeedbackList` component is a functional component that receives a prop named `feedback`. This prop is an array of feedback items, which will be passed from the `App` component.
   - The component first checks if the `feedback` array is either falsy or has a length of zero. If true, it returns a paragraph saying "No Feedback Yet".
   - If there is feedback data, the component maps through each item in the `feedback` array and renders a `FeedbackItem` component for each item. It passes the individual feedback item as the `item` prop to the `FeedbackItem` component.
   - Each `FeedbackItem` component is assigned a unique `key` prop, which is set to the `id` property of the corresponding feedback item. This helps React efficiently update the virtual DOM when the feedback list changes.

3. **FeedbackData Constant:**
   - The `FeedbackData` constant is an array containing three objects, each representing a feedback item.
   - Each feedback item has an `id`, `rating`, and `text` property, representing the unique identifier, the rating value, and the feedback text, respectively.

4. **App Component:**
   - The `App` component is the main component of the application. It uses the `useState` hook to manage the `feedback` state, initializing it with the data from the `FeedbackData` constant.
   - The component renders the `Header` component at the top of the page and the `FeedbackList` component within a `div` with the class `container`.
   - The `FeedbackList` component receives the `feedback` state as a prop, so it can display the list of feedback items based on the current state.

Overall, we have a React application that displays a list of feedback items using the `FeedbackList` component, with each feedback item represented by the `FeedbackItem` component. The data for the feedback items is stored in the `FeedbackData` constant and is managed using the `useState` hook in the `App` component. The `Header` component provides a header section for the application.

### Installation of React Dev Tool

To inspect and debug your React application, you can use the React Developer Tools extension for your browser.

- If you are using **Google Chrome**, simply search for "React Dev Tool" in your browser's search bar, click the link related to Chrome, and [add the extension to Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi).

- If you are using **Microsoft Edge**, search for "React Dev Tool" in your browser's search bar, and [get the extension from the Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil).

- If you are using **Mozilla Firefox**, go to the add-ons section and search for [React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).

Once you have added this extension to your browser, you can use it to inspect and analyze the component tree, props, and state of your React application, making the development and debugging process more efficient.

1. To utilize the React Developer Tools, you can use `Ctrl` + `Shift` + `I` to open the browser console tab, then navigate to the Component tab.

2. Here, you will see the component tree with `App` as the parent component and `FeedbackItem` and `Header` as the children components of the `App` component.

3. You will also see the props passed to `Header` and the state used in `FeedbackItem` in the React Devtools.

4. Currently, there is no state in the application. However, when we start discussing the Feedback Form, you will see updates in the React Developer Tools.

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
