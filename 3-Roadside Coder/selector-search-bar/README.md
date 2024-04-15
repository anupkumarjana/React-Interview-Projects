# Multi-Selector Search Bar

## Overview:

This React component implements a multi-selector search bar that allows users to search for and select multiple users. Selected users are displayed as pill components above the search bar, and users can be removed by clicking on the respective pills.

## Features:

- **Search Bar:** Users can input search terms, and suggestions are displayed dynamically based on the input.

- **Suggestions:** As users type in the search bar, suggestions are fetched from a dummy API (https://dummyjson.com/users/search).

- **Selection:** Users can select a suggestion by clicking on it. The selected user is displayed as a pill above the search bar.

- **Removal:** Selected users can be removed by clicking on their respective pills. Backspace can also be used to remove the last selected user.

## Usage:

1. **Installation:**

   - Clone the repository.
   - Navigate to the project directory.
   - Run `npm install` to install dependencies.

2. **Running the App:**

   - Run `npm start` to start the development server.
   - Open your browser and go to `http://localhost:3000` to view the multi-selector search bar.

3. **Functionality:**
   - Start typing in the search bar to see dynamic suggestions.
   - Click on a suggestion to select a user. The selected user will appear as a pill above the search bar.
   - Selected users can be removed by clicking on their respective pills or using the Backspace key.

## Component Structure:

- **SearchBar Component:**

  - Manages the state for the search term, suggestions, selected users, and selected users set.
  - Uses the `useEffect` hook to fetch suggestions from the dummy API based on the search term.
  - Provides methods to handle selecting and removing users.

- **Pills Component:**
  - Represents the pill component for a selected user.
  - Displays the user's image and name.
  - Allows users to remove the selected user by clicking on the pill.

## Additional Notes:

- This solution uses React Hooks (useState, useRef, useEffect).
- The selected users are stored in an array (`selectedUsers`) and a set (`selectedUsersSet`) for efficient removal.
- CSS styles are applied to create a visually appealing and responsive user interface.

Feel free to reach out if you have any questions or suggestions for improvement!
