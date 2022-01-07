import { useState } from "react";
import PropTypes from "prop-types";

const NewCardForm = ({ onAddCard }) => {
  const [message, setMessage] = useState("");

  const submitRequest = (event) => {
    event.preventDefault();
    onAddCard(message);
    setMessage("");
  };

  return (
    <form onSubmit={submitRequest}>
      <label>
        Message:
        <input
          type="text"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <input type="submit" value="Add New Card" />
    </form>
  );
};

NewCardForm.propTypes = {
  onAddCard: PropTypes.func.isRequired,
};

export default NewCardForm;
