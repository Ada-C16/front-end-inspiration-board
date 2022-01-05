import PropTypes from "prop-types";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";
import "./CardList.css";

// like route --->  /cards/<card_id>/like
const URL = "https://knee-jerk-reaction-inspiration.herokuapp.com";

const CardList = () => {
  // state for cards
  const [cards, setCards] = useState([]);
  const getCards = () => {
    axios.get(`${URL}/board_id/cards`).then((response) => {
      console.log(response.data);
      const newCards = response.data.map((card) => {
        return {
          message: card.message,
          likes_count: card.likes_count,
          // ?board or card id?
        };
      });
    });
  };

  return (
    <div className="card-container">
      <Card />
    </div>
  );
};

// CardList.propTypes = {
// };

export default CardList;
