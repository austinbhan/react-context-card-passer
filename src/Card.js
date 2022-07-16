import React from 'react';
import { useGameContext } from './CardProvider';
import './cards-data.js';

const suitMap = {
  hearts: '❤️',
  spades: '♠️',
  clubs: '♣️',
  diamonds: '♦️',
};

export default function Card({ card, player }) {
  const { selectedCard, setSelectedCard, setFrom } = useGameContext();
  function handleCardClick() {
    setFrom(player);
    setSelectedCard(card);
  }
  
  // if there IS a selected deck, and it has the same value and suit as THIS deck, style it differently
  const thisIsTheSelectedCard = selectedCard && selectedCard.value === card.value && selectedCard.suit === card.suit;


  return (
    <div className={`${thisIsTheSelectedCard ? 'selected' : ''} card`} 
      onClick={handleCardClick}>
      <div>{suitMap[card.suit]}</div>
      <div>{card.value}</div>
    </div>
  );
}
