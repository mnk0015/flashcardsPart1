// components/FlashcardGame.jsx
import React, { useState } from "react";
import Flashcard from "./Flashcard";

const FlashcardGame = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const cards = [
    { question: "Who is Colonel Mustard in the conservatory with?", answer: "The lead pipe" },
    { question: "What's this dog?", answer: "It's a pug" },
    // Add more cards as needed
  ];

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="FlashcardGame">
      <h2>Celebrity Guessing Game</h2>
      <div className="CardContainer">
        <Flashcard {...cards[currentCardIndex]} />
      </div>
      <button onClick={handleNextCard}>Next</button>
    </div>
  );
};

export default FlashcardGame;
