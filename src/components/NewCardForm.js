import React, { useState } from "react";

const NewCardForm = ({ board, createCard }) => {
  const [message, setMessage] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  const checkValidInput = (newMessage) => {
    if (newMessage === "" || newMessage.length > 40) {
      setCanSubmit(false);
    } else {
      setCanSubmit(true);
    }
  };

  return (
    <div>
      <h3>Create a new Card in {board.title}</h3>
      <input
        value={message}
        placeholder="message"
        onInput={(event) => {
          setMessage(event.target.value);
          checkValidInput(event.target.value);
        }}
      />
      <button
        onClick={() => {
          createCard(message);
        }}
        disabled={!canSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default NewCardForm;
