import React from "react";

const textInput = ({ name, label, onCahnge, placeHolder, value, error }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onCahnge}
        />
        {error&& <div className="alert alert-danger">{error}</div>}

      </div>
    </div>
  );
};

export default textInput;
