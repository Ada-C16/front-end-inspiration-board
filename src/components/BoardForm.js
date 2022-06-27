import "./BoardForm.css";
import { useState } from "react";

const BoardForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [authorIsValid, setAuthorIsValid] = useState(true);
  const [titleIsValid, setTitleIsValid] = useState(true);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    if (event.target.value.trim().length > 0) {
      setTitleIsValid(true);
    }
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
    if (event.target.value.trim().length > 0) {
      setAuthorIsValid(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredAuthor.trim().length === 0 && enteredTitle.trim().length === 0) {
      setTitleIsValid(false);
      setAuthorIsValid(false);
      return;
    } else if (enteredTitle.trim().length === 0) {
      setTitleIsValid(false);
      return;
    } else if (enteredAuthor.trim().length === 0) {
      setAuthorIsValid(false);
      return;
    }

    const newBoard = {
      title: enteredTitle,
      author: enteredAuthor,
    };

    props.onSubmitBoard(newBoard);
    console.log(authorIsValid);
    setEnteredTitle("");
    setEnteredAuthor("");
    setAuthorIsValid(true);
    setTitleIsValid(true);
  };

  if (showForm) {
    return (
      <div className="container board-form pt-3">
        <h2 className="boardForm">Create a Board</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Title:</label>
            <input
              type="text"
              className={`form-control ${!titleIsValid ? "invalid" : ""}`}
              placeholder="Computer Science"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Author:</label>
            <input
              type="text"
              className={`form-control ${!authorIsValid ? "invalid" : ""}`}
              placeholder="Ada Lovelace"
              value={enteredAuthor}
              onChange={authorChangeHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShowForm(false)}
          >
            Hide Board Form
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <button
        className="btn btn-primary hideFormBtn"
        onClick={() => setShowForm(true)}
      >
        Show Board Form
      </button>
    );
  }
};

export default BoardForm;
