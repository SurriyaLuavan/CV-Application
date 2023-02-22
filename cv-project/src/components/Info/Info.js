import React from "react";
import InfoEdit from "./InfoEdit";
import InfoPreview from "./InfoPreview";
import "./Info.css";
import { useState } from "react";

const Info = () => {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const [preview, setPreview] = useState(false);

  function handleInput(e) {
    setUserInfo((preVal) => ({ ...preVal, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPreview(true);
  }

  function handleEdit() {
    setPreview(false);
  }

  return (
    <div className="info-container">
      <h2>General Information</h2>
      {preview ? (
        <InfoPreview info={userInfo} onEdit={handleEdit} />
      ) : (
        <InfoEdit
          info={userInfo}
          onInput={handleInput}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Info;
