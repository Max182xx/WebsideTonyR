import React, { createContext, useContext, useState, useEffect } from "react";

/* Ce fichier permet de créer un contexte pour faire disparaître un élément dans une page lorsque celle-ci passe en mode responsive */
const ResponsiveModeContext = createContext();

export const ResponsiveModeProvider = ({ children }) => {
  const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 908);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 908);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ResponsiveModeContext.Provider value={{ isResponsive }}>
      {children}
    </ResponsiveModeContext.Provider>
  );
};

export const useResponsiveMode = () => useContext(ResponsiveModeContext);
