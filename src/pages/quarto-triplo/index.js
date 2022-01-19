import React from 'react';
import Separador from '../../assets/imagens/separador-branco.png';
import ImageGallery from 'react-image-gallery';
import Footer from '../../components/footer';
// informações do quarto
import { cardList1 } from '../../assets/data/acomodacoes';
// imagens para galeria do quarto
import { quartoTriplo } from '../../assets/data/bedrooms';
import { Link } from 'react-router-dom';

function QuartoTriplo() {
  return (
    <section className="page-container">
      <img src={Separador} />
      <h3 className="page-title">nossas acomodações</h3>
      <p className="page-subtitle">quarto <span className="subtitle-bold">triplo</span></p>
      <ul className="page-list">
        {
          cardList1.length > 0 ?
            cardList1.map((value, index) => {
              return (
                <li key={`item-${index}`}>{value}</li>
              );
            })
            : null
        }
      </ul>
      <ImageGallery
        items={quartoTriplo}
        infinite={true}
        thumbnailPosition="left"
        showBullets={true}
      />
      <div className="page-divider"></div>
      <p className="page-details">ver também</p>
      <div className="page-actions">
        <Link to="/quarto-quadruplo" className="page-action-button">- quarto quádruplo -</Link>
        <Link to="/quarto-casal" className="page-action-button">- quarto casal -</Link>
      </div>
      <Footer className="page-footer" />
    </section>
  );
}

export default QuartoTriplo;