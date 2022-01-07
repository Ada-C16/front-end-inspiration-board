import axios from "axios";
import { useEffect } from "react";

const SelectBoard = ({ onSelectBoard, setCurrentBoards, onDisplayBoard }) => {
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        const boards = response.data[0];
        setCurrentBoards((prevState) => {
          prevState = boards;
        });
        const boardList = document.getElementById("board-list");

        for (let board of boards) {
          let newBoard = document.createElement("option");
          newBoard.value = board.board_id;
          newBoard.id = board.board_id;
          const boardTitle = document.createTextNode(board.title);
          newBoard.appendChild(boardTitle);
          boardList.appendChild(newBoard);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="board-selector">
      <h3>Select Board to Display</h3>
      <select id="board-list" onChange={onSelectBoard}>
        <option>-- Select Board --</option>
      </select>
      <button className="display-board" onClick={onDisplayBoard}>
        Display Selected Board
      </button>
    </section>
  );
};

export default SelectBoard;
