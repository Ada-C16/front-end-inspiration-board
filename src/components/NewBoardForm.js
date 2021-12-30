import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const NewBoardForm = (props) => {
  const [formFields, setFormFields] = useState({
    title: "",
    owner: "",
  });

  const [isBoardFormVisible, setBoardFormVisible] = useState(true);
  const [buttonText, setButtonText] = useState("hide board form");

  const toggleNewBoardForm = () => {
    setBoardFormVisible(!isBoardFormVisible);

    if (isBoardFormVisible) {
      setButtonText("show board form");
    } else {
      setButtonText("hide board form");
    }
  };

  // Every time user types in title or owner, updating state
  const onTitleChange = (event) => {
    setFormFields({
      ...formFields,
      title: event.target.value,
    });
  };

  const onOwnerChange = (event) => {
    setFormFields({
      ...formFields,
      owner: event.target.value,
    });
  };

  // When submitting this button, should make a POST, request to /boards to add title and owner info
  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addBoardCallback({
      titleData: formFields.title,
      ownerData: formFields.owner,
    });

    axios
      // For now, calling local db. TODO: Need to make changes on back-end and push changes onto heroku to use deployed link for API call
      .post(process.env.REACT_APP_BACKEND_URL, {
        title: formFields.title,
        owner: formFields.owner,
      })

      .then(function (response) {
        console.log(response);
      })

      .catch(function (error) {
        console.log(error);
      });

    setFormFields({
      title: "",
      owner: "",
    });
  };

  return (
    <div>
      <h2>Creating a new board</h2>
      {isBoardFormVisible ? (
        <form onSubmit={onFormSubmit}>
          <p>
            Title:
            <input
              type="text"
              name="titleBoard"
              value={formFields.title}
              onChange={onTitleChange}
            />
          </p>
          <p>
            Owner:
            <input
              type="text"
              name="owner"
              value={formFields.owner}
              onChange={onOwnerChange}
            />
          </p>
          <input type="submit" value="submit" />
        </form>
      ) : null}
      <button onClick={toggleNewBoardForm}>{buttonText}</button>
    </div>
  );
};

NewBoardForm.propTypes = {
  addBoardCallback: PropTypes.func.isRequired,
};

export default NewBoardForm;
