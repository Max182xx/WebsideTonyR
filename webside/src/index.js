import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


/* Index.js est responsable de la création de l'instance de l'application 
et de la liaison de cette instance à un élément du DOM spécifique dans le document HTML */

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
