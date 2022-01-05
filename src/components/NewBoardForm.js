import React, { useState } from "react";

const NewBoardForm = ({ onSubmitCallback }) => {

  // to do
  // write an onSubmitCallback in App.js and pass it to NewBoardForm
  
  const [boardState, setBoardState] = useState({
    title: "",
    owner: "",
  });

  const handleChange = (event) => {
    // taking all the items in taskState and placing them in a new object
    const newState = {
      ...boardState,
    };

    newState[event.target.name] = event.target.value;
    setBoardState(newState);
  };

  const onSubmit = (event) => {
    // not sure if we need this
    // if (!inputValid()) {
    //   return;
    // }
    event.preventDefault();
    onSubmitCallback(boardState);
    setBoardState({
      title: "",
      owner: "",
    });
  };

  // not sure if we need this????
  // const inputValid = () => {
  //   return boardState.text.length > 3;
  // };

  return (
    <div className="NewBoardForm">
      <form onSubmit={onSubmit} className="new-board__form">
        
        {/* Title input box */}
        <div className="new-board__fields">
          <label htmlFor="title" className="new-board__fields">
            Title
          </label>
          <input
            name="title"
            // className={inputValid() ? "valid" : "invalid"}
            id="title"
            value={boardState.title}
            type="title"
            onChange={handleChange}
          ></input>
        </div>


        {/* Owner input box */}
        <div className="new-board__fields">
          <label htmlFor="title" className="new-board__fields">
            Owner
          </label>
          <input
            name="owner"
            // className={inputValid() ? "valid" : "invalid"}
            id="owner"
            value={boardState.owner}
            type="owner"
            onChange={handleChange}
          ></input>
        </div>
        
        <div>
          <button
            className="new-board__submit"
            type="submit"
            // disabled={!inputValid()}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBoardForm;


