import React from "react";
import "./CardCreator.css";
import { useState } from "react";

// import PropTypes from "prop-types";

const CardCreator = (props) => {
  const [message, setMessage] = useState("");
  const { onNewCard } = props;

  // Respond to the button click after the user has typed the message
  const handleSubmitMessage = (event) => {
    event.preventDefault();

    // take the current message, trim leading and trailing whitespace
    const trimmed = message.trim();

    // if there is anything left after trimming, then use that message
    // to create a new card.
    if (trimmed.length > 0) {
      onNewCard(message);
      setMessage("");
    } else {
      // Maybe show a message here to indicate bad user input?
      // alert("Message empty, no new card created.")
    }
  };

  // keep track of the state as the user types
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    // added form tag. Not sure if I need it?
    <form onSubmit={handleSubmitMessage}>
      <div className="new-card">
        <h2>create a new card</h2>
        {/**
      <select className="field-box select-box" name="board-title">
        <option value="">Select Board Title</option>
      </select>
      */}
        <input
          onChange={handleMessageChange}
          className="field-box"
          type="text"
          placeholder="Message"
          maxLength="100"
          value={message}
        />
        <input className="submit-button" type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default CardCreator;
