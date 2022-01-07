import React, { useState, useEffect } from "react";
import axios from "axios";

function Boards({ currentBoard, setCurrentBoard }) {
  // const boards = [
  //   {
  //     board_id: 1,
  //     title: "Inspirational Quotes",
  //     owner: "Nourhan",
  //     cards: [],
  //   },
  //   {
  //     board_id: 2,
  //     title: "Workout Goals",
  //     owner: "Tanja",
  //     cards: [],
  //   },
  //   {
  //     board_id: 3,
  //     title: "Chores",
  //     owner: "Ahmed",
  //     cards: [],
  //   },
  //   {
  //     board_id: 4,
  //     title: "Reminders",
  //     owner: "Yousef",
  //     cards: [],
  //   },
  //   {
  //     board_id: 5,
  //     title: "Meal Plan",
  //     owner: "Sarah",
  //     cards: [],
  //   },
  // ];

  const [selectedBoard, setSelectedBoardTitle] = useState(null);
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [newBoardTitle, setNewBoardTitle] = useState("");
  const [boardList, setBoardList] = useState([]);
  const [boardOwner, setBoardOwner] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const backendURL = process.env["REACT_APP_BACKEND_URL"];
  useEffect(() => {
    fetchBoards();
  }, []);

  useEffect(() => {
    if (boardList.length >= 1 && !currentBoard) {
      setSelectedBoardTitle(boardList[0].title);
      setSelectedOwner(boardList[0].owner);
      setCurrentBoard(boardList[0]);
    }
  }, [boardList, currentBoard]);

  const renderBoardList = (boardList) => {
    return boardList.map((board) => {
      return (
        <option key={board.id} value={board.id} label={board.title}>
          {board.title}
        </option>
      );
    });
  };

  const handleOptionSelect = (event) => {
    const selectedBoard = boardList.find(
      (board) => board.id === parseInt(event.target.value)
    );
    setSelectedBoardTitle(selectedBoard.title);
    setSelectedOwner(selectedBoard.owner);
    setCurrentBoard(selectedBoard);
  };

  const handleBoardSelect = (event) => {
    // setBoardList([
    //   ...boardList,
    //   {
    //     id:
    //       Math.max(...boardList.map((board) => parseInt(board.id))) + 1,
    //     title: newBoardTitle,
    //     owner: boardOwner,
    //   },
    // ]);
    axios
      .post(`${backendURL}/boards`, {
        title: newBoardTitle,
        owner: boardOwner,
      })
      .then((response) => {
        console.log(
          `Success creating boards: ${JSON.stringify(response.data)}`
        );
        setBoardList([...boardList, response.data]);
      })
      .catch((error) => {
        console.error(`Error getting boards: ${error}`);
      });
  };

  const checkValidInput = () => {
    if (newBoardTitle === "" || boardOwner === "") {
      setCanSubmit(false);
    } else {
      setCanSubmit(true);
    }
  };

  function fetchBoards() {
    return axios
      .get(`${backendURL}/boards`)
      .then((response) => {
        console.log(`Success getting boards: ${JSON.stringify(response.data)}`);
        setBoardList(response.data);
      })
      .catch((error) => {
        console.error(`Error getting boards: ${error}`);
      });
  }

  function deleteBoard() {
    axios
      .delete(`${backendURL}/boards/${currentBoard.id}`)
      .then((response) => {
        console.log(`Success deleting board: ${JSON.stringify(response.data)}`);
        fetchBoards().then(() => {
          setCurrentBoard(null);
          setSelectedBoardTitle("");
          setSelectedOwner("");
        });
      })
      .catch((error) => {
        console.error(`Error deleting board: ${error}`);
      });
  }

  return (
    <div className="App">
      <h2> Boards </h2>
      <select size={boardList.length} onChange={handleOptionSelect}>
        {renderBoardList(boardList)}
      </select>
      {selectedBoard ? (
        <>
          <h2> Board Selected: {selectedBoard}</h2>
          <button onClick={deleteBoard}>Delete Board</button>
        </>
      ) : (
        <h2> Select a Board </h2>
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
