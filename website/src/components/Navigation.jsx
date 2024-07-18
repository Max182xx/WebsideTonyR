import React, { useState } from "react";
import "../styles/Navigation.css";
import { Link } from "react-router-dom";

// Composant qui s'affiche sur toutes mes pages

function Navigation() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowlinks = () => {
    setShowLinks(!showLinks);
  };

  // Fonction pour gérer le clic sur n'importe quel lien
  const handleCloseMenu = () => {
    setShowLinks(false); // Ferme le menu lorsque n'importe quel lien est cliqué
  };

  return (
    <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="navbar_logo"> TonyR</div>
      <ul className="navbar_links">
        <li className="navbar_item slideInDown-1">
          <Link to="/" className="navbar_link" onClick={handleCloseMenu}>
            {" "}
            Accueil
          </Link>
        </li>
        <li className="navbar_item slideInDown-2">
          <Link to="apropos" className="navbar_link" onClick={handleCloseMenu}>
            {" "}
            A propos
          </Link>
        </li>
        <li className="navbar_item slideInDown-3">
          <Link to="contact" className="navbar_link" onClick={handleCloseMenu}>
            {" "}
            Contact
          </Link>
        </li>
        <li className="navbar_item slideInDown-4">
          <Link
            to="portfolio"
            className="navbar_link"
            onClick={handleCloseMenu}
          >
            {" "}
            Portfolio
          </Link>
        </li>
      </ul>
      <button className="navbar_burger" onClick={handleShowlinks}>
        <span className="burger-bar"></span>
      </button>
    </div>
  );
}

export default Navigation;
