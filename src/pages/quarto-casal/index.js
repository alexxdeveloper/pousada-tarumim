import React from 'react';
import Separador from '../../assets/imagens/separador-branco.png';
import ImageGallery from 'react-image-gallery';
import Footer from '../../components/footer';
// informações do quarto
import { cardList3 } from '../../assets/data/acomodacoes';
// imagens para galeria do quarto
import { quartoCasal } from '../../assets/data/bedrooms';
import { Link } from 'react-router-dom';

function QuartoCasal() {
  return (
    <section className="page-container">
      <img src={Separador} />
      <h3 className="page-title">nossas acomodações</h3>
      <p className="page-subtitle">quarto <span className="subtitle-bold">casal</span></p>
      <ul className="page-list">
        {
          cardList3.length > 0 ?
            cardList3.map((value, index) => {
              return (
                <li key={`item-${index}`}>{value}</li>
              );
            })
            : null
        }
      </ul>
      <ImageGallery
        items={quartoCasal}
        infinite={true}
        thumbnailPosition="left"
        showBullets={true}
      />
      <div className="page-divider"></div>
      <p className="page-details">ver também</p>
      <div className="page-actions">
        <Link to="/quarto-quadruplo" className="page-action-button">- quarto quádruplo -</Link>
        <Link to="/quarto-triplo" className="page-action-button">- quarto triplo -</Link>
      </div>
      <Footer className="page-footer" />
    </section>
  );
}

export default QuartoCasal;