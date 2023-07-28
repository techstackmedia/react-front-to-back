# Custom Conditionally Styled Component - Card

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The custom component named `Card`, which is a wrapper component used to create a card-like layout in the application. The component accepts two props, `children` and `className`, and renders its children inside a `<div>` element with the specified `className`.

**Explanation of `Card` Component:**

1. The `Card` component is a functional component that takes in two props, `children` and `className`.
2. The `children` prop represents the content that will be placed inside the `<div>` element created by the `Card` component.
3. The `className` prop is used to apply custom CSS classes to the `<div>` element, allowing the component's appearance to be customized by passing different class names as a prop.

**Custom Component:**
The `Card` component is a custom component. It is custom because it is not a built-in HTML element or a part of any React library. It has been defined by the developer to encapsulate specific functionality and styling for creating cards in the application.

**Default Props for `Card` Component:**
The `className` prop is set as part of the default props for the `Card` component. Default props are used to provide fallback values for props in case they are not explicitly provided when using the component. If the `className` prop is not provided when using the `Card` component, it will default to an empty string (`''`).

**Example of Default Props:**
Here's an example of defining default props for the `Card` component:

```jsx
const Card = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

Card.defaultProps = {
  className: 'card', // The default value for className is 'card'
};

export default Card;
```

In the example above, if you use the `Card` component without passing a `className` prop, it will use the default value `'card'` as the CSS class for the `<div>` element.

**Usage in `FeedbackItem` Component:**
In the `FeedbackItem` component, the `Card` component is used to create a card-like layout for displaying feedback items. The `className` prop is passed to the `Card` component with the value `'card'`, which is a custom CSS class used to style the card.

```jsx
import Card from './shared/Card';

const FeedbackItem = ({ item: { rating, text } }) => {
  return (
    <Card className='card'>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
    </Card>
  );
};

export default FeedbackItem;
```

By using the `Card` component, the `FeedbackItem` component can easily create consistent and reusable card elements for each feedback item in the application. The `className` prop allows the card's styling to be customized based on the specific needs of the application.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

In this section, we will explore how to use JSX to efficiently display images, text, and utilize attributes in JSX elements. Additionally, we will delve into the process of transpiling JSX code into plain JavaScript that can be easily understood by the browser.

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
