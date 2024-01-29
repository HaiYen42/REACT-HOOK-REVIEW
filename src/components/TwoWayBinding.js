import React, { useState } from "react";
const courses = [
  {
    id: 1,
    name: "HTML, CSS",
  },
  {
    id: 2,
    name: "Javascript",
  },
  {
    id: 3,
    name: "ReactJS",
  },
];

export default function TwoWayBinding() {
  const [checked, setChecked] = useState(2);
  console.log(checked);

  const handleSubmit = () => {};

  return (
    <div style={{ padding: 32 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            name="course"
            checked={checked === course.id}
            onChange={() => {
              setChecked(course.id);
            }}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}
