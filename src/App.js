import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {

const getBoards=()=>{
  //Need a axios call to an api that returns the board information.  Expect a json like:
  // [{"board_id":"dslk-ds-d-382109", "boardTitle":"Go Grrrls", "ModifiedDateTime":"2021-12-31 12:00 AM", "TotalBoardLikes": 33, "TotalCards": 4, "owner":"Lety"},
  // {"board_id":"dslk89-dssf-3729", "boardTitle":"Ada Inspires", "ModifiedDateTime":"2021-12-11 12:00 AM", "TotalBoardLikes": 3, "TotalCards": 1, "owner":"Eunice"}]


}

  return (
      <div className="row">
        <div className="col-1 navigation-col">
          {/* Navigation */}
          <nav>
              <div className="navhead">Boards</div>
                  <ul>
                  <li className='boardlink' id='Board1'><a className="navsublink" href="#">Board 1</a></li>
                  <li className='boardlink' id='Board2'><a className="navsublink" href="#">Board 2</a></li>         
                  </ul>


              <div>
                <button>Create A Board</button>
              </div>
                
              <div className="navhead">Across All Boards</div>
                  <ul>
                  <li className='boardlink' id='AllMostPopular'><a className="navsublink" href="#">Most Popular</a></li>
                  <li className='boardlink' id='AllNewest'><a className="navsublink" href="#">Newest</a></li>         
                  </ul>


          </nav>
        </div>
        <div className="col-11 container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Test</h1>
        </div>
      </div>
  );
}

export default App;
