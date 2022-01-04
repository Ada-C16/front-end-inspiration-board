import PropTypes from "prop-types";
import React from "react";
import Card from "./Card";
import "./CardList.css";

// CardList will render cards

const CardList = () => {
  return (
    <div className="card-container">
      <Card />
    </div>
  );
};

// CardList.propTypes = {
// };

export default CardList;
