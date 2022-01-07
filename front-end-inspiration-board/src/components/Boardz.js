import React from "react";
import Board from "./Board";
import "./Boardz.css";

const Boardz = (props) => {

  // called when user clicks on button to clear all boards
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
      <li key={oneBoard.id}>
        <Board
          selectNewBoard={props.updateCurrentBoardCallback}
          boardInfo={oneBoard}
        />
      </li>
    );
  }

//   <ul>
//   {["Item1", "Item2", "Item3"].map(item =>
//   <li key="{item}">{item}</li>
//   )}
// </ul>


  return (
    <section className="boardz-block grid-block">
      <h1> Boardz List </h1>
      <section className="boardz-content">
        <ul className="boardz-menu child">
          {boardsComponents}
        </ul>
        {/* <div className="button-container"> */}
        <button className="deleteAllBoardsButton child" onClick={onClearAllBoards}>
          clear all boards
        </button>
        {/* </div> */}
      </section>
    </section>
  );
};

export default Boardz;
