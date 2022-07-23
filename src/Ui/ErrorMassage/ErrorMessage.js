import React from "react";
import "./errorMessage.css";
const ErrorMssage = ({ message }) => {
  return (
    <div className="errorMessage">
      <p>{message}</p>
    </div>
  );
};
ErrorMssage.defaultProps = {
  message: "Somethings went wrong!",
};

export default ErrorMssage;
