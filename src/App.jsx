import React, { useState } from 'react';
import CardSetInfo from './components/CardSetInfo';
import Card from './components/Card';
import NextButton from './components/NextButton';

const cardPairs = [ /* Array of card pairs */ ];

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    const newIndex = Math.floor(Math.random() * cardPairs.length);
    setCurrentCardIndex(newIndex);
  };

  return (
    <div className="app">
      <CardSetInfo title="Guess the Celebrity" description="You’re Colonel Mustard in the conservatory with the lead pipe 👀" totalCards={cardPairs.length} />
      <Card card={cardPairs[currentCardIndex]} />
      <NextButton onClick={handleNextCard} />
    </div>
  );
};

export default App;
