import './App.css';
import Player from './Player';
import CardList from './CardList';
import ExecutePassButton from './ExecutePassButton';
import { useGameContext } from './CardProvider';

function App() {
  const {
    playerOneHand, playerTwoHand, playerThreeHand,
    to, setTo,
    from, setFrom,
    selectedCard, setSelectedCard,
    deck, passCard
  } = useGameContext();
  return (
    <>
      <div>
        <h1>
          Card App
        </h1>
      </div>
      <div className="App">
        <section>
          {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
          <Player player={1} hand={playerOneHand} /> 
          {/* Player One Above is Reformatted */}
          <Player to={to} player={2} hand={playerTwoHand} setFrom={setFrom} selectedCard={selectedCard} setTo={setTo} setSelectedCard={setSelectedCard} />
          <Player to={to} player={3} hand={playerThreeHand} setFrom={setFrom} selectedCard={selectedCard} setTo={setTo} setSelectedCard={setSelectedCard} />
          <CardList cards={deck} selectedCard={selectedCard} setSelectedCard={setSelectedCard} setFrom={setFrom} player={'deck'} />
        </section>
        <section>
          {
            selectedCard && <ExecutePassButton passCard={passCard} from={from} to={to} selectedCard={selectedCard} />
          }
        </section>
      </div>
    </>
  );
}

export default App;
