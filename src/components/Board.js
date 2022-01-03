import React, { useState, useEffect } from "react";
import axios from "axios";


const Board = (props) => {

    const toggleBorder = (e, id) => {
      const inputElement = document.getElementById(id);
      if (e.target.value.length > 0) {
        inputElement.style.borderColor = "grey";
      } else {
        inputElement.style.borderColor = "red";
      }
    };
    const [formField, setFormField] = useState({ title: "", owner: "" });
    const onTitleChange = (e) => {
        toggleBorder(e, 'board-title');
        setFormField({
            ...formField,
            title: e.target.value,
      });
    };
    const onOwnerChange = (e) => {
        toggleBorder(e, 'board-owner');
        setFormField({
            ...formField,
            owner: e.target.value,
      });
    };

  const [boards, setBoards] = useState([]);
  const [boardOptions, setBoardOptions] = useState([]);

  useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
    .then((response) => {
      setBoards(response.data);  
    });
  }, [])

  useEffect(() => {
    const options = boards.map((board) => {
        return (
          <option value={board[0]} id = {board[1]} key = {board[1]}>
            {board[0]}
          </option>
        );
      });
      setBoardOptions(options);
  }, [boards])

  const onBoardSubmit = (e) => {
    e.preventDefault();
    const boardTitle = document.getElementById('board-title');
    const boardOwner = document.getElementById('board-owner');
    if (formField.title.length === 0) {
      boardTitle.style.borderColor = "red";
    }
    if (formField.owner.length === 0) {
      boardOwner.style.borderColor = "red";
    }
    if (formField.title.length > 0 && formField.owner.length > 0) {
      axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, formField)
      .then((response) => {
      setFormField({
          title: "",
          owner: "",
      });
      const newBoardOptions = [...boardOptions]
      newBoardOptions.push(<option value={response.data}>{response.data}</option>);
      setBoardOptions(newBoardOptions);
    })
    .catch((err) => console.log(err));
    }
  };
  const toggleVisibility = () => {
    const boardForm = document.getElementById('board-form');
    const formDisplaySetting = boardForm.style.display;
    const boardVisibilityButton = document.getElementById('boardVisibilityButton');

    if (formDisplaySetting === 'block') {
      boardForm.style.display = 'none';
      boardVisibilityButton.innerHTML = 'Show Board Form';
    } else {
      boardForm.style.display = 'block';
      boardVisibilityButton.innerHTML = 'Hide Board Form';
    }
  };
  return (
    <div  className = "form" >
      <h2 id="select-board-header">Select a Board</h2>
      <select id = "board-select-menu" name="selectBoard" onChange={props.onBoardSelect}>
        {boardOptions}
      </select>
      
      <h2 id="board-title">Create a New Board</h2>
      <form id = "board-form">
        <div id="form-title-div">
          <label htmlFor="title">title</label>
          <input
            id = "board-title"
            minLength={1}
            name="title"
            value={formField.title}
            onChange={onTitleChange}
          />
        </div>
        <div id="board-form-owner">
          <label htmlFor="owner">owner</label>
          <input
            id = "board-owner"
            minLength={1}
            name="owner"
            value={formField.owner}
            onChange={onOwnerChange}
          />
        </div>
        <input className = "submit-button" type="submit" value="Make Board" onClick={onBoardSubmit} />
      </form>
      <button onClick={toggleVisibility} id = "boardVisibilityButton">Hide Board Form</button>
    </div>
  );
};

export default Board;