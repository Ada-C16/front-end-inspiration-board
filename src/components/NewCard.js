import React from "react";
import "./NewCard.css";

const NewCard = () => {
  return (
    <div>
      <div>Make a New Card!</div>
      <div>
        <label>
          Message:
          <input type="text" />
        </label>
      </div>
      <span>Preview</span>
      <button>Submit</button>
    </div>
  );
};

export default NewCard;
