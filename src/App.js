import "./App.css";
import BoardSelector from "./components/BoardSelector";
import BoardCreator from "./components/BoardCreator";
import CardCreator from "./components/CardCreator";
import IdeaBoard from "./components/IdeaBoard";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // TODO:  rename data to boards (a list of all board objects...)
  // TODO:  Save for later - create a setBoards function that will update this list.  That data will come from your backend.
  const [boards, setBoards] = useState([
    {
      board_id: 1,
      owner: "Zandra",
      title: "Test Board Z",
      cards: [
        {
          card_id: 1,
          likes_count: 0,
          message: "Z Here's my first card",
          board_id: 1,
        },
        {
          card_id: 2,
          likes_count: 0,
          message: "Z Here's my second card",
          board_id: 1,
        },
      ],
    },
    {
      board_id: 2,
      owner: "Mike",
      title: "Test Board M",
      cards: [
        {
          card_id: 3,
          likes_count: 0,
          message: "M Here's my first card",
          board_id: 2,
        },
        {
          card_id: 4,
          likes_count: 0,
          message: "M Here's my second card",
          board_id: 2,
        },
      ],
    },
  ]);

  // TODO: pass setBoard as a prop down to boardSelect.js and fire when the select dropdown list changes
  // TODO: board is now a single board object which you can pass down as a prop to the CardBoard.js component
  // TODO: It is likely not safe to assume there is at least one board.
  const [activeBoardId, setActiveBoardId] = useState(1); // the index of the current board in the boards array

  // this runs when react attempts to render this component
  // useEffect(() => {
  //   axios
  //     .get("https://inspiration-board-api.herokuapp.com/boards")
  //     .then((data) => {
  //       setBoards(data);
  //     })
  //     .catch((err) => {
  //       console.log("opps!", err);
  //     });
  // }, []);

  // find the board whose ID matches activeBoardId
  const activeBoard = boards.filter((b) => b.board_id === activeBoardId)[0];

  // HACK: since we're not connected to a back end yet, we need to generate
  // new IDs for boards and cards manually. Figure out the current max board
  // and card IDs so we can increment here, duplicating the DB's autoincrement
  // behavior. We should be able to remove this code later.
  let maxBoardId = 0;
  let maxCardId = 0;
  for (let i = 0; i < boards.length; i++) {
    const board = boards[i];
    if (board.board_id > maxBoardId) {
      maxBoardId = board.board_id;
    }
    for (let j = 0; j < board.cards.length; j++) {
      if (board.cards[j].card_id > maxCardId) {
        maxCardId = board.cards[j].card_id;
      }
    }
  }

  // TODO: Call API to create new board. This API will need to return
  // the ID of the new board. Do not use useEffect here because there is
  // no effect yet. The state won't change until AFTER we call setBoards
  // below. Alternate solution: do this here AND have a useEffect which
  // calls the back end. There are some advantages and disadvantages to
  // both.
  function createBoard(title, owner) {
    const newBoard = {
      // TODO: use new ID from API here rather than this hack.
      board_id: ++maxBoardId,
      owner: owner,
      title: title,
      cards: [],
    };
    setBoards((boards) => [...boards, newBoard]);
    setActiveBoardId(newBoard.board_id);
  }

  //********Adding new card to the current board *******
  const createCard = (message) => {
    const newCard = {
      // TODO: use new ID from API here rather than this hack.
      card_id: ++maxCardId,
      message: message,
      likes_count: 0,
      board_id: activeBoardId,
    };

    setBoards((boards) => {
      const newBoards = [];

      for (let i = 0; i < boards.length; i++) {
        const board = boards[i];
        // is the current board the active one?
        if (board.board_id === activeBoardId) {
          // If this is the board we're adding the new card to, then carefully
          // copy that board into a new object so we can add the new card
          // without modifying existing state.
          const newBoard = { ...board };
          newBoard.cards = [...board.cards, newCard];
          newBoards.push(newBoard);
        } else {
          // This is NOT the board we're looking for so just copy it into the new
          // boards array with no changes.
          newBoards.push(board);
        }
      }

      return newBoards;
    });
  };

  const deleteCard = (deletedCardId) => {
    setBoards((boards) =>
      boards.map((board) => {
        if (board.board_id !== activeBoardId) {
          return board;
        }

        const newBoard = { ...board };
        newBoard.cards = [...board.cards].filter(
          (card) => card.card_id !== deletedCardId
        );
        return newBoard;
      })
    );
  };

  const addLike = (addLikeCardId) => {
    setBoards((boards) =>
      boards.map((board) => {
        if (board.board_id !== activeBoardId) {
          return board;
        }

        const newBoard = { ...board };
        newBoard.cards = [...newBoard.cards].map((card) => {
          if (card.card_id === addLikeCardId) {
            const newCard = {
              ...card,
              likes_count: card.likes_count + 1,
            };
            return newCard;
          } else {
            return card;
          }
        });
        return newBoard;
      })
    );
  };

  //*********** end ********** */
  return (
    <div className="App">
      <header className="App-header">
        <h1>Symaveza's Inspiration Board</h1>
      </header>
      <main>
        <div className="top-container">
          <BoardSelector
            boards={boards}
            onBoardChanged={setActiveBoardId}
            currentTitleSelected={activeBoardId}
          />
          <BoardCreator onNewBoard={createBoard} />
          <CardCreator onNewCard={createCard} />
        </div>
        <div className="bottom-container">
          <IdeaBoard
            board={activeBoard}
            onDeleteCard={deleteCard}
            onAddLike={addLike}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
