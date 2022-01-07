import { useState } from "react";

const CardColor = ({ onSelectColor }) => {
  const [cardColor, setCardColor] = useState("#9bf6ff");

  // constHandleColorChange = (event) => {
  //   setCardColor();
  // };

  return (
    <div className="card-color">
      <h3>Pick A Card Color</h3>
      <div id="color-buttons" onClick={onSelectColor}>
        <button id="red">Red</button>
        <button id="orange">Orange</button>
        <button id="yellow">Yellow</button>
        <button id="green">Green</button>
        <button id="blue">Blue</button>
        <button id="purple">Purple</button>
        {/* <button id="#">Pink</button> */}
      </div>
    </div>
  );
};

export default CardColor;
