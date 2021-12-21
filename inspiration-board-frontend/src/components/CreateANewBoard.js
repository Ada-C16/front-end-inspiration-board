import SubmitQueryButton from "./SubmitQueryButton";
import React from "react";

const CreateANewBoard = () => {
  return (
    <section>
      <label for="title">Title </label>
      <input type="text" id="title"></input>
      <br></br>
      <label for="owner">Owner </label>
      <input type="text" id="owner"></input>
      <br></br>
      <p>Preview: - </p>
      <SubmitQueryButton />
      <button type="button">Hide New Board Form</button>
    </section>
  );
};

export default CreateANewBoard;
