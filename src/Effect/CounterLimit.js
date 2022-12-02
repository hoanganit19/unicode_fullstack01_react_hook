import React, { useState, useEffect, useLayoutEffect } from "react";

export default function CounterLimit() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
    // if (count === 5) {
    //   setCount(1);
    // }
  };

  //   useEffect(() => {
  //     console.log(count);
  //     if (count === 5) {
  //       setCount(1);
  //     }
  //   }, [count]);

  useLayoutEffect(() => {
    console.log(count);
    if (count === 5) {
      setCount(1);
    }
  }, [count]);

  console.log("re-render");

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
