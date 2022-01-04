import React from "react";

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
