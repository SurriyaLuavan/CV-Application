import React from "react";
import { useState } from "react";
import ExperienceEdit from "./ExperienceEdit";
import ExperiencePreview from "./ExperiencePreiew";

const ExperienceList = ({ id, onRemove }) => {
  const [expInfo, setExpInfo] = useState({
    company: "",
    position: "",
    workFrom: "",
    workTo: "",
  });

  const [preview, setPreview] = useState(false);
  const [expComplete, setExpComplete] = useState(false);

  function handleStatus(e) {
    setExpComplete(e.target.checked);
  }

  function handleChange(e) {
    setExpInfo((preVal) => ({ ...preVal, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPreview(true);
    if (expComplete) setExpInfo((preVal) => ({ ...preVal, workTo: "Present" }));
  }

  function handleEdit() {
    setPreview(false);
  }
  return (
    <div className="info-container">
      {preview ? (
        <ExperiencePreview expInfo={expInfo} onEdit={handleEdit} />
      ) : (
        <ExperienceEdit
          id={id}
          expInfo={expInfo}
          expComplete={expComplete}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleStatus={handleStatus}
          onRemove={onRemove}
        />
      )}
    </div>
  );
};

export default ExperienceList;
