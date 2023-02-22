import React from "react";

const ExperiencePreiew = ({ expInfo, onEdit }) => {
  return (
    <div className="preview-container">
      <p>Company Name: {expInfo.company}</p>
      <p>Position Title: {expInfo.position} Degree</p>
      <p>
        Duration: {expInfo.workFrom} - {expInfo.workTo}
      </p>
      <button type="button" onClick={onEdit}>
        Edit
      </button>
    </div>
  );
};

export default ExperiencePreiew;
