import "./SelectedBoard.css";

const SelectBoard = (props) => {

  return (
    <section>
      <h4 className="selected-board-header">Selected Board</h4>
      <p>
        <em> {props.title} - {props.owner}</em>
      </p>
    </section>
  );
};

export default SelectBoard;
