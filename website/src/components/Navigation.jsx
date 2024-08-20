import React, { useState, useEffect } from "react";
import "../styles/Navigation.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { ResponsiveModeProvider } from "./ResponsiveModeContext";

function Navigation({ children }) {
  const [showLinks, setShowLinks] = useState(false);

  const [isResponsiveMode, setIsResponsiveMode] = useState(
    window.innerWidth <= 908
  );

  // Utilisation de useLocation pour exclure la navbar de la page d'accueil
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleResize = () => {
      setIsResponsiveMode(window.innerWidth <= 908);
    };

    // Assure l'affiche du menu burger quand la fenêtre est redimensionné
    window.addEventListener("resize", handleResize);

    // Nettoyer l'écouteur d'événements lors du démontage du composant pour éviter les fuites de mémoire
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleShowlinks = () => {
    setShowLinks(!showLinks);
  };

  // Fonction pour gérer le clic sur n'importe quel lien
  const handleCloseMenu = () => {
    setShowLinks(false); // Ferme le menu lorsque n'importe quel lien est cliqué
  };
  if (!(isHomePage && !isResponsiveMode)) {
    return (
      <ResponsiveModeProvider>
        <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>

            {/* Elément qui forme la séparation de couleur dans ma navbar  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,0L1440,256L1440,320L0,320Z"
            ></path>
          </svg>
          <div className="navbar_logo">
            <Link to="/" className="navbar_logo_link">
              <img src={logo} alt="Logo" className="logo-image" />
            </Link>{" "}
          </div>

          <ul className="navbar_links">
            <li className="navbar_item slideInDown-1">
              <Link to="/" className="navbar_link" onClick={handleCloseMenu}>
                {" "}
                Accueil
              </Link>
            </li>
            <li className="navbar_item slideInDown-2">
              <Link
                to="apropos"
                className="navbar_link"
                onClick={handleCloseMenu}
              >
                {" "}
                A propos
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
            <li className="navbar_item slideInDown-3">
              <Link
                to="asavoir"
                className="navbar_link"
                onClick={handleCloseMenu}
              >
                {" "}
                A savoir
              </Link>
            </li>
            <li className="navbar_item slideInDown-3">
              <Link
                to="contact"
                className="navbar_link"
                onClick={handleCloseMenu}
              >
                {" "}
                Contact
              </Link>
            </li>
          </ul>
          {isResponsiveMode && (
            <button
              className="navbar_burger"
              onClick={() => setShowLinks(!showLinks)}
            >
              <span className="burger-bar"></span>
            </button>
          )}
        </div>
      </ResponsiveModeProvider>
    );
  }
  return null; // Ne rien rendre si le menu doit être caché
}

export default Navigation;
