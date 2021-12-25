import React from "react";
import "./SubmitQueryButton.css";

const SubmitQueryButton = () => {
  const printMessage = () => {
    console.log("Hello! We're in printMessage!");
  };

  return (
    <section>
      <button
        className="submit-query-button"
        onClick={printMessage}
        type="button"
      >
        Submit Query
      </button>
    </section>
  );
};

export default SubmitQueryButton;
