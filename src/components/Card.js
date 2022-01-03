

const Card = (props) => {

  return (
    <section id ="card-form" className = "form">
      <h2>Sort Cards By</h2>
      <select id = "card-sort" onChange = {props.sortCards}>
          <option value="" key="">select</option>
          <option value="sort by id" key = "sort by id">sort by id</option>
          <option value="sort by likes" key = "sort by likes">sort by likes</option>
          <option value="sort alphabetically" key = "sort alphabetically">sort alphabetically</option>
          
      </select>
      <h2>Create a New Card</h2>
        <form>
        <label>Message</label>
        <input id = "message-input" minLength = {0} maxLength = {40} type="text" value={props.cardMessage} onChange={props.inputCardMessage}></input> 
        <p id="preview">Preview: {props.cardMessage}</p>
        <input className = "submit-button" onClick={props.submitNewCard} type="submit" value="Make Card"></input>
        </form>
    </section>
  );
};

export default Card;