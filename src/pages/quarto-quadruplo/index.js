import React from 'react';
import Separador from '../../assets/imagens/separador-branco.png';
import ImageGallery from 'react-image-gallery';
import Footer from '../../components/footer';
// informações do quarto
import { cardList2 } from '../../assets/data/acomodacoes';
// imagens para galeria do quarto
import { quartoQuadruplo } from '../../assets/data/bedrooms';
import { Link } from 'react-router-dom';

function QuartoQuadruplo() {
  return (
    <section className="page-container">
      <img src={Separador} />
      <h3 className="page-title">nossas acomodações</h3>
      <p className="page-subtitle">quarto <span className="subtitle-bold">quádruplo</span></p>
      <ul className="page-list">
        {
          cardList2.length > 0 ?
            cardList2.map((value, index) => {
              return (
                <li key={`item-${index}`}>{value}</li>
              );
            })
            : null
        }
      </ul>
      <ImageGallery
        items={quartoQuadruplo}
        infinite={true}
        thumbnailPosition="left"
        showBullets={true}
      />
      <div className="page-divider"></div>
      <p className="page-details">ver também</p>
      <div className="page-actions">
        <Link to="/quarto-triplo" className="page-action-button">- quarto triplo -</Link>
        <Link to="/quarto-casal" className="page-action-button">- quarto casal -</Link>
      </div>
      <Footer className="page-footer" />
    </section>
  );
}

export default QuartoQuadruplo;