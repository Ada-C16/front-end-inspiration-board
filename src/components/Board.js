import React, { useState, useEffect } from "react";
import axios from "axios";

// dont allow empty title or owner in submission // duplicates?
// get request onBoardSelect() to display the info

const Board = () => {
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
    const options = boards.map((board, i) => {
        return (
          <option value={board} key={i}>
            {board}
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

  const onBoardSelect = () => {
    //getBoards();
  };

  return (
    <div>
      <select name="selectBoard" onChange={onBoardSelect()}>
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
        <input type="submit" value="Make Board" onClick={onBoardSubmit} />
      </form>
    </div>
  );
};

export default Board;