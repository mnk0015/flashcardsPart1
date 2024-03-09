import React from 'react';

const NextButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="next-button">
      Next
    </button>
  );
};

export default NextButton;