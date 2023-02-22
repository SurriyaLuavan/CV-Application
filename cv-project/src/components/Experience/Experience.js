import React, { useState } from "react";
import uuid from "react-uuid";
import ExperienceList from "./ExperienceList";
const Experience = () => {
  const [expList, setExpList] = useState([]);

  function handleAdd(e) {
    setExpList([...expList, { id: uuid() }]);
  }

  function handleRemove(id) {
    setExpList(expList.filter((item) => item.id !== id));
  }
  return (
    <>
      <h2>Experience</h2>
      {expList.length > 0
        ? expList.map((item) => {
            return (
              <ExperienceList
                key={item.id}
                id={item.id}
                onRemove={handleRemove}
              />
            );
          })
        : null}

      <button onClick={handleAdd}>Add</button>
    </>
  );
};

export default Experience;
