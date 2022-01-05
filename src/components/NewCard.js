import PropTypes from "prop-types";
import React, { useState } from "react";
import "./NewCard.css";

const NewCard = () => {
  // const [newCard, setNewCard] = useState({
  //   text: "",
  //   done: false,
  // });

  // const inputValidation = () => {
  //   return newCard.text.length < 40;
  // };

  return (
    <div>
      <h2>Make a New Card!</h2>
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
