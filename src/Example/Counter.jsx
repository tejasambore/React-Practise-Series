import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  let increment = () => {
    setCounter((prev) => prev + 1);
  };

  let decrement = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}
