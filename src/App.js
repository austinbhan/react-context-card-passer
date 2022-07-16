import './App.css';
import Player from './Player';
import CardList from './CardList';
import ExecutePassButton from './ExecutePassButton';
import { useGameContext } from './CardProvider';

function App() {
  const {
    playerOneHand, playerTwoHand, playerThreeHand,
    selectedCard,
    deck
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
          <Player player={2} hand={playerTwoHand} />
          <Player player={3} hand={playerThreeHand} />
          <CardList cards={deck} player={'deck'} />
        </section>
        <section>
          {
            selectedCard && <ExecutePassButton />
          }
        </section>
      </div>
    </>
  );
}

export default App;
