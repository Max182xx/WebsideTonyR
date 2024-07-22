import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

// Composant racine de mon application. Rend la structure principale de l'interface utilisateur
function App() {
  library.add(faShareNodes);

  return (
    <div className="App">
      <Navigation />
      <main className="main-content">
        <Outlet />

      </main>
      <Footer />
    </div>
  );
}

export default App;
