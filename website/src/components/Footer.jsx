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
          </div>

          <div className="sb_footer-links-div">
            <h4>
              <Link to={"mentionsLegals"}> Mentions Légals</Link>
            </h4>
          </div>
          <div className="sb_footer-links-div">
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

            <div className="socialmediaContent">
            <div className="socialmedia">
              <p>
                {" "}
                <a
                  href="https://www.facebook.com/anthony.bourdeau.52"
                  target="_blank"
                >
                  <img
                    src="../media/facebook.png"
                    alt="Logo Facebook"
                    className="image-custom-size "
                  />
                </a>{" "}
              </p>
            </div>

            <div className="socialmedia">
              <p className="image-custom-size-2 ">
                {" "}
                <a href="https://www.instagram.com/tonyr2014/" target="_blank">
                <img
                    src="../media/instagram.png"
                    alt="Logo Intagram"
                    className="image-custom-size "
                  />
                </a>{" "}
              </p>
            </div>

            <div className="socialmedia">
              <p>
                {" "}
                <a
                  href="https://www.pinterest.fr/tonyr2004/"
                  target="_blank"
                >
                  <img
                    src="../media/pinterest.png"
                    alt="Logo Pinterest"
                    className="image-custom-size "
                  />
                </a>{" "}
              </p>
            </div>
            </div>
          </div>

          <hr></hr>
        </div>
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              {new Date().getFullYear()} TONY <span class="trademark">® </span>&
              Max182 all right reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
