import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="card">
      <h2>{card.question}</h2>
    </div>
  );
};

export default Card;
