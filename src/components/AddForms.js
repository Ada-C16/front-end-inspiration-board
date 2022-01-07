import AddCardForm from "./AddCardForm";
import AddBoardForm from "./AddBoardForm";
import "./AddForms.css";

const AddForms = ({ addNewCard, cardList, selectedBoard, addNewBoard }) => {
  return (
    <>
      <div className="form__header">
        <h1>Add a New Card or Board</h1>
      </div>

      <section className="forms-panel">
        <div>
          <AddBoardForm addNewBoard={addNewBoard} />
          <p></p>
        </div>

        <div>
          <AddCardForm
            addThisNewCard={addNewCard}
            cardList={cardList}
            selectedBoard={selectedBoard}
          />
        </div>
      </section>
    </>
  );
};

export default AddForms;
