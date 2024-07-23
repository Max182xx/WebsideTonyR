import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faPaintbrush } from "@fortawesome/free-solid-svg-icons";
import PortfolioPage from './PortfolioPage';
import ContactPage from './ContactPage';

const AccueilPage = () => {
  //state when the menu is clicked
  const [isClicked, setIsClicked] = useState(false);
  //arrow function when is cliked
  const pop = () => {
    setIsClicked(!isClicked);
  };

  //items position when is cliked
  const item1Style = {
    transform: isClicked ? 'translateX(-250px)' : 'translateX(0)',
    transition: 'transform 0.5s ease-in-out'
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
      <main className="main">
        {/* -------- menu ------------*/}
        <div className="menu" onClick={pop}>
          <i className="logo"></i>
        </div>
        {/* -------- menu items with icons ------------*/}
        <div className="menu-items">
          <div className="item1" id="item1" style={item1Style}>
            <center>
              <a href="#">
                <FontAwesomeIcon className="fa" icon={faHouse}  />
              </a>
            </center>
          </div>
          <div className="item2" id="item2" style={item2Style}>
            <center>
              <a href={PortfolioPage}>
                <FontAwesomeIcon className="fa" icon={faPalette} />
              </a>
            </center>
          </div>
          <div className="item3" id="item3" style={item3Style}>
            <center>
              <a href={ContactPage}>
                <FontAwesomeIcon className="fa" icon={faPaintbrush} />
              </a>
            </center>
          </div>
        </div>
      </main>
    </>
  );
};

export default AccueilPage;
