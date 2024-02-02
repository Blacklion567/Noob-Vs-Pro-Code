import { useState } from "react";

function AdvanceUpdateState() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
    console.log(count);
  }

  function decrementCount() {
    setCount(count - 1);
    console.log(count);
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      {count}
      <button onClick={incrementCount}>+</button>
    </div>
  );
}


export default AdvanceUpdateState;
