import React from "react";
import "./SubmitButton.css";

const SubmitButton = () => {
  const printMessage = () => {
    console.log("Hello! We're in printMessage!");
  };

  return (
    <section>
      <button className="submit-button" onClick={printMessage} type="button">
        Submit
      </button>
    </section>
  );
};

export default SubmitButton;
