import { useState, useEffect } from "react";

function ProUpdateState() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(currCount => currCount + 1);
  }

  function decrementCount() {
    setCount(currCount => currCount - 1);
  }

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      {count}
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default ProUpdateState;
