import React from "react";
import './Card.css';


const Card = ({message, deleteCard, id}) => {
  console.log('*********************')
  console.log(id)
  return (
    <div className="card">
      <p>{message}</p>
      <div className="reactions">
        <span>♥️</span>
        <button>+1</button>
        <button onClick={()=>deleteCard(id)}>delete</button>
      </div>
    </div> 
  )
}


export default Card;