import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="main-container">
        <section className="sidebar-container">
          <div className="sidebar-header">
            <h1 className="inspo-header">Name of Current Board</h1>
          </div>
          <div className="board-container">
            <div className="submit-board">
            Submit a new board: 
            <form>
              <input type="text" />
              <input type="submit" />
              </form>
            </div>
            <div className="select-board">
            Select an existing Board: 
              <form>
                <label for="boards"></label>
                <select name="boards">
                  <option value="board1">Board1</option>
                  <option value="board2">Board2</option>
                  <option value="board3">Board3</option>
                </select>
              </form>
            </div>
          </div>
          <div className="sticky-submit-container">
          Submit a new sticky: 
            <form>
              <input type="text" />
              <input type="submit" />
            </form>
          </div>
        </section>
        <section className="stickies-container">
          <div className="stickies-subcontainer">
            {/* eventually add a scrollbar to THIS container */}
            <div className="sticky">
              <article className="sticky-text">
              I am a sticky 1! I have a lot of text in me.
              This is a really long text that will wrap around to the next line.
              We are just testing out what a long sticky looks like. 
              I hope that the text is scrollable.
              Meep.
              Honk if you bonk.
              Stinky stink stinky.
              </article>
            </div>
            <div className="sticky">
              <article className="sticky-text">
              I am a sticky 1! I have a lot of text in me.
              This is a really long text that will wrap around to the next line.
              We are just testing out what a long sticky looks like. 
              I hope that the text is scrollable.
              Meep.
              Honk if you bonk.
              Stinky stink stinky.
              </article>
            </div>
            <div className="sticky">
              <article className="sticky-text">
              I am a sticky 1! I have a lot of text in me.
              This is a really long text that will wrap around to the next line.
              We are just testing out what a long sticky looks like. 
              I hope that the text is scrollable.
              Meep.
              Honk if you bonk.
              Stinky stink stinky.
              </article>
            </div>
            <div className="sticky">
              <article className="sticky-text">
              I am a sticky 1! I have a lot of text in me.
              This is a really long text that will wrap around to the next line.
              We are just testing out what a long sticky looks like. 
              I hope that the text is scrollable.
              Meep.
              Honk if you bonk.
              Stinky stink stinky.
              </article>
            </div>
            <div className="sticky">
              <article className="sticky-text">
              I am a sticky 1! I have a lot of text in me.
              This is a really long text that will wrap around to the next line.
              We are just testing out what a long sticky looks like. 
              I hope that the text is scrollable.
              Meep.
              Honk if you bonk.
              Stinky stink stinky.
              </article>
            </div>
            <div className="sticky">
              <article className="sticky-text">
              I am a sticky 1! I have a lot of text in me.
              This is a really long text that will wrap around to the next line.
              We are just testing out what a long sticky looks like. 
              I hope that the text is scrollable.
              Meep.
              Honk if you bonk.
              Stinky stink stinky.
              </article>
            </div>
            <div className="sticky">
              <article className="sticky-text">
              I am a sticky 1! I have a lot of text in me.
              This is a really long text that will wrap around to the next line.
              We are just testing out what a long sticky looks like. 
              I hope that the text is scrollable.
              Meep.
              Honk if you bonk.
              Stinky stink stinky.
              </article>
            </div>
            
            
          </div>
        </section>
      </div>
  );
}

export default App;
