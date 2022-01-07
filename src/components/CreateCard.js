import { useState } from "react";
import PropTypes from "prop-types";

import "./CreateCard.css";

const CreateCard = ({ addCardCallback }) => {
  // get id from clickEvent on board , pass this value as board_id

  const [newCardData, setNewCardData] = useState({
    message: "",
  });

  const inputValid = () => {
    return newCardData.message.length <= 40 && newCardData.message.length >= 3;
  };

  const onMessageChange = (event) => {
    setNewCardData({
      ...newCardData,
      message: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!inputValid()) {
      return;
    }
    // console.log("me");
    // create a new card
    addCardCallback(newCardData);
    // reset state
    setNewCardData({
      message: "",
    });
  };

  return (
    <section className="new-card-form-container">
      <h2>Create a New Card</h2>
      <form onSubmit={onSubmit} className="new-card-form-form">
        <label htmlFor="message">Message</label>
        <input
          type="text"
          className={!inputValid() ? "invalid-form-input" : "none"}
          value={newCardData.message}
          onChange={onMessageChange}
        />
        <p> Preview: {newCardData.message} </p>
        <button
          type="submit"
          className="new-card-form-submit-btn"
          disabled={!inputValid()}
        >
          submit
        </button>
      </form>
    </section>
  );
};

CreateCard.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default CreateCard;
