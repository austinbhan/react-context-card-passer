// Step 1, Create File

import { createContext, useContext, useState } from 'react';
import initialCards from './cards-data';

const GameContext = createContext();

// Step 2
export function GameProvider({ children }) {
// Step 3
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  // Step 5
  const stateAndSetters = {
    deck, setDeck,
    playerOneHand, setPlayerOneHand,
    selectedCard, setSelectedCard,
    playerTwoHand, setPlayerTwoHand,
    playerThreeHand, setPlayerThreeHand,
    from, setFrom,
    to, setTo
  };

  // Step 6
  return <GameContext.Provider value={stateAndSetters}>
    {children}
  </GameContext.Provider>;
}

// Step 4
export function useGameContext() {
  return useContext(GameContext);
}