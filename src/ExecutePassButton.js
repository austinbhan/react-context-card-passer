import React from 'react';
import Card from './Card';
import { useGameContext } from './CardProvider';

export default function ExecutePassButton() {
  const { passCard, from, to, selectedCard } = useGameContext();

  return (
    <div className='execute-button' onClick={() => passCard(selectedCard)}>
        Pass <Card card={selectedCard} /> from {from} to {to}
    </div>
  );
}
