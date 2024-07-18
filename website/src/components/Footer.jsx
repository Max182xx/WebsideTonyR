import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div">
            <h4>
              {" "}
              <Link to={"cgu"}> CGU</Link>
            </h4>
            <h4>
              <Link to={"mentionsLegals"}> Mentions Légals</Link>
            </h4>
            <h4>
              {" "}
              <Link to={"/"}> Sitemap</Link>
            </h4>
          </div>

          <div className="sb_footer-links-div">
            <h4>
              {" "}
              <Link to={"contact"}> Contact </Link>
            </h4>

            <div className="socialmedia">
              <p>
                {" "}
                <img
                  src="../media/facebook.png"
                  alt="Logo Facebook"
                  className="image-custom-size"
                />{" "}
              </p>
            </div>
          </div>

          <hr></hr>
        </div>
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()} CodeInn. All right reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
