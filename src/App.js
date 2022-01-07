import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";

import AddForms from "./components/AddForms";
import BoardList from "./components/BoardList";
import Card from "./components/Card";

function App() {
  const [allBoardsList, setAllBoardsList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState([]);
  const [cardsList, setCardsList] = useState([]);
  const [boardFormDisplay, setBoardFormDisplay] = useState(false);

  // ======= GET ALL BOARDS =======
  useEffect(() => {
    axios
      .get("https://mando-backend.herokuapp.com/boards")
      .then((response) => {
        console.log(response.data);
        setAllBoardsList([...response.data]);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("No boards found");
      });
  }, []);

  const selectBoard = (board) => {
    setSelectedBoard(board);
  };

  // ======= GET CARDS FOR SELECTED BOARD =======
  useEffect(() => {
    axios
      .get(
        `https://mando-backend.herokuapp.com/boards/${selectedBoard.id}/cards`
      )
      .then((response) => {
        console.log(response.data);
        setCardsList([...response.data]);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [selectedBoard]);

  const individualCardComponents = cardsList.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        message={card.message}
        likes={card.likes}
      />
    );
  });

  // ======= ADD NEW BOARD =======

  const addNewBoard = (newBoard) => {
    // const newBoard = {
    //   title: board.title,
    //   owner: board.owner,
    // };
    axios
      .post("https://mando-backend.herokuapp.com/boards", newBoard)
      .then((response) => {
        console.log(response);
        const newBoards = [...allBoardsList];
        newBoards["id"].push(response.data.board.id);
        newBoards.push(newBoard);
        setAllBoardsList(newBoards);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // ======= ADD NEW CARD =======

  const addNewCard = (addNewCard, selectedBoard) => {
    const newCard = {
      message: newCard.message,
    };

    axios
      .post(
        `https://mando-backend.herokuapp.com/boards/${selectedBoard.id}/cards`,
        newCard
      )
      .then((response) => {
        console.log(response.data);
        const newCardsList = [...cardsList];
        newCardsList.push(response.data);
        setCardsList(newCardsList);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // ======= DELETE A CARD =======

  const deleteCard = (card) => {
    axios
      .delete(
        `https://mando-backend.herokuapp.com/boards/${selectedBoard.id}/cards/${card.id}`
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log("Error:", error));
  };

  // ======= TOGGLE FORM =======

  const [buttonTextForm, setButtonTextForm] = useState(
    "Display Add Board Form"
  );

  const toggleBoardFormButton = () => {
    setBoardFormDisplay(!boardFormDisplay);
    if (boardFormDisplay) {
      setButtonTextForm("Hide Add Board Form");
    } else {
      setButtonTextForm("Display Add Board Form");
    }
  };

  // const toggleBoardForm = () => {
  //   if (boardFormDisplay === false) {
  //     return (
  //       <section>
  //         <h3>boardDispaly is false</h3>
  //         <AddForms />
  //         <button className="button" onClick={handleToggleBoardForm}>
  //           {" "}
  //           {toggleBoardForm} false
  //         </button>
  //       </section>
  //     );
  //   } else if (boardFormDisplay === true) {
  //     return (
  //       <section>
  //         <h3>boardDispaly is true</h3>
  //         <button className="button" onClick={handleToggleBoardForm}>
  //           {toggleBoardForm} true
  //         </button>
  //       </section>
  //     );
  //   }
  // };
  // const handleToggleBoardForm = () => {
  //   if (boardFormDisplay === false) {
  //     setBoardFormDisplay(true);
  //   } else if (boardFormDisplay === true) {
  //     setBoardFormDisplay(false);
  //   }
  // };

  return (
    <>
      <Header />
      <div className="App">
        <section>
          <BoardList
            boards={allBoardsList}
            OnSelectBoard={selectBoard}
            selectedBoard={selectedBoard}
          />
        </section>

        <section className="card__display">{individualCardComponents}</section>

        <section>
          <AddForms />
          <button className="button" onClick={toggleBoardFormButton}>
            {buttonTextForm}
          </button>
        </section>
      </div>
    </>
  );
}

export default App;
