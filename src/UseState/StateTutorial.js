import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("This information will be changed");
  const [counter, setCounter] = useState(0);

  let updateUiInformation = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <div>
        <input placeholder="enter something..." onChange={updateUiInformation} />
        {inputValue}
      </div>
      <div>
        <button onClick={() => setCounter(counter + 1)}>Click Me {counter}</button>
      </div>
    </div>
  );
};

export default StateTutorial;
