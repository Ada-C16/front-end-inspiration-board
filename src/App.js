import React, { useState, useEffect } from "react";
import axios from "axios";
import CardList from "./components/CardList";
import "./App.css";

const URL = "https://kinder-code.herokuapp.com";

function App() {
  /// CREATE NEW BOARD- (TEXT INPUTS----TITLE, OWNER NAME) SUBMIT BUTTON
  //CREATE NEW CARDS - CREATE NEW CARD- (TEXT INPUTS----MESSAGE) SUBMIT BUTTON

  ///BOARDS- DINAMIC TEXT LIST( LIST OF BOARDS---EACH BOARD TITLE IS BUTTON)
  //SELECTED BOARD- WHEN BOARD TITLE CLICKED IN BOARDS---- DISPLAYS THE TITLE OF BOARD

  ///DISPLAY CARDS--- SHOWS NAME OF SELECTED BOARD--- SHOWS CARDS( LIKED(DIPLAYS LIKES), DELETED)

  return (
    <body>
      <div className="App">
        <div class="page-container">
          <div class="content-container">
            <h1>Inspiration Board</h1>

            <section class="boards-container">
              <section>
                <h2>Boards</h2>
                <ol class="boards-list">
                  <li> Pick me up!</li>
                </ol>
              </section>

              <section id="selected-boards-section">
                <h3>Selected Board</h3>
                <p>Select a Board from the Board List!</p>
              </section>

              <section class="new-board-form-container">
                <h4>Create a New Board</h4>
                <form class="new-board-form">
                  <label>Title</label>
                  <input type="text" class="invalid-form-input" value="" />
                  <label>Owner's Name</label>
                  <input type="text" class="invalid-form-input" value="" />
                  <p>Preview: - </p>
                  <input
                    type="Submit"
                    disabled=""
                    class="new-board-form-submit-btn"
                  />
                </form>
                <span class="new-board-form-toggle-btn">
                  Hide New Board Form
                </span>
              </section>
            </section>
          </div>
          <section>
            <CardList />
          </section>
          <footer>
            <span>This is a demo! Please be gentle!</span>
          </footer>
        </div>
      </div>
    </body>
  );
}

export default App;
