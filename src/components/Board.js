import React from "react";

const Board = (props) => {
  //Id
  //Title
  //Owner
  //Cards
  const getBoardListJSX = props.boardData.map((board) => {
    return (
      <div>
        <li>
          <button>
            title={board.title} owner={board.owner}
          </button>
        </li>
      </div>
    );
  });
  return <div>{getBoardListJSX}</div>;

  //make notes aboout what should happen here based on requirements
  //board will return form
  //board will display list of boards that it gets from app
};

//create proptypes

export default Board;
