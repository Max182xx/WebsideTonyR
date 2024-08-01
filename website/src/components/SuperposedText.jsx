import React from 'react';
import '../styles/SuperposedText.css';

/* Composant pour superposés du texte */
const SuperposedText = ({ children }) => {
  return (
    <div className="superposed-text-container">
      {children}
    </div>
  );
};

export default SuperposedText;