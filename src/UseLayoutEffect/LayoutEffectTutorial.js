import { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div className="App">
      <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default LayoutEffectTutorial;

/*

The component uses useRef to create a reference to the input element.
useLayoutEffect is used to log the initial value of the input synchronously after render.
useEffect is used to change the input's value asynchronously after the browser paint.
The input element is rendered with an initial value of "PEDRO" and styled inline.

useLayoutEffect runs synchronously immediately after React has performed all DOM mutations.
useEffect runs asynchronously after the browser has painted the updates.
This sequence demonstrates how useLayoutEffect can be used for measurements or updates 
that need to happen before the browser paints, preventing potential visual flickers.

In real-world applications, directly manipulating DOM elements (as done here with inputRef.current.value) 
should generally be avoided in favor of React's declarative state management.

*/
