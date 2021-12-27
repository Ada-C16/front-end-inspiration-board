import PropTypes from "prop-types";

// BoardSelector is taking boards (data from app) as a prop
const BoardSelector = ({ boards }) => {
  // event is a keyword
  const updateCurrentBoard = (event) => {
    console.log(event.target.value);
  };
  //beginning html for this component
  return (
    //updateCurrentBoard here is not using () bc we don't want to call it every
    //time, just using it as a reference if there's a change from the user/browser side
    <select onChange={updateCurrentBoard}>
      {/* used map function to iterate through list of boards and create
      a option element for each board, using board.title as the text for the option tag  */}
      {boards.map((board) => {
        return <option key={board.id}>{board.title} </option>;
      })}
    </select>
  );
};
// export gives all info in this component back to App
export default BoardSelector;
