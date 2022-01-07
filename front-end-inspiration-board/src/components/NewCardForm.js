import React from "react";
import { useState } from "react";
import './NewCardForm.css';

const NewCardForm = (props) => {
  //create formField

  const [cardFormField, setCardFormField] = useState({
    cardMessage: ''
  });

  const onCardMessageChange = (event) => {
    setCardFormField({
      ...cardFormField,
      cardMessage: event.target.value
    })
  };


  // Truthy if a board is selected, Falsey if no board selected
  let isBoardSelected = false;
  
  if (props.currentBoard){
    isBoardSelected = true;
  };

  const onCardFormSubmit = (event) => {
    event.preventDefault(); 
    
    if (isBoardSelected){

      //need to pass in this function as a prop
      props.addNewCardCallback({
        message: cardFormField.cardMessage,
      });

      console.log("We're in OnCardFormSubmit!")
      
      //cabebe 12.28.21
      //resets CardFormField state on FormSubmit button click
      setCardFormField({
        cardMessage: ''
      })
    }else{
      // pop up is shown if user tries to submit a card without selecting a board.
      alert("select a board first!");
    }
  };
  

  return (
    <section className="new-card-form-block grid-block">
      <h1> New Card Form</h1>
      <form className="new-card-form" onSubmit={onCardFormSubmit}>
        {/* <div> */}
        <label className='new-card-input-label nc-form-child'>New Card Message:</label>
        <input className='new-card-input nc-form-child'
          type="text"
          required
          value={cardFormField.cardMessage}
          onChange={onCardMessageChange}
          maxLength={40}>

        </input>
        {/* </div> */}
        <input className="new-card-submit-button nc-form-child"
          type="submit"
          value="Submit">
        </input>
      </form>
    </section>
  );
};

export default NewCardForm;
