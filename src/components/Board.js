import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Board.css"

// dont allow empty title or owner in submission // duplicates?
// get request onBoardSelect() to display the info

const Board = (props) => {
    const [formField, setFormField] = useState({ title: "", owner: "" });
    const onTitleChange = (e) => {
        setFormField({
            ...formField,
            title: e.target.value,
      });
    };
    const onOwnerChange = (e) => {
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
  };

  return (
    <div className = "form">
      <h2>Boards</h2>
      <select name="selectBoard" onChange={props.onBoardSelect}>
        {boardOptions}
      </select>
      <form>
        <div>
          <label htmlFor="title">title</label>
          <input
            name="title"
            value={formField.title}
            onChange={onTitleChange}
            // required ="true"
          />
        </div>
        <div>
          <label htmlFor="owner">owner</label>
          <input
            name="owner"
            value={formField.owner}
            onChange={onOwnerChange}
            // required="true"
          />
        </div>
        <input className = "submit-button" type="submit" value="Make Board" onClick={onBoardSubmit} />
      </form>
    </div>
  );
};

export default Board;