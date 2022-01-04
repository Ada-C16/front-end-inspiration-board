import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const NewCardForm = (props) => {
  let isVisible = props.cardFormVisible;
  let submitMessage = props.onMessageFormSubmit;
  let onMessageChange = props.onMessageChange;
  let messageFormFields = props.messageFormFields;

  // const [cardsData, setCardsData] = useState([]);
  // const [formFields, setFormFields] = useState({
  //   id: 0,
  // });

  // const addNewCard = (newCard) => {
  //     const newCardList = [...cardsData];
  
  //     const nextCardId = Math.max(...newCardList.map((card) => card.id)) + 1;
  
  //     newCardList.push({
  //       id: nextCardId,
  //       message: newCard.messageData,
  //     });
  
  //     setCardsData(newCardList);
  //   };

  return (
    <div>
      {isVisible ? (
        <form onSubmit={submitMessage}>
          <h2> Create a new card</h2>
          <p>
            Message:
            <input
              type="text"
              name="messageCard"
              value={messageFormFields.message}
              onChange={onMessageChange}
            />
          </p>
          <input type="submit" value='submit' />
        </form>
      ) : null}
    </div>
  );
};

// NewCardForm.propTypes = {
//   addCardCallback: PropTypes.func.isRequired,
// };

export default NewCardForm;
