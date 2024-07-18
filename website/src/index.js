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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
