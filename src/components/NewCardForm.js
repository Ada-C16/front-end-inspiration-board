import React, { useState } from "react";

const NewCardForm = ({ board, createCard }) => {
  const [message, setMessage] = useState("");
  return (
    <div>
      <h3>Create a new Card in {board.title}</h3>
      <input
        value={message}
        placeholder="message"
        onInput={(event) => setMessage(event.target.value)}
      />
      <button
        onClick={() => {
          createCard(message);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default NewCardForm;
