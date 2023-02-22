import React from "react";

const InfoPreview = ({ info, onEdit }) => {
  const phone = info.phone.toString();
  const numberFormat = `(${phone.substring(0, 3)}) ${phone.substring(
    3,
    6
  )}-${phone.substring(6)}`;

  return (
    <div className="preview-container">
      <p>First Name: {info.firstname}</p>
      <p>Last Name: {info.lastname}</p>
      <p>Email: {info.email}</p>
      <p>Number: {numberFormat}</p>
      <button type="button" onClick={onEdit}>
        Edit
      </button>
    </div>
  );
};

export default InfoPreview;
