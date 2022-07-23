import React from "react";

const Input = ({
  inputType,
  inputOnchange,
  inputName,
  inputLable,
  inputHolder,
  inputMax,
  inputMin,
  isReqired,
}) => {
  return (
    <div>
      <label htmlFor={inputName}>{inputLable}:</label>
      <input
        onChange={inputOnchange}
        type={inputType}
        name={inputName}
        placeholder={inputHolder}
        min={inputMin}
        max={inputMax}
        required={isReqired}
      />
    </div>
  );
};
Input.defaultProps = {
  inputType: "text",
  inputName: "name",
  inputLable: "Your name",
  isReqired: false,
};
export default Input;
