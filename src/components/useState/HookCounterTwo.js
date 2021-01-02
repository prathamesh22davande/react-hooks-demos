import React, { useState } from "react";

function HookCounterTwo(props) {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(initialValue)}>Reset</button>
      <button onClick={() => setCount((oldCount) => oldCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((oldCount) => oldCount - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default HookCounterTwo;
