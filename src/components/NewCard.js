import React, { useState } from "react";

const NewCard = ({ addCard }) => {
  const [cardState, setCardState] = useState({
    board_id: "",
    message: "",
  });

  const handleChange = (event) => {
    // taking all the items in taskState and placing them in a new object
    const newState = {
      ...cardState,
    };

    newState[event.target.name] = event.target.value;
    setCardState(newState);
  };

  const onSubmit = (event) => {
    // not sure if we need this
    // if (!inputValid()) {
    //   return;
    // }
    event.preventDefault();
    addCard(cardState);
    setCardState({
      board_id: "",
      message: "",
    });
  };

  // not sure if we need this????
  // const inputValid = () => {
  //   return boardState.text.length > 3;
  // };

  return (
    <div className="NewCardForm">
      <h2>Create a new card</h2>
      <form onSubmit={onSubmit} className="new-card__form">
        {/* Title input box */}
        <div className="new-card__fields">
          <label htmlFor="title" className="new-card__fields">
            Message
          </label>
          <input
            name="message"
            // className={inputValid() ? "valid" : "invalid"}
            id="message"
            value={cardState.message}
            type="message"
            onChange={handleChange}
          ></input>
        </div>

        <div className="new-card__fields">
          <label htmlFor="board_id" className="new-card__fields">
            Board ID
          </label>
          <input
            name="board_id"
            // className={inputValid() ? "valid" : "invalid"}
            id="board_id"
            value={cardState.board_id}
            type="board_id"
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

export default NewCard;
