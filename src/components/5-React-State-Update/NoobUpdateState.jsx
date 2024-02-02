import { useState } from "react";

export default function NoobUpdateState() {
  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    console.log(count);
  }

  function decrementCount() {
    count = count - 1;
    console.log(count);
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}
