import axios from "axios";
import { useState } from "react";

const makeEmptyBoardFields = () => {
  return {
    title: "",
    owner: "",
  };
};

const CreateBoard = () => {
  const [boardFields, setBoardFields] = useState(makeEmptyBoardFields());
  const [errorMessage, setErrorMessage] = useState("");
  // const [submitted, setSubmitted] = useState(false);
  // const [valid, setValid] = useState(false);

  // Submit Validations and Handler

  // const titleValidation =
  //   submitted && !boardFields.title ? (
  //     <span className="error">Please Enter Title</span>
  //   ) : null;

  // const ownerValidation =
  //   submitted && !boardFields.owner ? (
  //     <span className="error">Please Enter Name</span>
  //   ) : null;

  const onSubmitBoard = (event) => {
    event.preventDefault();
    console.log("in submit board");

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
        title: boardFields.title, //find a way to use form field info here
        owner: boardFields.owner, //find a way to use form field info here
      })
      .then((response) => {
        // setValid(true);
        // setSubmitted(true);
        const boardList = document.getElementById("board-list");
        const newBoard = document.createElement("option");
        newBoard.value = response.data.board.board_id;
        newBoard.id = response.data.board.board_id;
        const boardTitle = document.createTextNode(response.data.board.title);
        newBoard.appendChild(boardTitle);
        boardList.appendChild(newBoard);
        setBoardFields(makeEmptyBoardFields());
        setErrorMessage("");
        // console.log(response.data.board.title);
      })
      .catch((error) => {
        console.log(error.response.data.details);
        setErrorMessage(error.response.data.details);
      });
  };

  // add error logic for going over 40 characters in card's message

  const lengthValidator = (target) => {
    const length = document.getElementById(target.id).value.length;
    if (length === target.maxLength) {
      target.style.backgroundColor = "#de7171";
    } else {
      target.style.backgroundColor = "white";
    }
  };

  //const BoardForm = ({onBoardAdded}) => {};

  const handleTitleChanged = (event) => {
    setBoardFields({ ...boardFields, title: event.target.value });
    lengthValidator(event.target);
  };

  const handleOwnerChanged = (event) => {
    setBoardFields({ ...boardFields, owner: event.target.value });
    lengthValidator(event.target);
  };

  return (
    <section className="create-new-board">
      <h3>Create New Board</h3>
      <form className="BoardForm" onSubmit={onSubmitBoard}>
        {errorMessage}
        <input
          id="board-title-input"
          name="title"
          type="text"
          maxLength="25"
          placeholder="Board Title"
          value={boardFields.title}
          onChange={handleTitleChanged}
        />
        <input
          id="owner-name-input"
          name="owner"
          type="text"
          maxLength="30"
          placeholder="Owner's Name"
          value={boardFields.owner}
          onChange={handleOwnerChanged}
        />
        {/* {ownerValidation} */}
        <button className="submit-board" type="submit" value="Submit New Board">
          Submit
        </button>
      </form>
    </section>
  );
};

export default CreateBoard;
