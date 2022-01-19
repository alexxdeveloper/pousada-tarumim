import React from 'react';
import Separador from '../../assets/imagens/separador-verde.png';
import bannerLogo from '../../assets/imagens/alaluz-logo.png';
import marker from '../../assets/imagens/btn-gallery-b.png';
import Footer from '../../components/footer';
import './styles.css';

// imagens
import img1 from '../../assets/guias-e-passeios/capao.jpg';
import img2 from '../../assets/guias-e-passeios/capao2.jpg';
import img3 from '../../assets/guias-e-passeios/fumaca.jpg';
import img4 from '../../assets/guias-e-passeios/cachoeira-da-fumaca.jpg';
import img5 from '../../assets/guias-e-passeios/morrao.jpg';
import img6 from '../../assets/guias-e-passeios/aguasclaras.jpg';
import img7 from '../../assets/guias-e-passeios/cachoeira-riopreto.jpg';
import img8 from '../../assets/guias-e-passeios/cachoeira-riopreto2.jpg';
import img9 from '../../assets/imagens/ativo.png';

function GuiasEPasseios() {
  return (
    <section className="gp-container">
      <img src={Separador} />
      <h2 className="gp-title">guias & passeios</h2>
      <div className="banner-top">
        <img src={bannerLogo} />
        <div className="banner-text">
          <div className="banner-separator"></div>
          <h5 className="banner-title">Alaluz Caminhando... Caminhantes e Guias.</h5>
          <p className="banner-subtitle">Em parceria com a Pousada Tarumim, oferecendo o serviço de condução para as trilhas no Vale do Capão. Consultar valores na recepção.</p>
          <div className="banner-separator"></div>
        </div>
      </div>

      <section className="section-1">
        <img className="marker-2" src={marker} />
        <div className="gallery">
          <img src={img1} />
          <img src={img2} />
        </div>

        <p>O Vale do Capão é um vilarejo situado no entorno do Parque Nacional da Chapada Diamantina, no subdistrito de Caeté-Açu, município de Palmeiras, Bahia, uma altude média de 1000 m.</p>
        <p>Forte destino de eco turismo nacional e internacional, conhecido pela proximidade estratégica da Cachoeira da Fumaça, do Vale do Pati, além dos atrativos locais que estão situados dentro do vale.</p>
      </section>

      <img className="marker-1" src={marker} />
      <div className="section-separator"></div>
      <img className="marker-2" src={marker} />

      <br /><br />

      <h5 className="section-subtitle">Sugestões de atrativos naturais dentro do vale:</h5>

      <section className="section-2">
        <h5 className="section-title"> Cachoeira da Fumaça </h5>
        <div className="section-list">
          <div>
            <img src={img3} />
            <img src={img4} />
          </div>
          <div>
            <p>A Cachoeira da Fumaça impressiona os visitantes pela sua queda d’água de aproximadamente 380 m, uma das maiores do país, e seu imenso paredão com cerca de 420m de altura. O nome se refere ao efeito provocado pela força dos ventos, que impede a água de chegar a base, formando uma espécie de fumaça com gotículas que são borrifadas para cima. Ao longo do caminho também são contemplados outros mirantes, incluindo o mirante onde se observa do alto todo o Vale do Capão.</p>
            <p>Caminhada: 6 km, sendo 2 km de subida. <br />Tempo médio: 2h30. <br />Esforço físico: moderado a avançado.</p>
          </div>
        </div>
      </section>

      <div className="section-separator section-spacer"></div>

      <section className="section-3">
        <h5 className="section-title">Morrão e Águas Claras</h5>
        <div className="section-list">
          <div>
            <img src={img6} />
            <img src={img5} />
          </div>
          <p>No sopé do Morrão, um dos mais imponentes morros da Chapada Diamantina, Águas Claras apresenta uma pequena cachoeira de águas cristalinas e poço para banho. A maior parte da caminhada é feita em terreno plano.</p>
          <p>Distância de carro: 4 km. <br />Caminhada: 7 km. <br />Tempo médio: 2h. <br />Esforço Físico: moderado.</p>
        </div>
      </section>

      <div className="section-separator section-spacer"></div>

      <section className="section-4">
        <h5 className="section-title">Cachoeira do Rio Preto</h5>
        <div className="section-list">
          <div>
            <img src={img7} />
            <img src={img8} />
          </div>
          <p>Caminha-se uma hora para chegar até a Cachoeira do Rio Preto, que possui uma piscina natural de 50 m extensão. No caminho de volta, está a Corredeira das Rodas, com piscinas naturais e vista para um cânion.</p>
          <p>Trilha histórica. <br />Distância de carro: 3 km. <br />Caminhada: 3 km. <br />Tempo médio: 1h. <br />Esforço Físico: leve a moderado.</p>
        </div>
      </section>

      <div className="section-separator section-spacer"></div>

      <img className="contact-info" src={img9} />
      <br /><br />
      <Footer />
    </section>
  );
}

export default GuiasEPasseios;