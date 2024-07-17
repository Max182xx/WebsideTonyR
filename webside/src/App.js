import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";

// Composant racine de mon application. Rend la structure principale de l'interface utilisateur
function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
