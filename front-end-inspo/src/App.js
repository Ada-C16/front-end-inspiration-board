import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="main-container">
        <section className="sidebar-container">
          <div className="sidebar-header">
            <h1 className="inspo-header">Inspiration Board</h1>
          </div>
          <div className="board-container">
            <div className="submit-board">
            <form>
              <input type="text" />
              <input type="submit" />
              </form>
            </div>
            <div className="select-board">
              <form>
                <label for="boards">Select a Board:</label>
                <select name="boards">
                  <option value="board1">Board1</option>
                  <option value="board2">Board2</option>
                  <option value="board3">Board3</option>
                </select>
              </form>
            </div>
          </div>
          <div className="sticky-submit-container">
            Placeholder text
          </div>
        </section>
        <section className="stickies-container">
          <div className="stickies-subcontainer">
            {/* eventually add a scrollbar to THIS container */}
            <div className="sticky">
              I am a sticky 1!
            </div>
            <div className="sticky">
              I am a sticky 2!
            </div>
            <div className="sticky">
              I am a sticky 3!
            </div>
            <div className="sticky">
              I am a sticky 4!
            </div>
            <div className="sticky">
              I am a sticky 5!
            </div>
            <div className="sticky">
              I am a sticky 6!
            </div>
            <div className="sticky">
              I am a sticky 7!
            </div>
            <div className="sticky">
              I am a sticky 8!
            </div>
            <div className="sticky">
              I am a sticky 9!
            </div>
            <div className="sticky">
              I am a sticky 10!
            </div>
            
          </div>
        </section>
      </div>
  );
}

export default App;
