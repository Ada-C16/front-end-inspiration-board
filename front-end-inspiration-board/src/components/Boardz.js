import React from "react";
import Board from "./Board";
import "./Boardz.css";

const Boardz = (props) => {
  const onClearAllBoards = (event) => {
    const confirmBox = window.confirm("Are you sure?🥺");
    if (confirmBox === true) {
      event.preventDefault();
      // call inhereted function from props like
      props.deleteAllBoardsCallback();
      console.log("delete all the boards!");
    }
  };

  const boardsComponents = [];
  const tempBoardList = [...props.boardList];
  for (let oneBoard of tempBoardList) {
    boardsComponents.push(
      <li>
        {console.log(oneBoard.id)}
        <Board
          selectNewBoard={props.updateCurrentBoardCallback}
          boardInfo={oneBoard}
        />
      </li>
    );
  }
  return (
    <section className="boardz-block grid-block">
      <h1> Boardz List </h1>
      <ul>
        {boardsComponents}
        {/* {
          <Board selectNewBoard={props.updateCurrentBoardCallback} />
        </li>
        <li>
          <Board selectNewBoard={props.updateCurrentBoardCallback} />
        </li>
        <li>
          <Board selectNewBoard={props.updateCurrentBoardCallback} />
        </li>
        <li>
          <Board selectNewBoard={props.updateCurrentBoardCallback} />
        </li>
        <li>
          <Board selectNewBoard={props.updateCurrentBoardCallback} />
        </li>
        <li>
          <Board selectNewBoard={props.updateCurrentBoardCallback} />
        </li>  */}
      </ul>
      <form>
        <button className="deleteAllBoardsButton" onClick={onClearAllBoards}>
          clear all boards
        </button>
      </form>
    </section>
  );
};

export default Boardz;
