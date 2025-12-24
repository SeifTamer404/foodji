# Foodji (React)

This project is a **React food ordering application** built as part of my learning journey while studying modern React concepts and state management techniques.

The focus of this project is not only building a functional app, but also applying **real-world React patterns** such as global state management, custom hooks, side effects, and form-based backend communication.

---

## Project Overview

The application fetches a list of meals from a backend API and displays them on the frontend.  
Users can add meals to a shopping cart, review their order, see the total price, and complete a checkout process.

During checkout, user data and selected meals are sent to the backend using a POST request and stored in the database.

---

## Application Flow

1. Meals are fetched from the backend.
2. Meals are displayed on the frontend.
3. Each meal has an **Add to Cart** button.
4. Selected meals are added to the cart.
5. The cart displays:
    - Selected meals
    - Meal quantities
    - Total price
6. The user proceeds to **Checkout**.
7. A checkout form is submitted as a POST request.
8. Order data (customer information + selected meals) is saved in the database.

---

## State Management

This project heavily focuses on **state management in React**, using multiple approaches together.

### Context API

Two global contexts are implemented:

- **Cart Context**
    - Manages cart items and quantities
    - Handles add and remove logic
    - Calculates the total price
    - Uses `useReducer` for predictable and centralized state updates

- **User Progress Context**
    - Manages UI flow and user progress
    - Controls opening and closing the cart and checkout steps
    - Helps coordinate user navigation inside the app

---

## React Hooks Used

The project uses several React hooks in practical scenarios:

- `useState`
- `useReducer`
- `useEffect`
- `useCallback`
- `useActionState`

All hooks are used as part of real application logic, not just for demonstration purposes.

---

## Custom Hooks

A reusable **custom HTTP hook** is implemented to handle all HTTP requests.

### useHttp Hook Responsibilities

- Sending GET and POST requests
- Managing loading and error states
- Reusing HTTP logic across the application
- Keeping components clean and focused

This hook is used for:
- Fetching meals data
- Submitting checkout orders

---

## Forms & Backend Integration

- The checkout process is handled using **form actions**.
- The form submits data using a **POST request** to the backend.
- Submitted data includes:
    - Customer information
    - Selected meals
- The backend stores the order data in the database.

---

## UI & Reusability

Reusable UI components are implemented to keep the application modular and maintainable, such as:
- Buttons
- Inputs
- Modals

This approach improves readability, scalability, and code organization.

---

## Technologies Used

- React
- Context API
- React Hooks
- Custom Hooks
- Fetch API
- Backend API (for meals and orders)
- CSS

---

## Learning Objectives

This project was built to practice and understand:

- State management strategies in React
- Global state using Context API
- Side effects and data fetching
- Custom hooks for HTTP requests
- Form handling and POST requests
- Clean code structure and separation of concerns

---

## Notes

This is an **educational project** created during my React learning journey and focuses on applying best practices and core React concepts in a real-world style application.
