import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faPaintbrush } from "@fortawesome/free-solid-svg-icons";
import { useResponsiveMode } from "../components/ResponsiveModeContext";
import "../styles/Accueil.css";

const AccueilPage = () => {
  //state when the menu is clicked
  const [isClicked, setIsClicked] = useState(false);
  const { isResponsive } = useResponsiveMode();

  // Call useResponsiveMode at the top level
  //arrow function when is cliked
  const pop = () => {
    setIsClicked(!isClicked);
  };

  //items position when is cliked
  const item1Style = {
    transform: isClicked ? "translateX(-250px)" : "translateX(0)",
    transition: "transform 0.5s ease-in-out",
  };
  const item2Style = {
    transform: isClicked ? "translateY(-250px)" : "translateX(0)",
    transition: "transform 0.5s ease-in-out",
  };
  const item3Style = {
    transform: isClicked ? "translateX(250px)" : "translateX(0)",
    transition: "transform 0.5s ease-in-out",
  };
  return (
    <>
      {!isResponsive ? (
        <main className="main-accueil">
          {/* -------- menu ------------*/}
          <div className="menu" onClick={pop}>
            <i className="logo"></i>
          </div>
          {/* -------- menu items with icons ------------*/}
          <div className="menu-items">
            <div className="item1" id="item1" style={item1Style}>
              <center>
                <a href="/">
                  <FontAwesomeIcon className="fa" icon={faHouse} />
                </a>
              </center>
            </div>
            <div className="item2" id="item2" style={item2Style}>
              <center>
                <a href="Portfolio">
                  <FontAwesomeIcon className="fa" icon={faPalette} />
                </a>
              </center>
            </div>
            <div className="item3" id="item3" style={item3Style}>
              <center>
                <a href="Contact">
                  <FontAwesomeIcon className="fa" icon={faPaintbrush} />
                </a>
              </center>
            </div>
          </div>
        </main>
      ) : (
        <main>
          <div className="main">
            {/* Éléments spécifiques pour le mode responsive */}
            <div>
            <h1>Bonjour, accueil responsive!</h1>
            <p>Ceci est une version adaptée pour les petits écrans.</p>
          </div>
          
          </div>
        </main>
      )}
    </>
  );
};

export default AccueilPage;
