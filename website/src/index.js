import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AccueilPage from "./pages/AccueilPage";
import AProposPage from "./pages/AProposPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import CguPage from "./pages/CguPage";
import MentionsLegals from "./pages/MentionsLegals";
import { ResponsiveModeProvider } from "./components/ResponsiveModeContext";
import ASavoirPage from "./pages/ASavoirPage";
import TableauxPortfolioPage from "./pages/pagesPortfolio/TableauxPage";
import MuralInterieurPage from "./pages/pagesPortfolio/MuralInterieurPage"
import MuralExterieurPage from "./pages/pagesPortfolio/MuralExterieurPage"
import ImprimePage from "./pages/pagesPortfolio/ImprimePage";


// Configure les routes et rend l'applications dans le DOM
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <AccueilPage />,
      },
      {
        path: "accueil",
        element: <AccueilPage />,
      },
      {
        path: "apropos",
        element: <AProposPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "cgu",
        element: <CguPage />,
      },
      {
        path: "mentionsLegals",
        element: <MentionsLegals />,
      },
      {
        path: "asavoir",
        element: <ASavoirPage/>,
      },
      {
        path: "tableaux",
        element: <TableauxPortfolioPage/>,
      },
      {
        path: "muralInterieur",
        element: <MuralInterieurPage/>,
      },
      {
        path: "muralExterieur",
        element: <MuralExterieurPage/>,
      },
      {
        path: "imprime",
        element: <ImprimePage/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResponsiveModeProvider>
      <RouterProvider router={router} />
    </ResponsiveModeProvider>
  </React.StrictMode>
);
