import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccueilPage from './pages/AccueilPage';
import AProposPage from './pages/AProposPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import Notfound from './pages/NotfoundPage';


const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AccueilPage/>}/>
            <Route path="/apropos" element={<AProposPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/portfolio" element={<PortfolioPage/>}/>
            <Route path="*" element={<Notfound/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;