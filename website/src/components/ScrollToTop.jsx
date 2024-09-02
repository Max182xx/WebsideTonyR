import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* Fonction utilisée pour s'assurer d'arriver en haut de la page  */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
