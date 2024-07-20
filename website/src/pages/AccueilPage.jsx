import React from "react";
import fb from "../assets/images/fb.webp";
import insta from "../assets/images/insta.webp";
import git from "../assets/images/git.webp";
import linkedin from "../assets/images/linkedin.webp";


const AccueilPage = () => {
  return (
    <>
      <main className="main">
        {" "}
        <h1>Accueil</h1>
        <div classname="container-first">
          <h2>
            <span>Bienvenue </span>
            <span>sur le site de </span>
            <span>TONY R</span>
          </h2>
          



        </div>
        <ul className="medias">
          <li className="bulle">
            <img src={fb} alt="facebook" className="logo-medias" />
          </li>
          <li className="bulle">
            <img src={insta} alt="instagram" className="logo-medias" />
          </li>
          <li className="bulle">
            <img src={git} alt="github" className="logo-medias" />
          </li>
          <li className="bulle">
            <img src={linkedin} alt="linkedin" className="logo-medias" />
          </li>
        </ul>
        <p>
          {" "}
          When Chuck Norris writes, he makes paper bleed. Chuck Norris named his
          daughter Mercy. The day she was born was the only day Chuck Norris
          ever had Mercy. Chuck Norris can have both feet on the ground and kick
          butt at the same time. Chuck Norris drinks napalm to fight his
          heartburn. Chuck Norris destroyed the periodic table, because Chuck
          Norris only recognizes the element of surprise. Chuck Norris can kill
          your imaginary friends. Chuck Norris sleeps with a pillow under his
          gun. Chuck Norris doesn’t cheat death. He wins fair and square. Chuck
          Norris used to beat the shit out of his shadow because it was
          following to close. It now stands a safe 30 feet behind him. Time
          waits for no man. Unless that man is Chuck Norris.
        </p>
      </main>
    </>
  );
};

export default AccueilPage;
