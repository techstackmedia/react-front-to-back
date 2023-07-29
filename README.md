# Dynamic Values and Lists in JSX

## Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The `App` component in this project showcases various features and concepts of React. Let's break down the code step by step:

```javascript
const title = 'Blog Post'
const body = 'This is my blog post'

const comments = [
  { id: 1, text: 'Comment one' },
  { id: 2, text: 'Another comment' },
  { id: 3, text: 'more than just two' }
]
```

- In the above lines, we define three variables: `title`, `body`, and `comments`. These variables hold dynamic values. `title` and `body` store strings, while `comments` is an array of objects containing comment data.

```javascript
return (
  <div className='container'>
    <h1>{title}</h1>
    <p>{body}</p>
    {/* Any expressions in curly braces when in JSX or with the component return statement - to go from JSX to JS */}
    <p>5 + 5 = {5 + 5}</p>
    <p>Random Number: {Math.random() * 10}</p>
    <h2>{title.toUpperCase()}</h2>

    <div className='comments'>
      <h3>Comments ({comments.length})</h3>
      <ul>
        {
          comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))
        }
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

## Technologies

This project utilizes the following technologies:

- React: The main framework or library for building the frontend.
- React DOM: Works with the Document Object Model (DOM) alongside the React library.
- React Scripts: Provides additional tools like the development server.
- Web Vitals: Allows you to monitor performance analytics.

## Installation

To set up the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

In this section, you will learn how to use dynamic values in JSX elements to display content based on variables, and how to create lists of elements using the `map` function. Understanding these concepts is crucial for building interactive and data-driven React applications.

### Public Folder

The `public` folder contains the single-page application (SPA) entry point, `index.html`. The `div` with the id `root` serves as a placeholder for our entire frontend or UI. You can also include any external CDN links or remove comments from `index.html` optionally. Additionally, the `public` folder may include other static assets such as a favicon and images.

### Src Folder

The `src` folder is where you'll create your components and write the main logic for your application. This is where most of your development work will take place.

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin feature/new-feature`
5. Create a pull request.

Please make sure to follow the project's coding guidelines and conventions when contributing.

## License

Include the license under which you are releasing your project. For example:

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
