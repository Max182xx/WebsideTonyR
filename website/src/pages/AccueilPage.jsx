import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faPaintbrush } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useResponsiveMode } from "../components/ResponsiveModeContext";
import "../styles/Accueil.css";
import { Link } from "react-router-dom";
import SuperposedText from "../components/SuperposedText";

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
  const item4Style = {
    transform: isClicked ? "translateY(250px)" : "translateX(0)",
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
            <div className="item1 hover-target" id="item1" style={item1Style}>
              <a href="apropos">
                <center>
                  <FontAwesomeIcon className="fa" icon={faInfo} />
                  <div className="text-item">
                    <p> A propos </p>
                  </div>
                </center>
              </a>
            </div>

            <div className="item2 hover-target" id="item2" style={item2Style}>
              <a href="portfolio">
                <center>
                  <FontAwesomeIcon className="fa" icon={faPalette} />
                  <div className="text-item">
                    <p> Portfolio </p>
                  </div>
                </center>
              </a>
            </div>

            <div className="item3 hover-target" id="item3" style={item3Style}>
              <a href="asavoir">
                <center>
                  <FontAwesomeIcon className="fa" icon={faPaintbrush} />
                  <div className="text-item">
                    <p> A savoir </p>
                  </div>
                </center>
              </a>
            </div>

            <div className="item4 hover-target" id="item4" style={item4Style}>
              <a href="conctact">
                <center>
                  <FontAwesomeIcon className="fa" icon={faEnvelope} />
                  <div className="text-item">
                    <p> Contact </p>
                  </div>
                </center>
              </a>
            </div>
          </div>
        </main>
      ) : (
        <main className="main-responsive">
          {/* Éléments spécifiques pour le mode responsive */}
          <div className="menu-image">
            <h1>Bienvenue sur le site de TONYR</h1>

            {/* -------- menu ------------*/}
            <Link to="apropos">
              <div className="superposed-text-container">
                <SuperposedText>
                  <img
                    className="image-adaptive"
                    src="../media/femmeJaponaise.png"
                    alt="Femme japonaise"
                  />
                  <span className="text-overlay">A Propos</span>
                </SuperposedText>
              </div>
            </Link>

            {/* -------- Portfolio ------------*/}
            <Link to="portfolio">
              <div className="superposed-text-container">
                <SuperposedText>
                  <img
                    src="../media/hulk.png"
                    className="image-adaptive"
                    alt="hulk"
                  />
                  <span className="text-overlay">Portfolio</span>
                </SuperposedText>
              </div>
            </Link>

            {/* -------- A savoir ------------*/}
            <Link to="asavoir">
              <div className="superposed-text-container">
                <SuperposedText>
                  <img
                    src="../media/cobra.png"
                    className="image-adaptive"
                    alt="Cabro"
                  />
                  <span className="text-overlay">A savoir</span>
                </SuperposedText>
              </div>
            </Link>

            {/* --------Contact ------------*/}
            <Link to="contact">
              <div className="superposed-text-container">
                <SuperposedText>
                  <img
                    src="../media/picsou03.png"
                    className="image-adaptive"
                    alt="Piscsou"
                  />
                  <span className="text-overlay">Contact</span>
                </SuperposedText>
              </div>
            </Link>
          </div>
        </main>
      )}
    </>
  );
};

export default AccueilPage;
