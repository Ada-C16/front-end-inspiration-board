import React from "react";

const SubmitQueryButton = () => {
  const printMessage = () => {
    console.log("Hello! We're in printMessage!");
  };

  return (
    <section>
      <button onClick={printMessage} type="button">
        Submit Query
      </button>
    </section>
  );
};

export default SubmitQueryButton;
