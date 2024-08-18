import React, { 
  useState, useReducer, useContext, useRef, useImperativeHandle,
  useEffect, useLayoutEffect, useInsertionEffect, useMemo, useCallback,
  useTransition, useDeferredValue, useDebugValue, useId, useSyncExternalStore
} from 'react';

// Assume these are defined elsewhere
import { ThemeContext, createConnection, filterTodos, expensiveCalculation, subscribeToStore } from './helpers';

const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: throw new Error();
  }
}

const AllHooksDemo = React.forwardRef((props, ref) => {
  // useState
  const [text, setText] = useState('');

  // useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // useContext
  const theme = useContext(ThemeContext);

  // useRef
  const inputRef = useRef(null);

  // useImperativeHandle
  useImperativeHandle(ref, () => ({
    focusInput: () => inputRef.current?.focus()
  }));

  // useEffect
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, []);

  // useLayoutEffect
  useLayoutEffect(() => {
    // Measure layout
    console.log('Layout effect ran');
  }, []);

  // useInsertionEffect
  useInsertionEffect(() => {
    // Insert dynamic CSS
    const style = document.createElement('style');
    style.innerHTML = `body { background-color: ${theme.background}; }`;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, [theme]);

  // useMemo
  const expensiveResult = useMemo(() => expensiveCalculation(state.count), [state.count]);

  // useCallback
  const memoizedCallback = useCallback(() => {
    console.log('Callback called with count:', state.count);
  }, [state.count]);

  // useTransition
  const [isPending, startTransition] = useTransition();

  // useDeferredValue
  const deferredText = useDeferredValue(text);

  // useDebugValue
  useDebugValue(text, text => `Current text: ${text}`);

  // useId
  const uniqueId = useId();

  // useSyncExternalStore
  const storeState = useSyncExternalStore(subscribeToStore, () => store.getState());

  // Event handlers
  const handleTextChange = (e) => {
    setText(e.target.value);
    startTransition(() => {
      // Simulate expensive operation
      for (let i = 0; i < 1000000; i++) {}
    });
  };

  return (
    <div>
      <input ref={inputRef} value={text} onChange={handleTextChange} id={uniqueId} />
      <p>Deferred text: {deferredText}</p>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <p>Expensive calculation result: {expensiveResult}</p>
      <p>Store state: {JSON.stringify(storeState)}</p>
      {isPending && <p>Updating...</p>}
    </div>
  );
});

export default AllHooksDemo;

/*

Here's a breakdown of how each hook is used:

useState: Manages the 'text' state.
useReducer: Manages a 'count' state with increment/decrement actions.
useContext: Accesses a theme from a ThemeContext.
useRef: Creates a reference to the input element.
useImperativeHandle: Exposes a 'focusInput' method to parent components.
useEffect: Simulates connecting/disconnecting to an external system.
useLayoutEffect: Logs a message after layout calculations.
useInsertionEffect: Dynamically inserts CSS based on the theme.
useMemo: Memoizes the result of an expensive calculation.
useCallback: Memoizes a callback function.
useTransition: Marks state updates as transitions for better performance.
useDeferredValue: Creates a deferred version of the text input.
useDebugValue: Provides a debug label for custom hooks (though this isn't a custom hook, it's used for demonstration).
useId: Generates a unique ID for the input element.
useSyncExternalStore: Subscribes to an external store.
useActionState: This hook is not included in the example.

Note that this component is overly complex and not practical for real-world use. It's designed solely to demonstrate the usage of all these hooks in one place. In a real application, you would typically use only the hooks necessary for your specific use case, and often in separate components or custom hooks.


*/
