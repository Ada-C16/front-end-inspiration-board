import React from "react";
import "./BoardSelector.css";
// import PropTypes from "prop-types";

// destructuring can looking: const Board = (props) => { const { boards } = props; or const Board = ({ boards, color }). Do 2nd destructoring when there's more than one props are being pass down but otherwise this all depends on how the team want to do it.
// TODO: Check out Controlled vs Uncontrolled Components
const BoardSelector = (props) => {
  const { boards, onBoardChanged } = props;

  // Event handler to convert the string value of the selected option
  // element to the ID (number) needed by the data model.
  const onChangedEventHandler = (event) => {
    // convert the string from the selected option element to a number
    const boardId = Number.parseInt(event.target.value);
    // now invoke our callback to inform the parent of the newly
    // selected board ID.
    onBoardChanged(boardId);
  };

  return (
    <div className="board">
      <h2 className="board-title">board</h2>
      <select
        className="field-box select-box"
        name="board-title"
        onChange={onChangedEventHandler}
        value={props.currentTitleSelected}
      >
        {/* default setting for sector */}
        {/* <option value="">Select Title</option>
        use map to iterate the boards and return multiple return option objects */}
        {boards.map((board) => {
          return (
            <option key={board.board_id} value={board.board_id}>
              {board.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default BoardSelector;
