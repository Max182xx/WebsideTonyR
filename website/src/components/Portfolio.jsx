import React, { useEffect, useRef } from "react";

const Portfolio = () => {
  // Définition des images
  const images = [
    {
      src: "../media/bjork.png",
      alt: "",
      text: "Tableaux",
      link: "Tableaux",
    },
    {
      src: "../media/monica.png",
      alt: "",
      text: "Mural intérieur",
      link: "muralInterieur",
    },
    {
      src: "../media/jack.png",
      alt: "",
      text: "Mural extérieur",
      link: "muralExterieur",
    },
    { src: "../media/tornade.png", alt: "", text: "Imprimé", link: "imprime" },
  ];

  const isTouchDevice = () => {
    return window.matchMedia("(hover: none)").matches;
  };

  // Utilisation de useRef pour obtenir une référence à chaque élément .item
  const itemsRefs = useRef([]);

  // Fonction pour gérer l'ajout des écouteurs d'événements
  useEffect(() => {
    const deviceType = isTouchDevice() ? "touch" : "mouse";

    const startEvent = deviceType === "touch" ? "touchstart" : "mouseenter";
    const endEvent = deviceType === "touch" ? "touchend" : "mouseleave";

    // Ajout des écouteurs d'événements
    itemsRefs.current.forEach((item, index) => {
      item.addEventListener(startEvent, () => {
        item.style.flex = "9";
      });
      item.addEventListener(endEvent, () => {
        item.style.flex = "1";
      });
    });

    // Nettoyage des écouteurs d'événements lors du démontage du composant
    return () => {
      itemsRefs.current.forEach((item) => {
        if (item && item.removeEventListener) {
          item.removeEventListener(startEvent, () => {});
          item.removeEventListener(endEvent, () => {});
        }
      });
    };
  }, []);

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div
          key={index}
          className="item"
          ref={(el) => (itemsRefs.current[index] = el)}
          style={{
            margin: 0,
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href={image.link}
            style={{
              textDecoration: "none",
              color: "white",
              display: "block",
              textAlign: "center",
              fontSize: "100%",
              fontWeight: "bold",
            }}
          >
            <div
              className="image-container"
              style={{ position: "relative", width: "s100%", height: "100%" }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  maxWidth: "none",
                  maxHeight: "none",
                }}
              />
              <div className="text-overlay">
                <p>{image.text}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
