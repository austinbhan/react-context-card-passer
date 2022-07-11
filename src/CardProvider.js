import { createContext, useContext, useState } from 'react';
import initialCards from './cards-data';

const GameContext = createContext();

export function GameProvider({ children }) {
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

}

export function useGameContext() {
  return useContext(GameContext);
}