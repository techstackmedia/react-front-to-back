# Uninstall `react-icons` library

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

You can uninstall the `react-icons` package from your terminal using the following commands:

```bash
npm un react-icons
```

or

```bash
yarn remove react-icons
```

Instead of using the `react-icons` package, the code below demonstrates how to use custom SVG images `closeIcon.svg` and `editIcon.svg` in the `FeedbackItem.jsx` file. The import statement for `FaEdit` and `FaTimes` from `react-icons/fa` has been removed, and the SVG images are imported into the `FeedbackItem` file as follows:

```jsx
import closeIcon from '../images/closeIcon.svg';
import editIcon from '../images/editIcon.svg';
```

With this setup, the `FeedbackItem` component displays the SVG images using the `img` tag instead of using `react-icons`. Here is the updated code for the `FeedbackItem` component:

```jsx
import closeIcon from '../images/closeIcon.svg'
import editIcon from '../images/editIcon.svg'

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={handleDeleteButton} className='close'>
        <img src={closeIcon} alt='close icon' width={16} />
      </button>
      <button onClick={handleEditButton} className='edit'>
        <img src={editIcon} alt='edit icon' width={16} />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
```

> **Note:** It is optional to uninstall the `react-icons` package. The removal is shown only to demonstrate how to import and use custom SVG images (or any other image formats) directly in your component without relying on any external library like `react-icons`.

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

Optionally, avoid using the `react-icons` package and instead, import and use custom SVG images or any other image formats directly in your component without relying on any external library.

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
