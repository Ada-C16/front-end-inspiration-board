import React from "react";

const NewCardForm = (props) =>{
  return (
    <form>
    {/* message input 
    submit button */}
    </form>
  );
};

//create form with required input

export default NewCardForm;


//----------
// const NewCardForm = (props) =>{
//   //create state to handle changes to card form
//   const[formFields, setFormFields] = useState('');

//   //function to handle new messages on card
//   const onMessageChange = (event) =>{
//     setFormFields(event.target.value)
//   };

//   //callback function to submit message
//   const submitNewCard = (event) =>{
//     event.preventDefault();
//     props.addCardCallBack(formFields);
//     setFormFields('');
//   }