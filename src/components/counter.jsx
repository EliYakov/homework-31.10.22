import { useState } from "react";

const Counter = ({
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  initial = 0,
  steps = 1,
}) => {
  const [counter, setCounter] = useState(initial);
  const add = () => {
    setCounter((counter) => counter + 1);
  };

  const Sub = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <>
      <button onClick={add} style={{ background: "green" }}>
        Add
      </button>
      <div>{counter}</div>
      <button onClick={Sub} style={{ background: "red" }}>
        Remove
      </button>
    </>
  );
};

export default Counter;
