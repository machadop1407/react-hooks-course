# React Context Tutorial

This project demonstrates the usage of React Context for state management across components without prop drilling.

## Components

1. `ContextTutorial`: The main component that provides the context.
2. `Login`: A component with an input field to update the username.
3. `User`: A component that displays the current username.

### ContextTutorial

This is the main component that sets up the AppContext and manages the username state. It wraps the child components (Login and User) with the AppContext.Provider.

### Login

This component renders an input field where users can enter a username. It uses the useContext hook to access the setUsername function from AppContext.

### User

This component displays the current username. It uses the useContext hook to access the username value from AppContext.

## How it Works

1. The ContextTutorial component creates a state for the username and provides it to child components via AppContext.Provider.
2. The Login component allows users to input a username, which updates the state in ContextTutorial.
3. The User component displays the current username, which updates automatically when the state changes.

## Key Concepts

- [React Context](https://react.dev/reference/react/createContext): For sharing data between components without explicit prop passing.
- [useState Hook](https://react.dev/reference/react/useState): For adding state to functional components.
- [useContext Hook](https://react.dev/reference/react/useContext): For consuming context in child components.

## Operations

1. **ContextTutorial Component Mount**:
   - Initializes `username` state with an empty string.
   - Wraps child components with `AppContext.Provider`, passing down `username` state and `setUsername` function.

2. **Login Component Mount**:
   - Accesses `setUsername` function from AppContext.
   - Renders an input field for username entry.

3. **User Component Mount**:
   - Accesses `username` value from AppContext using `useContext`.
   - Displays the current username (initially empty).

4. **User Input in Login Component**:
   - `onChange` event triggers when user types in the input field.
   - Calls `setUsername` with the new input value.
   - Updates `username` state in `ContextTutorial` component.

5. **State Update in ContextTutorial**:
   - `AppContext.Provider` value updates.
   - Triggers re-render of Login and User components.

6. **User Component Re-render**:
   - Receives updated `username` value from context.
   - Displays updated username value.

## Usage

To use this example:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the app with `npm start`.

## Further Reading

- [React Documentation](https://react.dev/learn)
- [Using the Context API in React](https://react.dev/learn/passing-data-deeply-with-context)
- [Hooks API Reference](https://react.dev/reference/react)

