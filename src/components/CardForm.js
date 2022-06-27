import "./CardForm.css";

const CardForm = (props) => {
  return (
    <div className="container card-form pt-3">
      <h2>Create a Card</h2>
      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <label htmlFor="cardMessage">Message:</label>
          <textarea
            className="form-control"
            id="cardMessage"
            rows="5"
            value={props.value.message}
            onChange={props.onCardChange}
          ></textarea>
          <p>
            {props.cardFormIsValid
              ? ""
              : "Error: Message is either blank or too long."}
          </p>
        </div>
        <input type="submit" value="Add Card" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default CardForm;
