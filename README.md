# Feedback App Deployment via GitHub Pages

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

To deploy your React app using GitHub Pages, follow these steps:

Step 1: Set Up Your GitHub Repository

1. Create a new repository on GitHub with the name "react-front-to-back".
2. Clone the repository to your local machine using Git.

> **Note:** Use an repository name of your choice but for this article, "react-front-to-back" will be used.

Step 2: Install gh-pages Package

1. In your project directory, open the terminal or command prompt.
2. Run the following command to install the gh-pages package as a dev dependency:

```bash
npm i gh-pages -D
```

Step 3: Update package.json

1. Open the "package.json" file in your project's root directory.
2. Add the following properties at the top-level of the "package.json" file:

```json
{
  "name": "react-front-to-back",
  "version": "1.0.0",
  "homepage": "https://techstackmedia.github.io/react-front-to-back"
  // ...
}
```

Replace ["https://techstackmedia.github.io/react-front-to-back"](https://techstackmedia.github.io/react-front-to-back) with the URL of your GitHub Pages site once deployed. This URL is based on your GitHub username and repository name.

```txt
https://username.github.io/repo
```

**3.** Add the "deploy" and "predeploy" scripts to the "scripts" section of "package.json":

```json
{
  "scripts": {
    // ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
  // ...
}
```

Step 4: Deploy the App

1. In your project directory, open the terminal or command prompt.
2. Run the following command to build the project:

```bash
npm run build
```

**3.** Finally, run the following command to deploy your app to GitHub Pages:

```bash
npm run deploy
```

This command will use the "gh-pages" package to push the contents of the "build" folder to the "gh-pages" branch of your GitHub repository.

step 5: Serve production build (optional)

This will create a "build" folder in your project directory with the optimized production build of your React app.

> **Note:** You need to install `serve` globally in order to serve the production build:

```bash
npm i -g serve
```

```bash
serve -s build
```

It will serve it on `http://localhost:5000` for you to see the production build.

Step 6: Push to GitHub

It is assumed you are pushing for the first time, if not skip the command `git remote add origin "https://github.com/techstackmedia/react-front-to-back.git"`:

```bash
git add .
git commit -m "commit message"
git remote add origin "https://github.com/techstackmedia/react-front-to-back.git"
git push origin master
```

By pushing to the gh-pages branch, your app will be deployed to GitHub Pages, and you can access it at `https://techstackmedia.github.io/react-front-to-back`[https://techstackmedia.github.io/react-front-to-back].

Step 7: Configure GitHub Repository Settings

1. Go to your GitHub repository's settings.
2. In the sidebar, scroll down to the GitHub "Pages" and click - `https://github.com/your-username/repo-name/settings/pages`.
3. Click the **Visit site** button

Step 8: Access Your Deployed App
After a few moments, your app will be deployed to GitHub Pages. You can access it using the following URL:

```txt
https://techstackmedia.github.io/react-front-to-back
```

Replace "techstackmedia" with your GitHub username and "react-front-to-back" with your repository name.

Now your React app is deployed using GitHub Pages, and it should be accessible via the provided URL. Any time you make changes to your app and want to update the deployed version, repeat Step 4 by running `npm run deploy`.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

GitHub Pages deployed your React app using GitHub Pages, and generates a URL. Any time you make changes to your app and want to update the deployed version, repeat Step 4 by running `npm run deploy`.

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
