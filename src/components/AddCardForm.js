import { useState } from "react";
import "./AddCardForm.css";

const AddCardForm = ({ addNewCard }) => {
  const [message, setMessage] = useState({ message: "" });

  const handleMessageChange = (event) => {
    setMessage({ ...message, message: event.target.value });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    addNewCard({ message: message.message });
    //resets form to blank
    setMessage({ message: "" });
  };

  return (
    <div className="container">
      <h3>Add a New Card</h3>

      <form className="add-form" onSubmit={onSubmitForm}>
        <div className="form-control">
          <label>Card Message</label>
          <input
            type="text"
            required
            placeholder="Add your message..."
            value={message.message}
            maxLength={40}
            onChange={handleMessageChange}
          />
        </div>
      </form>
      <input type="submit" value="Submit" className="card_form_button" />
    </div>
  );
};

export default AddCardForm;
