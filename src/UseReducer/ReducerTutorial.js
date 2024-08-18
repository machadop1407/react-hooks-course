import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;

/*
what steps happen after Button Click:-

Button Click Event:
The user clicks the button labeled "Click Here". This triggers the onClick event handler defined for the button.
<button onClick={() => { ... }}>

Dispatching the First Action:
Inside the onClick handler, the first action is dispatched to increment the count. The dispatch function is called with an action object of type "INCREMENT".
dispatch({ type: "INCREMENT" });

Reducer Function Execution (Increment):
The dispatch function invokes the reducer function with the current state and the action { type: "INCREMENT" }.

The reducer evaluates the action type:
It matches the "INCREMENT" case, and the state is updated to increment the count by 1 while keeping showText unchanged.

case "INCREMENT":
  return { count: state.count + 1, showText: state.showText };
  
State Update:
The new state returned from the reducer is set as the current state. For example, if the initial state was { count: 0, showText: true }, the new state becomes { count: 1, showText: true }.

Dispatching the Second Action:
Immediately after the first dispatch, the second action is dispatched to toggle the visibility of the text. The dispatch function is called again, this time with an action object of type "toggleShowText".
dispatch({ type: "toggleShowText" });

Reducer Function Execution (Toggle Show Text):
The dispatch function invokes the reducer function again with the updated state and the action { type: "toggleShowText" }.

The reducer evaluates the action type:
It matches the "toggleShowText" case, and the state is updated to toggle the showText property.
case "toggleShowText":
  return { count: state.count, showText: !state.showText };

State Update:
The new state returned from the reducer is set as the current state. Continuing from the previous example, if the state was { count: 1, showText: true }, the new state becomes { count: 1, showText: false }.

Re-rendering the Component:
After both state updates, React triggers a re-render of the ReducerTutorial component with the new state.
The <h1> element updates to display the new count value.
The conditional rendering checks the showText value. If showText is false, the <p> element ("This is a text") will not be displayed.

Final Render:
The component is now rendered with the updated state, reflecting the changes made by the button click:
The count is incremented.
The text visibility is toggled based on the new showText state.

Summary of what steps happen after Button Click 

User clicks the button.
First action dispatched: { type: "INCREMENT" }.
Reducer updates state: increments count.
Second action dispatched: { type: "toggleShowText" }.
Reducer updates state: toggles showText.
Component re-renders with updated state.
Display the updated count and conditional text.

This flow illustrates the sequence of operations that occur when the button is clicked, highlighting how state changes are managed and how the component responds to user interactions.
*/

