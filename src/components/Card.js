import React from 'react';
import './Card.css'

const Card = (props) => {

  return <div className="card">
      <img src={props.image} alt={`${props.suit} of ${props.value}`} className="card--image" />
    </div>
}

export default Card;