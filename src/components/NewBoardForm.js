import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const NewBoardForm = (props) => {
  const [formFields, setFormFields] = useState({
    title: "",
    owner: "",
  });

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
      .post("http://127.0.0.1:5000/boards", {
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
  );
};

NewBoardForm.propTypes = {
  addBoardCallback: PropTypes.func.isRequired,
};

export default NewBoardForm;
