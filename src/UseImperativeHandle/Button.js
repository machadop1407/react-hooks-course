import React, { forwardRef, useImperativeHandle, useState } from "react";
// These are imports from the React library. forwardRef is used for ref forwarding, 
// useImperativeHandle for customizing the instance value exposed to parent components, and 
// useState for managing component state.
// These imported functions will be used to create a functional component with ref forwarding and 
// state management capabilities.

const Button = forwardRef((props, ref) => {
  // forwardRef is a higher-order component that allows the component to receive a ref and 
  // pass it further down to a child component.
  // It's used here to create a functional component that can receive a ref as a second argument.
  
  const [toggle, setToggle] = useState(false);
  // useState is a React hook that allows functional components to have state. 
  // It returns an array with the current state value and a function to update it.
  // It's used here to create a 'toggle' state variable initialized to false, and a 'setToggle' function to update it.
  
  useImperativeHandle(ref, () => ({
    // useImperativeHandle customizes the instance value that is exposed to parent components when using ref.
    // It's used here to create a method 'alterToggle' that can be called from its parent component, namely, ImperativeHandle 
    // to change the 'toggle' state.
    
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button>Button From Child</button>
      {toggle && <span>Toggle</span>}
      // This is the JSX returned by the component. It uses conditional rendering with the '&&' operator.
      // It renders a button and conditionally renders a span element based on the 'toggle' state.
    </>
  );
});

export default Button;
// Button is Child component
// This statement exports the Button component as the default export of this module.
// It allows other files to import this component.
