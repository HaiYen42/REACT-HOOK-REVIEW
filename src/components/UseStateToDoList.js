import React, { useState } from "react";
import Content from "./Content";

export default function UseStateToDoList() {
  const [jobs, setJobs] = useState(() => {
    const storageJob = JSON.parse(localStorage.getItem("jobs"));
    if (storageJob == null || storageJob == "") {
      return [];
    }
    console.log(storageJob);
    return storageJob;
  });
  const [job, setJob] = useState("");
  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };

  const handleDelete = (index) => {
    const temp = [...jobs];
    temp.splice(index, 1);
    setJobs(temp);
    localStorage.setItem("jobs", JSON.stringify(temp));
  };

  //Mount/Unmount
  const [show, setShow] = useState(false);

  return (
    <>
      <h2>UseState To Do List</h2>
      <div style={{ textAlign: "center" }}>
        <input value={job} onChange={(e) => setJob(e.target.value)} />
        <button onClick={handleSubmit}>Add</button>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              {job} {"  "}
              <button onClick={() => handleDelete(index)}>X</button>
            </li>
          ))}
        </ul>
        <h2>Mount-Unmount</h2>
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => {
              setShow(!show);
            }}
          >
            Toogle
          </button>
          { show && <Content />}
        </div>
      </div>
    </>
  );
}
