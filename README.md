# Custom Component Conditional Styles - Card

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

In the custom `Card` component, there are two ways to conditionally apply classes and styles based on the value of the `reverse` prop:

1. **Conditional Classes (Commented):**

```jsx
const Card = ({ children, reverse }) => {
  // const classes = `card ${reverse && 'reverse'}`;
  // return <div className={classes}>{children}</div>;
  // The above code uses a template literal to conditionally create a class name 'card reverse' if the `reverse` prop is truthy, and just 'card' if it is falsy. This approach dynamically adds the 'reverse' class to the 'card' class when the `reverse` prop is true. However, it is commented out, and the second approach using inline styles is used instead.
};
```

2. **Conditional Styles (Using Inline Styles):**

```jsx
const Card = ({ children, reverse }) => {
  return (
    <div
      className='card'
      style={{
        backgroundColor: reverse ? 'rgba(0, 0, 0, 0.4)' : undefined,
        color: reverse ? '#fff' : undefined,
      }}
    >
      {children}
    </div>
  );
};
```

In this approach, instead of using a class, the component uses inline styles to conditionally apply the background color and text color based on the `reverse` prop. When the `reverse` prop is true, the background color is set to `'rgba(0, 0, 0, 0.4)'` (a semi-transparent black color), and the text color is set to `'#fff'` (white color). When the `reverse` prop is falsy, no specific background or text color is applied, allowing the default styling to take effect.

**PropTypes Explanation:**

- For the `Card` component, the `children` prop is defined as `PropTypes.node.isRequired`, indicating that the component expects child elements to be passed to it.

- The `reverse` prop is also defined as `PropTypes.bool`, indicating that it expects a boolean value. The `Card` component has a default prop value of `false` for the `reverse` prop, so if no `reverse` prop is provided when using the component, it will default to `false`.

**FeedbackItem PropTypes Explanation:**

- For the `FeedbackItem` component, the `item` prop is defined using `PropTypes.shape`. It expects an object with `rating` and `text` properties, both of which are defined with their respective PropTypes (`PropTypes.number.isRequired` for `rating` and `PropTypes.string.isRequired` for `text`). The `isRequired` modifier indicates that both `rating` and `text` must be provided and must be of the specified types.

By using PropTypes, you ensure that the expected data types and shapes of props are provided to the components, making your code more reliable and less prone to bugs related to incorrect data types or missing props.

## License

Include the license under which you are releasing your project. For example:

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
