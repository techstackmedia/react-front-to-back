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

## Installation

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/techstackmedia/react-front-to-back`
2. Navigate to the project directory: `cd react-front-to-back`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`

## Usage

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