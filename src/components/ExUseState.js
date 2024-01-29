import React, { Component } from "react";
import { useState } from "react";

export default function ExUseState() {
  const [count, setcount] = useState(0);
  const arr = [1, 3, 5, 7, 9];
  const [list, setlist] = useState(arr);
  const handleRandom = () => {
    setlist([...list, parseInt(Math.random() * 10)]);
  };
  //Khởi tạo Object State

  const [objState, setobjState] = useState({ count: 0, list: arr });
  console.log(objState.list);
  const handleRandomObj = () => {
    setobjState({
      count: objState.count,
      list: [...objState.list, parseInt(Math.random() * 10)],
    });
  };

  return (
    <div>
      {/* <h1>useState Array</h1>
      <h3>{count}</h3> <br />
      <button onClick={() => setcount(count + 1)}>Up</button>
      <button onClick={() => setcount(count - 1)}>Down</button>
      <h1>Array</h1>
      <h3>{list.toString()}</h3>
      <button onClick={handleRandom}>Random</button> */}
      <h1>useState Object</h1>
      <h3>{objState.count}</h3> <br />
      <button
        onClick={() =>
          setobjState({ count: objState.count + 1, list: objState.list })
        }
      >
        Up
      </button>
      <button
        onClick={() =>
          setobjState({ count: objState.count - 1, list: objState.list })
        }
      >
        Down
      </button>
      <h1>Array</h1>
      <h3>{objState.list.toString()}</h3>
      <button onClick={handleRandomObj}>Random</button>
    </div>
  );
}
