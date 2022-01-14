import React from "react";

const Input = ({ value, name, onChange, label, type, error}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        type={type}
        name={name}
        className="form-control"
      />
      {/** we need ref to post the value of input */}
    {error && <div className="alert alert-danger">{error}</div>}
    </div>

  );
};

export default Input;
