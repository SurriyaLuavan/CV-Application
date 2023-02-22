import React from "react";
import EducationPreview from "./EducationPreview";
import EducationEdit from "./EducationEdit";
import { useState } from "react";

const EducationList = ({ id, onRemove }) => {
  const [eduInfo, setEduInfo] = useState({
    school: "",
    level: "",
    field: "",
    studyFrom: "",
    studyTo: "",
  });
  const [preview, setPreview] = useState(false);
  const [eduComplete, setEduComplete] = useState(false);

  function handleStatus(e) {
    setEduComplete(e.target.checked);
  }

  function handleChange(e) {
    setEduInfo((preVal) => ({ ...preVal, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPreview(true);
    if (eduComplete)
      setEduInfo((preVal) => ({ ...preVal, studyTo: "In Progress" }));
  }

  function handleEdit() {
    setPreview(false);
  }

  return (
    <div className="info-container">
      {preview ? (
        <EducationPreview eduInfo={eduInfo} onEdit={handleEdit} />
      ) : (
        <EducationEdit
          id={id}
          eduInfo={eduInfo}
          eduComplete={eduComplete}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleStatus={handleStatus}
          onRemove={onRemove}
        />
      )}
    </div>
  );
};

export default EducationList;
