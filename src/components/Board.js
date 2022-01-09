import React from "react";

const Board = (props) => {
  // console.log(props);
  //Id
  //Title
  //Owner
  //Cards
  // const [isSelected, setSelected] = useState(false);

  const getBoardListJSX = props.boardData.map((board) => {
    const isSelected = () => {
      props.selectBoardCallBack(board.title);
    };
    // console.log(props);
    return (
      <div>
        <li className="no-bullets">
          <button
            onClick={isSelected}
            board_id={board.board_id}
            title={board.title}
            owner={board.owner}
          >
            {board.title}
            <br></br>
            {board.owner}
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
