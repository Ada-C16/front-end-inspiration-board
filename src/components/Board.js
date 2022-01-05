import React from "react";




const Board = (props) => {
  
  return(

    <div>
      
          <li onClick={()=> {props.setActiveBoardCallback(props)}}> {props.title}</li>

    </div>
    


)

};






export default Board;
