import React from "react";

const EducationPreview = ({ eduInfo, onEdit }) => {
  // const fromDate = new Date(eduInfo.studyFrom.toString());
  // const toDate = new Date(eduInfo.studyTo.toString());

  return (
    <div className="preview-container">
      <p>Name of Institution: {eduInfo.school}</p>
      <p>Level: {eduInfo.level} Degree</p>
      <p>Field of Study: {eduInfo.field}</p>
      <p>
        Duration: {eduInfo.studyFrom} - {eduInfo.studyTo}
      </p>
      <button type="button" onClick={onEdit}>
        Edit
      </button>
    </div>
  );
};

export default EducationPreview;
