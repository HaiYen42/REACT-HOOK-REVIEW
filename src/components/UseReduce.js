import React, { useReducer } from "react";
import { Reducer } from "react";

export default function UseReduce() {
  //useReducer
  //1. Init State: 0
  //2. Action: Up (state +1)/ Down (state-1)
  //3. Reducer
  //4. Dispatch

  //1. initState
  const initState = 2;
  //2.ACTION
  const ACTION_UP = "up";
  const ACTION_DOWN = "down";
  //3.Reducer
  const reducer = (state, action) => {
    switch (action) {
      case ACTION_UP:
        return state + 1;
      case ACTION_DOWN:
        return state - 1;
      default:
        throw new Error("invalid");
    }
  };

  //4. Dispatch
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <>
      <h1>Use Reducer</h1>
      <h3>{count}</h3> <br />
      <button onClick={() => dispatch(ACTION_UP)}>Up</button>
      <button onClick={() => dispatch(ACTION_DOWN)}>Down</button>
    </>
  );
}
