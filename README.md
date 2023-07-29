# Custom Component - Card

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The custom component named `Card` is a wrapper component used to create a card-like layout in the application. This component accepts two props, `children` and `className`, and renders its children inside a `<div>` element with the specified `className`.

### Explanation of `Card` Component

The `Card` component is a functional component that takes in two props, `children` and `className`. The `children` prop represents the content that will be placed inside the `<div>` element created by the `Card` component. On the other hand, the `className` prop is used to apply custom CSS classes to the `<div>` element, allowing the component's appearance to be customized by passing different class names as a prop.

### Custom Component

The `Card` component is considered custom because it is not a built-in HTML element or a part of any React library. It has been defined by the developer to encapsulate specific functionality and styling for creating cards in the application. This level of customization provides flexibility and reusability when designing the layout of the cards.

### Default Props for `Card` Component

The `Card` component includes default props to provide fallback values in case they are not explicitly provided when using the component. For instance, the `className` prop has a default value of `'card'`. If the `className` prop is not provided when using the `Card` component, it will default to the CSS class name `'card'`.

### Example of Default Props

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

### Usage in `FeedbackItem` Component

In the `FeedbackItem` component, the `Card` component is utilized to create a card-like layout for displaying feedback items. The `className` prop is passed to the `Card` component with the value `'card'`, which is a custom CSS class used to style the card.

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

## Usage

The `Card` component has been designed to help create card-like layouts in the application. By passing the content of the card as `children` and applying custom CSS classes with the `className` prop, developers can easily create visually appealing cards with minimal effort.

To use the `Card` component, follow these steps:

1. Import the `Card` component into the file where you want to use it:

```jsx
import Card from './shared/Card';
```

2. Use the `Card` component to wrap the content you want to display in the card:

```jsx
<Card className='custom-card'>
  {/* Your card content goes here */}
</Card>
```

In the example above, we're using the `Card` component and passing a custom CSS class name `'custom-card'` using the `className` prop. The content you want to display inside the card should be placed between the opening and closing tags of the `Card` component.

Feel free to customize the `className` prop to match your desired styling.

- If you open the React Devtools, you will see the component tree with `App` as the parent component and `FeedbackItem` and `Header` as the children components of the `App` component. You will also see the props passed to `Header` and the state used in `FeedbackItem` in the React Devtools.

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
