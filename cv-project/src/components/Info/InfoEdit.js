import React from "react";

const InfoEdit = ({ info, onInput, onSubmit }) => {
  return (
    <>
      <form className="edit-container" onSubmit={onSubmit}>
        <label htmlFor="firstname">
          First Name:{" "}
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
            onChange={onInput}
            value={info.firstname}
          />
        </label>
        <label htmlFor="lastname">
          Last Name:{" "}
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
            onChange={onInput}
            value={info.lastname}
          />
        </label>
        <label htmlFor="email">
          Email:{" "}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            onChange={onInput}
            value={info.email}
          />
        </label>
        <label htmlFor="phone">
          Phone:{" "}
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="123-456-7890"
            onChange={onInput}
            value={info.phone}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default InfoEdit;
