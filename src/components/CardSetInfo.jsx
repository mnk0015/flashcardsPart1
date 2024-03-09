import React from 'react';

const CardSetInfo = ({ title, description, totalCards }) => {
  return (
    <div className="card-set-info">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Total Cards: {totalCards}</p>
    </div>
  );
};

export default CardSetInfo;
