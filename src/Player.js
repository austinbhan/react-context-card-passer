import React from 'react';
import CardList from './CardList';
import { useGameContext } from './CardProvider';

export default function Player({ player, hand }) {
  const { setTo, setFrom, setSelectedCard, selectedCard, to } = useGameContext();
  return (
    <div className={`player ${to === player ? 'selected-player' : ''}`} onClick={() => setTo(player)}>
      <p>Player {player}</p>
      <CardList
        player={player}
        cards={hand}
        setFrom={setFrom}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard} />
    </div>
  );
}
