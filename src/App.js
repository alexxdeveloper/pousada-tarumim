import React from 'react';
import Navbar from './components/navbar'
import Pousada from './pages/pousada';
import Acomodacoes from './pages/acomodacoes';
import Galeria from './pages/galeria';
import Reservas from './pages/reservas';
import Localizacao from './pages/localizacao';
import QuartoCasal from './pages/quarto-casal';
import QuartoTriplo from './pages/quarto-triplo';
import QuartoQuadruplo from './pages/quarto-quadruplo';
import PoliticaCancelamento from './pages/politica-de-cancelamento';

import './App.css';
import Footer from './components/footer';

import { Routes, Route } from 'react-router-dom';
import { navbar1 } from './assets/data/navbar-data';

function LandingPage() {
  return (
    <div>
      <div data-bs-spy="scroll" data-bs-target="#navbar-top" data-bs-offset="0" tabIndex="0">
        <section className="container-parallax1">
          <Pousada />
          <Acomodacoes />
        </section>
        <section className="container-parallax2">
          <Galeria />
          <Reservas />
        </section>
        <section>
          <Localizacao />
          <PoliticaCancelamento />
          <Footer />
        </section>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar data={navbar1} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quarto-casal" element={<QuartoCasal />} />
        <Route path="/quarto-triplo" element={<QuartoTriplo />} />
        <Route path="/quarto-quadruplo" element={<QuartoQuadruplo />} />
        {/* <Route path="/guias-e-passeios" element={<GuiasEPasseios />} /> */}
      </Routes>
    </>
  );
}

export default App;