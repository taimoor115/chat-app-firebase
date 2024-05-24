import React from "react";

const Input = ({ type, placeholder, className, onChange }) => {
  return (
    <input
      type={type}
      required
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
};

export default Input;
