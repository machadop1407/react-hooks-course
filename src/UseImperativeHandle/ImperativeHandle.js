import React, { useRef } from "react";
import Button from "./Button";
// These are imports. 
// useRef is a hook that provides a way to persist values between renders.
// useRef will be used to create a ref, and the Button component is imported from the previous file.

function ImperativeHandle() {
  // This declares a functional component named ImperativeHandle.
  // This component will use the Button component and demonstrate the use of imperative handle.
  
  const buttonRef = useRef(null);
  // useRef creates a mutable ref object whose .current property is initialized to the passed argument (null).
  // It's used to create a ref that will be passed to the Button component.
  
  return (
    // This is the JSX returned by the ImperativeHandle component. It includes an event handler and ref passing.
    // It renders a button that, when clicked, calls the alterToggle method on the Button component. 
    // It also renders the Button component, passing the buttonRef to it.
    
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandle;
// This statement exports the ImperativeHandle component as the default export of this module.
// It allows other files to import this component.
