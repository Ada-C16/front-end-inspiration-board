import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const NewCardForm = (props) => {
  const [formFields, setFormFields] = useState({
    message: "",
  });

  const [isCardFormVisible, setCardFormVisible] = useState(true);
  const [buttonText, setButtonText] = useState("hide card form");

  const toggleNewCardForm = () => {
    setCardFormVisible(!isCardFormVisible);

    if (isCardFormVisible) {
      setButtonText("show card form");
    } else {
      setButtonText("hide card form");
    }
  };

  // Every time user types in message, updating state
  const onMessageChange = (event) => {
    setFormFields({
      ...formFields,
      message: event.target.value,
    });
  };

  // When submitting this button, should make a POST, request to /cards to add message info
  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addCardCallback({
      messageData: formFields.message,
    });

    axios
      // For now, calling local db. TODO: Need to make changes on back-end and push changes onto heroku to use deployed link for API call
      .post(process.env.REACT_APP_BACKEND_URL, {
        message: formFields.message,
      })

      .then(function (response) {
        console.log(response);
      })

      .catch(function (error) {
        console.log(error);
      });

    setFormFields({
      message: "",
    });
  };

  return (
    <div>
      <h2>Creating a new card</h2>
      {isCardFormVisible ? (
        <form onSubmit={onFormSubmit}>
          <p>
            Message:
            <input
              type="text"
              name="messageCard"
              value={formFields.message}
              onChange={onMessageChange}
            />
          </p>
          <input type="submit" value="submit" />
        </form>
      ) : null}
      <button onClick={toggleNewCardForm}>{buttonText}</button>
    </div>
  );
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
