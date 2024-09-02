import React from "react";
import "../styles/APropos.css";
import Slider from "../components/Slider";

function AProposPage() {
  console.log("AProposPage est rendu");
  return (
    <main>
      <div className="main">
        <div className="wrapper-text-img">
          <img src="../media/portrait.png" alt="" className="image" />
          <div className="text-box">
            <h1>BIOGRAPHIE</h1>
            <p>
              Né dans le Maine et Loire en 1975, Tony ® est un artiste
              plasticien basé sur Montpellier (FRANCE). Titulaire d’une Maîtrise
              en Arts plastiques avec mention Très Bien et Félicitation du jury,
              il suit aussi les cours du soir aux Beaux Arts de Sète dans le
              début des année 2000 en parallèle avec de multiples activités
              artistiques. Depuis 2012, il reprend sa carrière artistique et
              multiplie les expositions. Ainsi l’’ensemble de sa démarche
              artistique s’appuie sur un va et vient entre des connaissances
              théoriques maîtrisées et une pratique plastique qui
              conceptualisent ses projets. Dès lors, le travail qu’il a réalisé
              au cours de ses premières années, trouvait son essence fondatrice
              sur une recherche tant littéraire, artistique que pragmatique sur
              le thème de «la Marge». La marge pourrait se résumer à sa simple
              défnition d’espace blanc et vierge, mais à travers les dessins en
              bord de marge, les notes ajoutées, des écrits, des formes ont pris
              vie pour rejaillir dans son approche picturale. Ainsi,
              l’imagination, affûtée par des croquis, des mots et des phrases du
              texte, est dirigée vers un espace où tout est possible. Sa
              créativité s’exprime alors et invente des personnages loufoques,
              d’étranges morphologies, modèles des mondes fantastiques et des
              rêves personnels… comme dans les manuscrits médiévaux et les
              écrits de William Blake mais aussi la peinture de Jerome Bosch,
              Basquiat ou de la nouvelle fguration. Le petit dessin en bord de
              marge devient alors, le grand dessin avec une écriture qui
              s’extrait en mouvement. Les infographies transforment également
              ses dessins et les colorisent. Il associe des images
              judicieusement sélectionnées, des croquis réalisés en avant scène
              et il modèle un événement qui vient traduire une émotion, une
              pensée, une histoire. Cette expression lui permet d’aller encore
              plus loin dans le détail et la multiplication d’informations. La
              marge, le fond et la forme sont à la base de ses recherches
              picturales. Ainsi, aujourd’hui il expérimente tout un travail sur
              le texte et la matière à partir de journaux, de livres anciens, et
              de magazines afn de donner du relief, de la texture et de la
              profondeur à ses toiles. Le passé et le futur sont toujours
              présent face à ses livres anciens, la communication numérique
              n’est jamais loin. Dans son patchwotk pictural Tony ® expérimente
              de nouvelles pistes en incluant de la réalité augmentée dans ses
              œuvres, pour comme il le dit « faire participer le spectateur dans
              une œuvre aux multiples facettes.Il y a toujours quelque chose de
              caché, dans ou à l’extérieur, aussi bien picturellement
              qu’intellectuellement mes oeuvres ».
            </p>
          </div>
        </div>
        <div className="carousel-container">
          <Slider />
        </div>
      </div>
    </main>
  );
}

export default AProposPage;
