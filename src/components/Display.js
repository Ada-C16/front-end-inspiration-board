import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Display.css";

const Display = (props) => {


  return (
    <div className="display-component">
      <h2 className="board-title">
        <span>
          "{props.title}" by {props.owner}
        </span>
      </h2>
      <div className="cards-display">{props.cardsComponents}</div>
    </div>
  );
};

export default Display;
