import React from 'react';
import CardPoster1 from '../../assets/bedrooms/quarto-triplo/img3.jpeg';
import CardPoster2 from '../../assets/bedrooms/quarto-quadruplo/img1.jpeg';
import CardPoster3 from '../../assets/bedrooms/quarto-casal/img2.jpeg';
import Separador from '../../assets/imagens/separador-branco.png';
// cards
import CardPortrait from '../../components/card-portrait';
import './styles.css';

// informações dos quartos
import { cardList1, cardList2, cardList3 } from '../../assets/data/acomodacoes';

function Acomodacoes() {

  return (
    <section id="acomodacoes">
      <div className="acomodacoes-container">
        <img src={Separador} />
        <h2 className="acomodacoes-title">nossas<br /> acomodações</h2>
        <div className="cards-container">
          <CardPortrait
            image={CardPoster1}
            title="quarto"
            titleBold="triplo"
            link="/quarto-triplo"
            list={
              cardList1.length > 0 ?
                cardList1.map((item, index) => {
                  return (
                    <li className="card-list-item" key={`item-${index}`}>{item}</li>
                  );
                }) : null
            }
          />
          <CardPortrait
            image={CardPoster2}
            title="quarto"
            titleBold="quádruplo"
            link="/quarto-quadruplo"
            list={
              cardList2.length > 0 ?
                cardList2.map((item, index) => {
                  return (
                    <li className="card-list-item" key={`item-${index}`}>{item}</li>
                  );
                }) : null
            }
          />
          <CardPortrait
            image={CardPoster3}
            title="quarto"
            titleBold="casal"
            link="/quarto-casal"
            list={
              cardList3.length > 0 ?
                cardList3.map((item, index) => {
                  return (
                    <li className="card-list-item" key={`item-${index}`}>{item}</li>
                  );
                }) : null
            }
          />
        </div>
        <img src={Separador} className="flip" />
      </div>
    </section>
  );
}

export default Acomodacoes;