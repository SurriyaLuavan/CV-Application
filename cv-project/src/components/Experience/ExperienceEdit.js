import React from "react";

const ExperienceEdit = ({
  expInfo,
  id,
  expComplete,
  handleChange,
  handleSubmit,
  handleStatus,
  onRemove,
}) => {
  return (
    <form className="edit-container" onSubmit={handleSubmit}>
      <label htmlFor="company">
        Company Name:{" "}
        <input
          type="text"
          name="company"
          id="company"
          placeholder=" CubeSatNB"
          value={expInfo.company}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="position">
        Position Title:{" "}
        <input
          type="text"
          name="position"
          id="position"
          placeholder=" Embedded Software"
          value={expInfo.position}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="status">
        In Progress:{" "}
        <input
          type="checkbox"
          name="status"
          id="status"
          checked={expComplete}
          onChange={handleStatus}
        />
      </label>
      <fieldset>
        <label htmlFor="from-date">
          From:{" "}
          <input
            type="month"
            name="workFrom"
            id="from-date"
            value={expInfo.workFrom}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="to-date">
          {" "}
          To:{" "}
          <input
            type="month"
            name="workTo"
            id="to-date"
            placeholder="mm/yyyy"
            value={expInfo.workTo}
            onChange={handleChange}
            disabled={expComplete}
          />
        </label>
      </fieldset>
      <button type="submit">Save</button>
      <button type="button" onClick={() => onRemove(id)}>
        Remove
      </button>
    </form>
  );
};

export default ExperienceEdit;
