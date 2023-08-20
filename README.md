# Animation with Framer Motion

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

In both `App.js` and `FeedbackList.jsx`, the `framer-motion` library is used to add animations to components. The animations help create smooth transitions and visual effects when components are mounted, unmounted, or updated. Let's explore how `framer-motion` is used in each file:

1. `FeedbackList.jsx`:

In this file, `framer-motion` is used to animate the individual `FeedbackItem` components when they are added or removed from the list. The `AnimatePresence` component from `framer-motion` is used to wrap the list of `FeedbackItem` components. It allows `framer-motion` to handle the animations when components are added or removed.

For each `FeedbackItem` component, a wrapping `motion.div` is used to apply animations to the individual items. The `motion.div` component is provided with `initial`, `animate`, and `exit` props to define how the item should behave during its initial mount, while it is present, and when it is removed from the list, respectively. In this case, `opacity` is animated from 0 to 1 during the initial mount, and from 1 to 0 during the exit.

**2.** `App.jsx`:

In this file, `framer-motion` is used to animate the custom delete confirmation modal that appears when a user wants to delete a feedback item. The modal is conditionally rendered based on the `showDeleteModal` state.

Just like in `FeedbackList.jsx`, the `motion.div` component is used to animate the modal's appearance (`initial` and `animate` props) and disappearance (`exit` prop). Additionally, the inner content of the modal (the actual delete confirmation content) is also animated using another `motion.div`. This allows for separate animations on the modal itself and its inner content.

The following animations are applied to the modal:

- For the modal's appearance, it scales from `scale: 0.5` to `scale: 1`, and its opacity changes from `opacity: 0` to `opacity: 1`.
- For the modal's disappearance, it scales from `scale: 1` to `scale: 0.5`, and its opacity changes from `opacity: 1` to `opacity: 0`.

In both cases, `framer-motion` handles the animations in a declarative manner by providing the necessary properties (`initial`, `animate`, and `exit`) for the components involved in the animation.

These animations help create a more visually appealing and interactive user experience by adding smooth transitions and visual cues during certain actions like adding feedback items to the list or confirming the deletion of a feedback item.

Below is a quick summary;

The usage of the `framer-motion` library in both `App.js` and `FeedbackList.jsx` is to add animations to components and create smooth transitions and visual effects during different scenarios. Here's a summary of how `framer-motion` is used in each file:

1. `FeedbackList.jsx`:

- `framer-motion` is used to animate the individual `FeedbackItem` components when they are added or removed from the list.
- The `AnimatePresence` component from `framer-motion` is used to wrap the list of `FeedbackItem` components, allowing the library to handle the animations when components are added or removed.
- Each `FeedbackItem` component is wrapped in a `motion.div` component, which applies animations to the individual items. The `motion.div` component is provided with `initial`, `animate`, and `exit` props to define how the item behaves during its initial mount, presence, and when it is removed from the list.
- In this case, the `opacity` property is animated from 0 to 1 during the initial mount, and from 1 to 0 during the exit, creating a fade-in and fade-out effect.

**2.** `App.jsx`:

- `framer-motion` is used to animate the custom delete confirmation modal that appears when a user wants to delete a feedback item.
- The modal is conditionally rendered based on the `showDeleteModal` state.
- The modal itself is wrapped in a `motion.div` component, which animates its appearance (`initial` and `animate` props) and disappearance (`exit` prop).
- Additionally, the inner content of the modal (the actual delete confirmation content) is also animated using another `motion.div`. This allows for separate animations on the modal itself and its inner content.
- For the modal's appearance, it scales from `scale: 0.5` to `scale: 1`, and its opacity changes from `opacity: 0` to `opacity: 1`, creating a scaling-up effect with fading in.
- For the modal's disappearance, it scales from `scale: 1` to `scale: 0.5`, and its opacity changes from `opacity: 1` to `opacity: 0`, creating a scaling-down effect with fading out.

Overall, `framer-motion` is used to create visually appealing and interactive animations in both files, enhancing the user experience by providing smooth transitions and visual cues during certain actions like adding feedback items or confirming deletions.

> **Note:** Should you come across the error "Module not found: Error: Can't resolve 'framer-motion' in 'your/path/here'", address this by running the command `npm install` (and consider restarting the development server if needed). This action will guarantee the installation of the required dependencies, successfully resolving the issue.

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
