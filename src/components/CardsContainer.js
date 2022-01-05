import PropTypes from "prop-types";
import "./CardsContainer.css";
import Card from "./Card.js";
import NewCard from "./NewCard.js";
import axios from "axios";
import { useState, useEffect } from "react";

const CardsContainer = (props) => {
  const [cardsData, setCardsData] = useState([]);
  const [sortType, setSortType] = useState("id");

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${props.currentBoard.id}/cards`
      )
      .then((response) => {
        // console.log("axios response", response);
        setSortType("id");
        setCardsData(response.data);
        console.log(cardsData);
      })
      .catch((error) => {
        console.log(error);
        // Improve error handling
      });
  }, [props.currentBoard]);

  const deleteCard = (deletedCard) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${deletedCard.id}`)
      .then((response) => {
        // console.log(response);
        const updatedCardsData = cardsData.filter(
          (card) => card.id !== deletedCard.id
        );
        setCardsData(updatedCardsData);
      })
      .catch((error) => {
        console.log(error);
        // Improve error handling
      });
  };

  const cardPlusOne = (likedCard) => {
    axios
      .put(
        `${process.env.REACT_APP_BACKEND_URL}/cards/${likedCard.id}/add_like`
      )
      .then((response) => {
        // console.log(response);
        const updatedCardsData = cardsData.map((card) => {
          return card.id === likedCard.id
            ? { ...card, likes_count: card.likes_count + 1 }
            : card;
        });
        setCardsData(updatedCardsData);
      });
  };

  const CardList = cardsData.map((card) => {
    return (
      <Card
        key={card.id}
        cardData={card}
        deleteCard={deleteCard}
        cardPlusOne={cardPlusOne}
      />
    );
  });

  const createNewCard = (newCardMessage) => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${props.currentBoard.id}/cards`,
        newCardMessage
      )
      .then((response) => {
        // console.log("Response:", response);
        const cards = [...cardsData];
        cards.push(response.data);
        setCardsData(cards);
      })
      .catch((error) => {
        console.log("Error:", error);
        // Improve error handling
      });
  };

  useEffect(() => {
    const sortArray = (type) => {
      let sorted = [];
      if (type === "message az") {
        sorted = [...cardsData].sort((a, b) =>
          a.message.localeCompare(b.message)
        );
      } else if (type === "message za") {
        sorted = [...cardsData].sort((a, b) =>
          b.message.localeCompare(a.message)
        );
      } else if (type === "id lh") {
        sorted = [...cardsData].sort((a, b) => a["id"] - b["id"]);
      } else if (type === "id hl") {
        sorted = [...cardsData].sort((a, b) => b["id"] - a["id"]);
      } else if (type === "likes lh") {
        sorted = [...cardsData].sort(
          (a, b) => a["likes_count"] - b["likes_count"]
        );
      } else if (type === "likes hl") {
        sorted = [...cardsData].sort(
          (a, b) => b["likes_count"] - a["likes_count"]
        );
      }
      setCardsData(sorted);
      console.log("sorted:", sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <div className="one-board-wrapper">
      <div className="board-header">
        <h2 className="board-title">{props.currentBoard.title}</h2>
        <h3 className="board-owner">{props.currentBoard.owner_name}</h3>
      </div>
      <div className="new-card-submission-container">
        <NewCard createNewCard={createNewCard} />
      </div>
      <br />
      {cardsData.length > 0 ? (
        <div className="sort">
          <span>Sort by </span>
          <select
            onChange={(event) => setSortType(event.target.value)}
            value={sortType}
          >
            <option value="id lh">ID low to high</option>
            <option value="id hl">ID high to low</option>
            <option value="message az">Message a-z</option>
            <option value="message za">Message z-a</option>
            <option value="likes lh">Likes low to high</option>
            <option value="likes hl">Likes high to low</option>
          </select>
        </div>
      ) : null}

      <section className="cards-container">{CardList}</section>
    </div>
  );
};

CardsContainer.propTypes = {
  currentBoard: PropTypes.shape({
    id: PropTypes.number.isRequired,
    owner_name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default CardsContainer;
