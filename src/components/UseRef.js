import React, { useRef } from "react";
import { useState } from "react";

export default function UseRef() {
  const [count, setCount] = useState(60);
  let timeId = useRef();
  console.log(timeId.current);

  const handleStart = () => {
    timeId.current = setInterval(() => {
      setCount((preCount) => preCount - 1);
    }, 1000);
    console.log("start---> ", timeId.current);
  };
  const handleStop = () => {
    console.log("stop--->", timeId.current);
    clearInterval(timeId.current);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
