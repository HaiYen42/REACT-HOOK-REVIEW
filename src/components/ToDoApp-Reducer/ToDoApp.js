import React, { useRef } from "react";
import { useReducer } from "react";
import reducer, { initState } from "./reducer";
import { addJob, setJob, deleteJob } from "./action";

export default function ToDoApp() {
  //4. Dispatch
  const [state, dispatch] = useReducer(reducer, initState);

  const { job, jobs } = state;
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };
  const inputRef = useRef();

  return (
    <div style={{ padding: "0 20px" }}>
      <h3>ToDo</h3>
      <input
        ref={inputRef}
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
        placeholder="Enter todo...."
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {" "}
            {job}{" "}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
