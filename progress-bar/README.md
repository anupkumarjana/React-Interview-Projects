# React Interview Question - Checkout Progress Bar

## Question:

You are asked to implement a checkout progress bar component that visually represents the progress of a multi-step process. The process has several steps, and each step is associated with a specific component. The progress bar should have the following features:

1. Display each step with a unique identifier, heading, and associated component.
2. Indicate the current step with a highlighted background and show a checkmark for completed steps.
3. Include a dynamic progress bar that fills as the user progresses through the steps.
4. Provide a "Next" button that advances to the next step until the last step, where it changes to a "Finish" button.

The solution should use React and have a smooth transition effect for the progress bar. The progress bar's width should update gradually when the user moves to the next step.

## Solution:

The provided solution uses React and includes the following features:

- A stateful component (`ProgressBar`) manages the current step and completion status.
- An array (`datas`) defines the steps, each with an ID, heading, and associated component.
- The `calculateBarWidth` function determines the width of the progress bar based on the current step.
- The `handleNext` function updates the current step and marks the process as completed when reaching the last step.
- CSS styling is applied to create a visually appealing and responsive progress bar.

Feel free to review the code in `ProgressBar.js` for more details.

## How to Run:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and go to `http://localhost:3000` to view the progress bar.

## Additional Notes:

- This solution uses React Hooks (useState) for managing state.
- CSS transitions are applied to create a smooth animation effect for the progress bar.

Feel free to reach out if you have any questions or suggestions for improvement!
