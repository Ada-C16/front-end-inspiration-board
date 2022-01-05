import React, { useState } from "react";

function Boards({ setCurrentBoard }) {
  const boards = [
    {
      board_id: 1,
      title: "Inspirational Quotes",
      owner: "Nourhan",
      cards: [],
    },
    {
      board_id: 2,
      title: "Workout Goals",
      owner: "Tanja",
      cards: [],
    },
    {
      board_id: 3,
      title: "Chores",
      owner: "Ahmed",
      cards: [],
    },
    {
      board_id: 4,
      title: "Reminders",
      owner: "Yousef",
      cards: [],
    },
    {
      board_id: 5,
      title: "Meal Plan",
      owner: "Sarah",
      cards: [],
    },
  ];

  const [selectedBoard, setSelectedBoardTitle] = useState(null);
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [newBoardTitle, setNewBoardTitle] = useState("");
  const [boardList, setBoardList] = useState(boards);
  const [boardOwner, setBoardOwner] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const renderBoardList = (boardList) => {
    return boardList.map((board) => {
      return (
        <option key={board.board_id} value={board.board_id} label={board.title}>
          {board.title}
        </option>
      );
    });
  };

  const handleOptionSelect = (event) => {
    const selectedBoard = boardList.find(
      (board) => board.board_id === parseInt(event.target.value)
    );
    setSelectedBoardTitle(selectedBoard.title);
    setSelectedOwner(selectedBoard.owner);
    setCurrentBoard(selectedBoard);
  };

  const handleBoardSelect = (event) => {
    setBoardList([
      ...boardList,
      {
        board_id:
          Math.max(...boardList.map((board) => parseInt(board.board_id))) + 1,
        title: newBoardTitle,
        owner: boardOwner,
      },
    ]);
  };
  const checkValidInput = () => {
    if (newBoardTitle === "" || boardOwner === "") {
      setCanSubmit(false);
    } else {
      setCanSubmit(true);
    }
  };

  return (
    <div className="App">
      <h2> Boards </h2>
      <select size={boardList.length} onChange={handleOptionSelect}>
        {renderBoardList(boardList)}
      </select>
      {selectedBoard ? (
        <h2> Board Selected: {selectedBoard}</h2>
      ) : (
        <h2> Select a chart </h2>
      )}
      {selectedOwner && <h2> Owner Selected: {selectedOwner} </h2>}
      <h3> Create A New Board</h3>
      {showForm && (
        <>
          <label> Title </label>
          <input
            value={newBoardTitle}
            onInput={(event) => {
              setNewBoardTitle(event.target.value);
              checkValidInput();
            }}
          />
          <p>{newBoardTitle}</p>
          <label> Owner's Name </label>
          <input
            value={boardOwner}
            onInput={(event) => {
              setBoardOwner(event.target.value);
              checkValidInput();
            }}
          ></input>
          <button onClick={handleBoardSelect} disabled={!canSubmit}>
            {" "}
            Submit{" "}
          </button>
        </>
      )}
      <br />
      <br />
      <br />
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide New Board Form" : "Show New Board Form"}
      </button>
    </div>
  );
}

export default Boards;
