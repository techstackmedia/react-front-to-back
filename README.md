# Setting a proxy for the Feedback App

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

In the Feedback App, the `proxy` field in the `package.json` is used to define a proxy for the development server. Let's break it down step by step:

1. `package.json`:
   In Node.js projects, the `package.json` file is used to store various metadata related to the project, including project name, version, dependencies, scripts, and other configurations.

2. `proxy` Field:
   The `proxy` field is a setting that can be added to the `package.json` file in React applications (created using `create-react-app`). It allows you to specify a proxy URL that the development server will use when making API requests during development.

3. Purpose of Proxy:
   When developing a frontend application that communicates with a backend server, it is common for the backend server to run on a different port (e.g., 5000) than the frontend development server (e.g., 3000). This can lead to CORS (Cross-Origin Resource Sharing) issues when trying to make API requests from the frontend to the backend during development.

By setting the `proxy` field in the `package.json`, you instruct the development server to forward specific API requests to the specified proxy URL instead of directly making them from the frontend. This helps bypass the CORS restrictions during development and allows seamless communication between the frontend and backend.

4. Proxy Configuration:
   In the given `package.json`, the proxy is set to `"http://localhost:5000"`. This means that any API requests made to the relative path `/feedback` will be automatically forwarded to `http://localhost:5000/feedback` during development.

For example, instead of making an API request to `http://localhost:5000/feedback`, the frontend code can make the request to `/feedback`, and the development server will handle forwarding the request to the correct backend URL.

This configuration simplifies the development process by abstracting the backend URL in the frontend code, making it easier to switch between development and production environments without manually changing the backend URLs.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

the `proxy` field in the `package.json` is used to set up a proxy for API requests during development, forwarding them to the specified backend server URL (`http://localhost:5000` in this case). It helps avoid CORS issues and allows a smoother frontend-backend communication during development.

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
