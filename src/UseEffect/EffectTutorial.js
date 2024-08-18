import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, []);

  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default EffectTutorial;

/*

import React, { useEffect, useState } from "react";
// React: JavaScript library for building user interfaces
// useEffect: Hook for performing side effects in function components
// useState: Hook for adding state to function components
// Importing necessary React features for this component

import axios from "axios";
// axios: Promise-based HTTP client for making requests
// Imported to make API calls

function EffectTutorial() {
// EffectTutorial: Defines a functional React component
// Creates the main component for this tutorial

  const [data, setData] = useState("");
  // useState: Initializes a state variable with a setter function
  // Creates 'data' state to store email, initially an empty string

  const [count, setCount] = useState(0);
  // useState: Initializes another state variable with a setter function
  // Creates 'count' state to track button clicks, initially 0

  useEffect(() => {
  // useEffect: Performs side effects in functional components
  // Sets up an effect to run after component mounts

    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      // axios.get: Sends a GET request to the specified URL
      // Fetches data from the JSONPlaceholder API

      .then((response) => {
      // .then: Handles the successful response from the API
      // Processes the fetched data

        setData(response.data[0].email);
        // setData: Updates the 'data' state
        // Sets 'data' to the email from the first comment

        console.log("API WAS CALLED");
        // console.log: Outputs a message to the console
        // Logs when the API call is completed
      });
  }, []);
  // [], empty dependency array: Specifies when the effect should run
  // Ensures the effect runs only once, after initial render

  return (
    <div>
      Hello World
      <h1>{data}</h1>
      // {data}: Displays the fetched email data
      
      <h1>{count}</h1>
      // {count}: Displays the current count state

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      // onClick: Event handler for button clicks
      // setCount: Updates the 'count' state
      // Increments count by 1 on each button click
    </div>
  );
}

export default EffectTutorial;
// export default: Makes EffectTutorial available for import elsewhere


Initial trigger and operations:

1. Initial Trigger: Component Mount
   The initial trigger for code execution is the component mounting. 
   This is evident from the empty dependency array `[]` in the `useEffect` hook.

2. Operations:
   a. When the component mounts, the `useEffect` hook runs.
   b. Inside `useEffect`, an axios GET request is made to fetch comments from the API.
   c. When the API responds, the email from the first comment is extracted and stored in the `data` state using `setData`.
   d. "API WAS CALLED" is logged to the console.
   e. The component renders, displaying "Hello World", the fetched email (`data`), and the initial count (0).
   f. After initial render, the button becomes interactive. Each click increments the `count` state, triggering a re-render with the updated count value.

Note that the API call only happens once when the component mounts, while the button can be clicked multiple times to update the count independently.


*/
