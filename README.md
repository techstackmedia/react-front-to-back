# Custom Button Component

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The `Button` component is used inside the `FeedbackForm` component. The `Button` component is a custom component that accepts several props (`children`, `version`, `type`, and `isDisabled`). These props are passed from the `Button` component to the `FeedbackForm` component, and they can be used to customize the appearance and behavior of the button.

Let's break down how the props are used:

1. `children`: This prop is a special prop in React, representing the content of the `Button` component when it is used as a JSX element. In this case, the content of the `Button` component is passed as the text inside the button. For example, in the `FeedbackForm` component, the `Button` component is used as `<Button>Send</Button>`, so the text "Send" becomes the `children` prop of the `Button` component.

2. `version`: This prop is used to customize the appearance of the button by applying a specific CSS class. In the `Button` component, the `version` prop is used to dynamically create the CSS class name for the button. For example, if `version` is not provided, the default value `'primary'` is used, and the resulting CSS class would be `'btn btn-primary'`. If the `version` prop is set to `'secondary'`, the CSS class would be `'btn btn-secondary'`. In the `FeedbackForm` component, the `Button` component is used without explicitly passing the `version` prop, so it uses the default value and gets the `'btn-primary'` CSS class.

3. `type`: This prop is used to specify the type of the button, which determines its behavior. The `type` prop is passed directly from the `Button` component to the underlying HTML `button` element. In the `FeedbackForm` component, the `Button` component is used with the `type='submit'`, so the button behaves as a submit button inside the form.

4. `isDisabled`: This prop is used to control whether the button is disabled or not. If the `isDisabled` prop is set to `true`, the button is disabled; otherwise, it remains enabled. In the `Button` component, the `isDisabled` prop is used to set the `disabled` attribute of the underlying HTML `button` element. In the `FeedbackForm` component, the `Button` component is used without explicitly passing the `isDisabled` prop, so it uses the default value `false`, and the button remains enabled.

In summary, the `Button` component is a customizable button that can be used in various places throughout the application. In the `FeedbackForm` component, it is used as a "Send" button with the default version, default type ('button'), and not disabled by default. You can customize the button further by passing appropriate props when using the `Button` component elsewhere in your application.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

The `Button` component in the `FeedbackForm` is used as follows:

```jsx
<Button>Send</Button>
```

Let's break down how the props are used in this context:

1. `children`: The text "Send" becomes the `children` prop of the `Button` component.

2. `version`: The default value of `'primary'` is used for the `version` prop, resulting in the CSS class `'btn btn-primary'` being applied to the button.

3. `type`: The `type` prop is set to `'button'`, making the button behave as a regular button inside the form.

4. `isDisabled`: The default value of `false` is used for the `isDisabled` prop, so the button remains enabled.

Overall, the `Button` component is used as a "Send" button with a primary style, behaving as a regular button inside the form and not disabled. However, you can customize its appearance and behavior by passing different props when using the `Button` component in other parts of the application.

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
