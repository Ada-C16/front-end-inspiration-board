import "./NewCard.css";
import { useState } from "react";
import PropTypes from "prop-types";

const NewCard = (props) => {
  const [formMessage, setFormMessage] = useState("");

  const onMessageChange = (event) => {
    setFormMessage(event.target.value);
  };

  const submitNewCard = (event) => {
    event.preventDefault();
    props.createNewCard({ message: formMessage });
    setFormMessage("");
  };

  const newCardIsEnabled = formMessage.length > 0 && formMessage.length <= 40;

  return (
    <form className="create-card-container" onSubmit={submitNewCard}>
      <p className="create-new-card-label">Create New Card</p>
      <div className="message-label-and-box">
        <label className="message">Message</label>
        <input
          type="text"
          value={formMessage}
          onChange={onMessageChange}
          size="25"
          className={formMessage.length > 40 ? "red-outline" : ""}
        />
        <p className="error-message">
          {formMessage.length > 40
            ? "Message must be 40 characters or less"
            : ""}
        </p>
      </div>
      <div>
        <input
          className="btn btn-primary"
          type="submit"
          value="Submit"
          disabled={!newCardIsEnabled}
        />
      </div>
    </form>
  );
};

NewCard.propTypes = {
  createNewCard: PropTypes.func,
};

export default NewCard;
