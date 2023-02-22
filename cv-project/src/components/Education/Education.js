import React, { useState } from "react";
import EducationList from "./EducationList";
import uuid from "react-uuid";

const Education = () => {
  const [eduList, setEduList] = useState([]);

  function handleAdd(e) {
    setEduList([...eduList, { id: uuid() }]);
  }

  function handleRemove(id) {
    setEduList(eduList.filter((item) => item.id !== id));
  }
  return (
    <>
      <h2>Educational Background</h2>

      {eduList.length > 0
        ? eduList.map((item) => {
            return (
              <EducationList
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

export default Education;
