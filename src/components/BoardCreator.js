import { useState, useEffect } from "react";
import axios from "axios";
import "./BoardCreator.css";
// import PropTypes from "prop-types";

const BoardCreator = (props) => {
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");
  const [visible, setVisible] = useState(true);
  const { onNewBoard } = props;

  // addBoard should call useEffect(() => axios.post('api/post/boards'))
  // useEffect(() => {
  //   const createBoard = () => {
  //     axios.post("/boards", {
  //       title: title,
  //       owner: owner,
  //     });
  //   };
  // }, [createBoard]);

  // validateTitle and validOwner function

  const handleSubmit = (event) => {
    event.preventDefault();
    // step1 validate title and owner
    // step2 call axios.post
    // console.log("Submit title and owner inside of axios to the backend!!!");

    // Remove leading and trailing whitespace from title and owner
    const trimmedTitle = title.trim();
    const trimmedOwner = owner.trim();

    // if there is anything left after trimming, then use that message
    // to create a new board.
    if (trimmedTitle.length > 0 && trimmedOwner.length > 0) {
      // Consider making the new board here and passing that to the callback?
      onNewBoard(title, owner);

      // After creating a new board, reset the state of this control so that
      // the user can add another without manually deleting the previous stuff.
      setTitle("");
      setOwner("");
    } else {
      // Maybe show a message here to indicate bad user input?
      // alert("Message empty, no new card created.")
    }
  };

  //event handler-->callback
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onHide = () => {
    setVisible(false);
  };

  const onShow = () => {
    setVisible(true);
  };

  // If the controls are hidden, we'll set an invisible class
  // on the main input controls and the submit button and then
  // render the "show" button.
  let visibilityClass = "invisible";
  let toggleButton = (
    <button className="submit-button" type="show" value="Show" onClick={onShow}>
      Show
    </button>
  );

  if (visible) {
    // If the controls are visible, then we won't add the invisible class (since
    // the default is for things to be visible) and we'll render the "Hide" button.
    visibilityClass = "";
    toggleButton = (
      <button
        className="submit-button"
        type="submit"
        value="Hide"
        onClick={onHide}
      >
        Hide
      </button>
    );
  }

  return (
    // check to see if state has changed. If so re-render
    <form className="new-board" onSubmit={handleSubmit}>
      <h2>create a new board</h2>
      {/* do I need a label tag for input tag if I don't need it? */}
      <input
        onChange={handleTitleChange}
        name="title"
        value={title}
        className={"field-box " + visibilityClass}
        type="text"
        placeholder="Title"
      />
      <input
        onChange={(e) => setOwner(e.target.value)}
        value={owner}
        name="owner"
        className={"field-box " + visibilityClass}
        type="text"
        placeholder="Owner's Name"
        maxLength="100"
      />
      <div className="board-button-container">
        <button className={"submit-button " + visibilityClass} type="submit">
          Submit
        </button>
        {toggleButton}
      </div>
    </form>
  );
};

export default BoardCreator;
