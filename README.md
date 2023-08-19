# Event target and current Target

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

In React event handling, `e.target` and `e.currentTarget` refer to different elements involved in the event. Understanding their differences is essential to handle events correctly.

1. `e.target`:

   - `e.target` refers to the DOM element that triggered the event initially.
   - It always points to the innermost element where the event originated.
   - For example, in a nested structure of elements, if you click on the innermost child, `e.target` will refer to that child element.

2. `e.currentTarget`:
   - `e.currentTarget` refers to the DOM element that has the event listener attached to it.
   - It always points to the element where the event listener is registered.
   - For example, if you have an event listener on a parent container, and you click on any child element inside that container, `e.currentTarget` will refer to the parent container where the event listener is attached.

Now, let's understand the difference in the code you provided:

In the code you shared, there is a modal represented by the `div` with the class `custom-modal`. The modal appears when `showDeleteModal` is true and disappears when `showDeleteModal` is false.

```jsx
const closeModal = (e) => {
  console.log(e.target, e.currentTarget); // Check the console and click inside the modal. Click outside the modal to see why it gets closed.
  if (e.target === e.currentTarget) {
    setShowDeleteModal(false);
  }
};
```

In the `closeModal` function, you have attached an `onClick` event listener to the modal `div`. When you click on the modal (the gray area), the `onClick` event is triggered. At this point, `e.target` will refer to the specific element you clicked inside the modal (e.g., the "Confirm" or "Cancel" button). However, `e.currentTarget` will refer to the `div` with the class `custom-modal`, which is the element where the event listener is attached.

The condition `if (e.target === e.currentTarget)` checks if you clicked on the gray area (the modal itself) and not on any of its child elements. If you click on any child element within the modal, the condition will be false, and the `setShowDeleteModal(false)` won't be executed. This behavior ensures that the modal only closes when clicking outside its content (gray area) and not when clicking on the buttons inside it.

In the `closeModal` function, as shown above, when different elements inside the modal are clicked, the console output for `e.target` and `e.currentTarget` changes accordingly:

1. Clicking the text "Confirmation" inside the modal yields the following console output:

```html
<h2>Confirmation</h2>
<div class="custom-modal">...</div>
```

2. Clicking the text "Are you sure you want to delete this item?" inside the modal yields the following console output:

```html
<p>Are you sure you want to delete this item?</p>
<div class="custom-modal">...</div>
```

3. When clicking outside the modal to close it, the console shows two identical outputs:

```html
<div class="custom-modal">...</div>
<div class="custom-modal">...</div>
```

In summary, the `closeModal` function is designed to close the modal when clicking outside its content (the gray area) by comparing `e.target` with `e.currentTarget`. If they are equal, it means you clicked on the modal itself, and then the `setShowDeleteModal(false)` is called to close the modal. If they are not equal (you clicked on a child element inside the modal), the modal remains open.

Here is a quick and more detailed summary:

The usage of `e.target` and `e.currentTarget` in React event handling is crucial to handle events correctly. Here's an explanation of their usage based on the content provided:

1. `e.target`:
   - `e.target` represents the DOM element that triggered the event initially.
   - It always points to the innermost element where the event originated.
   - For example, in a nested structure of elements, if you click on the innermost child, `e.target` will refer to that specific child element.

2. `e.currentTarget`:
   - `e.currentTarget` represents the DOM element that has the event listener attached to it.
   - It always points to the element where the event listener is registered.
   - For instance, if you have an event listener on a parent container, and you click on any child element inside that container, `e.currentTarget` will refer to the parent container where the event listener is attached.

In the provided code, there is a modal represented by the `div` with the class `custom-modal`. The modal appears when `showDeleteModal` is `true` and disappears when `showDeleteModal` is `false`.

The `closeModal` function is responsible for handling the modal's closing behavior. When you click on the modal (the gray area), the `onClick` event is triggered. At this point, `e.target` will refer to the specific element you clicked inside the modal (e.g., the "Confirm" or "Cancel" button). However, `e.currentTarget` will refer to the `div` with the class `custom-modal`, which is the element where the event listener is attached.

The condition `if (e.target === e.currentTarget)` checks if you clicked on the gray area (the modal itself) and not on any of its child elements. If you click on any child element within the modal, the condition will be false, and the `setShowDeleteModal(false)` won't be executed. This behavior ensures that the modal only closes when clicking outside its content (gray area) and not when clicking on the buttons inside it.

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
