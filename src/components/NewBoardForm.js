import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./NewBoardForm.css";

const NewBoardForm = (props) => {
  const [formFields, setFormFields] = useState({
    title: "",
    owner: "",
    titleValid: false,
    ownerValid: false,
    submitDisabled: true,
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
    let titleValid = event.target.value ? true : false;
    let submitValid = formFields.ownerValid && titleValid;

    setFormFields({
      ...formFields,
      title: event.target.value,
      titleValid: titleValid,
      submitDisabled: !submitValid,
    });
  };

  const onOwnerChange = (event) => {
    let ownerValid = event.target.value ? true : false;
    let submitValid = formFields.titleValid && ownerValid;

    setFormFields({
      ...formFields,
      owner: event.target.value,
      ownerValid: ownerValid,
      submitDisabled: !submitValid,
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
      .post(process.env.REACT_APP_BACKEND_URL, {
        title: formFields.title,
        owner: formFields.owner,
      })

      .then(function (response) {
        console.log(response);
        setFormFields({
          ...formFields,
          title: "",
          owner: "",
          submitDisabled: true,
        });
      })

      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="text-center">
      <h2>Create a new board</h2>
      {isBoardFormVisible ? (
        <form onSubmit={onFormSubmit}>
          <p className="">
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
          <input
            disabled={formFields.submitDisabled}
            type="submit"
            value="submit"
          />
        </form>
      ) : null}
      <button
        className="btn btn-outline-info btn-default"
        onClick={toggleNewBoardForm}
      >
        {buttonText}
      </button>
    </div>
  );
};

NewBoardForm.propTypes = {
  addBoardCallback: PropTypes.func.isRequired,
};

export default NewBoardForm;
