import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">

    {/* Elément qui forme la vague dans mon footer  */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,32L48,58.7C96,85,192,139,288,181.3C384,224,480,256,576,234.7C672,213,768,139,864,101.3C960,64,1056,64,1152,90.7C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

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
                  <a
                    href="https://www.instagram.com/tonyr2014/"
                    target="_blank"
                  >
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
                  <a href="https://www.pinterest.fr/tonyr2004/" target="_blank">
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
