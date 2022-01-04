import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const NewCardForm = (props) => {
  let isVisible = props.cardFormVisible;
  let submitMessage = props.onMessageFormSubmit;
  let onMessageChange = props.onMessageChange;
  let messageFormFields = props.messageFormFields;

  return (
    <div>
      {isVisible ? (
        <form onSubmit={submitMessage}>
          <h2> Create a new card</h2>
          <p>
            Message:
            <input
              type="text"
              maxlength="40"
              name="messageCard"
              value={messageFormFields.message}
              onChange={onMessageChange}
            />
          </p>
          <input
            disabled={messageFormFields.submitDisabled}
            type="submit"
            value="submit"
          />
        </form>
      ) : null}
    </div>
  );
};

// NewCardForm.propTypes = {
//   addCardCallback: PropTypes.func.isRequired,
// };

export default NewCardForm;
