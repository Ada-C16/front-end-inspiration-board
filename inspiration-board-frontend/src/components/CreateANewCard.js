import React from "react";

const CreateANewCard = () => {

  

  return (
  <form method = "GET">
    <div>
      <h3>Create A New Card</h3>
      <label for = 'message'>Message</label>
      <input type = 'text'name = 'message' id = 'message' placeholder = 'type a cute message...'  maxlength = "40" required></input>
      <div>
      <button type = ''>Submit</button>
      </div>

      <div>
      <button type = 'reset'>Reset</button>
      </div>
      
    </div>
  </form>
  )
};

export default CreateANewCard;
