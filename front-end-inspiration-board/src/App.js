import './App.css';
import Boardz from './components/Boardz';
import CardDisplay from './components/CardDisplay'; 
import NewCardForm from './components/NewCardForm';
import NewBoardForm from './components/NewBoardForm';

function App() {
  
  return (
    <section>
      <header>
      </header>
      <body className='grid-layout-container'>
        <h1 className='site-title-block'>InspoBoard</h1>
        <Boardz />
        <NewCardForm />
        <NewBoardForm />
        <CardDisplay />
      </body>
    </section>
  );
}

export default App;
