import React from "react";

const Cards = (props) => {
  const likeCard = (id) => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/cards/${id}/like`)
      .then(() => {
        // update cardsComponents instead
        // cardsComponents will also have a dependency error
        if (cardsComponents) {
          const newCardsComponents = cardsComponents.map((cardComponent) => {
            // if cardComponent.id == id 
              // cardComponent.likes_count += 1
            return cardComponent
          })
          setCardsComponents(newCardsComponents);
        }
      })
      .catch(() => {
        // add default display for cant load
        setCardsComponents([]); // maybe find way to make this a string in page          
      });
  };

  const deleteCard = (id) => {
    // axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${id}`)
    // .then(() => {
    //   //removeCard(id);
    // })
    // .catch(()=> {
    //   //removeCard(id);
    // });
  };
  return (
    <div className = "card-view">
      <div>{props.message}</div>
      <div className="card-buttons" id={props.id}>
        <p>{props.likes_count}</p>
        <button className="like" onClick={likeCard(props.id)}>+1</button> 
        <button className="delete" onClick={deleteCard(props.id)}>delete</button>
      </div>
    </div>
  );
};

export default Cards;
