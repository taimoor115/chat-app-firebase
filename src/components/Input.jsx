import React from "react";

const Input = ({ type, placeholder, className }) => {
  return (
    <input
      type={type}
      required
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;
