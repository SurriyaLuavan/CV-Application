import React from "react";

const EducationEdit = ({
  eduInfo,
  id,
  eduComplete,
  handleChange,
  handleSubmit,
  handleStatus,
  onRemove,
}) => {
  return (
    <form className="edit-container" onSubmit={handleSubmit}>
      <label htmlFor="school">
        Name of Institition:{" "}
        <input
          type="text"
          name="school"
          id="school"
          placeholder=" University of Toronto"
          value={eduInfo.school}
          onChange={handleChange}
        />
      </label>
      <fieldset>
        <label htmlFor="level">
          Level of Study:{" "}
          <select
            value={eduInfo.level}
            name="level"
            id="level"
            onChange={handleChange}
          >
            <option value="" disabled={true}>
              -- select one --
            </option>
            <option value="Associate">Associate</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="Doctoral">Doctoral</option>
          </select>
        </label>
      </fieldset>
      <label htmlFor="field">
        Field of Study:{" "}
        <input
          type="text"
          name="field"
          id="field"
          placeholder=" Electrical Engineering"
          value={eduInfo.field}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="status">
        In Progress:{" "}
        <input
          type="checkbox"
          name="status"
          id="status"
          checked={eduComplete}
          onChange={handleStatus}
        />
      </label>
      <fieldset>
        <label htmlFor="from-date">
          From:{" "}
          <input
            type="month"
            name="studyFrom"
            id="from-date"
            value={eduInfo.studyFrom}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="to-date">
          {" "}
          To:{" "}
          <input
            type="month"
            name="studyTo"
            id="to-date"
            placeholder="mm/yyyy"
            value={eduInfo.studyTo}
            onChange={handleChange}
            disabled={eduComplete}
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

export default EducationEdit;
