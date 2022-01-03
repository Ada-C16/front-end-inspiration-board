import './App.css';
import Sticky from './components/Sticky';


// We need to create a function that makes an API call to get all the boards from the database to populate the dropdown
// We need to create a function that makes an API call to get all the stickies from the database for specific selected board
// Create a function that generates a sticky component for each sticky in the database

const stickyData = {
  "stickies": [
    {
      "text": "This is a sticky",
      "timestamp": "2019-01-01",
      "id": "1",
      "likes": 0
    },
    {
      "text": "This is another sticky",
      "timestamp": "2019-01-01",
      "id": "2",
      "likes": 2
    },
    {
      "text": "This is a third sticky",
      "timestamp": "2019-01-01",
      "id": "3",
      "likes": 3
    },
    {
      "text": "This is a fourth sticky",
      "timestamp": "2019-01-01",
      "id": "4",
      "likes": 4
    }
  ]
};


const createStickies = (stickyData) => {
  return stickyData['stickies'].map(sticky => {
    return <Sticky key={sticky.id} text={sticky.text} timestamp={sticky.timestamp} id={sticky.id} likes={sticky.likes} onDelete={onDelete} onLike={onLike} />;
  });
}

const onDelete = (stickyID) => {
  // make an API call to DELETE a sticky when clicked
};

const onLike = (stickyID) => {
  // make an API call to PATCH sticky -- adds OR subtracts 1 like when clicked
};

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

        {/* this essentially is the board displayed */}
        <section className="stickies-container">
          <div className="stickies-subcontainer">
            {/* put sticky components here */}
              {createStickies(stickyData)}
          </div>
        </section>
      </div>
  );
}

export default App;
