# Car Management Application

## Overview

The Car Management Application is a React-Redux-based web app that allows users to add, search, list, and calculate the total value of cars. This application helps manage car data with functionalities to add new cars, search existing cars, display a list of cars, and calculate their total cost. The app is designed to be user-friendly, responsive, and efficient in managing car-related data.

## Key Technologies

- **React**
- **Redux Toolkit**: A powerful state management library that simplifies the process of managing complex application state using slices and reducers.
- **React-Redux**: A library that integrates Redux with React components, allowing them to access the state and dispatch actions.
- **Bulma CSS**: A modern CSS framework that provides a flexible, clean, and responsive design for the application.
- **JavaScript (ES6+)**

## Project Structure

### Main Entry Point

- **`index.js`**: The main entry point where the React app is rendered into the DOM. It wraps the application in the Redux `Provider` to connect the app with the Redux store.

### Core Components

- **App Component**:
  - Serves as the main layout of the application.
  - Integrates all the other components to create a cohesive user interface.
  - Utilizes Bulma CSS classes for fluid and responsive design.

- **CarForm Component**:
  - Allows users to add new cars by entering the car's name and cost.
  - Dispatches actions to update form state and add the car to the list.

- **CarSearch Component**:
  - Provides a search input to filter cars by name.
  - Updates the search term in the Redux state to display filtered results.

- **CarList Component**:
  - Displays a list of cars based on the search term.
  - Highlights cars that match the current search and allows users to delete cars from the list.

- **CarValue Component**:
  - Calculates and displays the total cost of all cars currently listed that match the search term.

### State Management

- **Redux Store**:
  - Manages the global state of the application using slices for cars and form data.
  - Uses Redux Toolkit's `configureStore` to set up the reducers and middleware.

- **Slices**:
  - **Car Slice**:
    - Handles actions related to adding, removing, and searching cars.
    - Manages the car data and search term in the Redux state.
  - **Form Slice**:
    - Manages form inputs for car name and cost.
    - Resets the form state upon successfully adding a car.

### Key Features

- **Add Car**:
  - Users can add a car by entering the name and cost.
  - The car is added to the list and displayed with its details.

- **Search Cars**:
  - Users can search cars by name.
  - The list is filtered based on the search term, highlighting matching entries.

- **List Cars**:
  - Displays all cars that match the current search term.
  - Provides a delete button to remove cars from the list.

- **Calculate Total Value**:
  - Displays the total cost of all cars currently listed, considering the search term filter.

## How the Application Works

1. **Application Launch**:
   - The app initializes with a form to add cars, a search input, and displays the list of cars and total value.

2. **Adding Cars**:
   - Users can enter a car's name and cost, then click "Submit" to add the car to the list.

3. **Searching for Cars**:
   - The search input allows users to filter the car list based on the entered search term.

4. **Managing the Car List**:
   - Cars are displayed in a list format. Users can delete cars from the list if needed.

5. **Calculating the Total Cost**:
   - The application calculates and displays the total cost of all cars that match the search term.

## Conclusion

The Car Management Application provides a straightforward and efficient way to manage car data using React and Redux Toolkit. Its user-friendly interface, combined with robust state management, allows for easy addition, searching, and calculation of car values, making it a practical tool for managing a list of cars.

