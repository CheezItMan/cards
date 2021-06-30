import React from 'react';
import Card from './Card';

import './Hand.css';

const Hand = (props) => {
  const hand = props.cards.map((card) => {
    return <Card key={card.id} image={card.image} suit={card.suit} value={card.value} />
  });

  return <section className="hand">
    {hand}
  </section>
}

export default Hand;