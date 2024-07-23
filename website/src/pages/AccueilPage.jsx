import React from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid';



const AccueilPage = () => {
  return (
    <>
      <main className="main">
        {/* -------- menu ------------*/}
        <div className="menu">
          <i className="logo"></i>
        </div>
        {/* -------- menu items with icons ------------*/}
        <div className="menu-items">
          <div className="items1" id="items1">
            <center>
              <a href="#">
                <FontAwesomeIcon icon={faHouse} />
              </a>
            </center>
          </div>
        </div>
      </main>
    </>
  );
};

export default AccueilPage;
