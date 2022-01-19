import React from 'react';
import Separador from '../../assets/imagens/separador-branco.png';
import LocationIcon from '../../assets/imagens/icn-localizacao.png';
import AirplaneIcon from '../../assets/imagens/icn-aereo.png';
import BusIcon from '../../assets/imagens/icn-terrestre.png';
import { location } from '../../assets/data/location';
import './styles.css';

function Localizacao() {
    return (
        <section className="localizacao-container" id="localizacao">
            <img src={Separador} />
            <div className="localizacao-info">
                <iframe
                    src={location}
                    style={{ "border": 0 }}
                    className="localizacao-map"
                    loading="lazy"></iframe>
                <div className="localizacao-details">
                    <div className="details-box">
                        <img src={LocationIcon} />
                        <div className="labels">
                            <p>Rua principal dos campos.</p>
                            <p>Próximo a trilha da cachoeira da fumaça.</p>
                            <p>Vale do Capão - Chapada Diamantina - BA - Brasil</p>
                        </div>
                    </div>
                    <div className="details-box aerea">
                        <img src={AirplaneIcon} />
                        <div className="labels">
                            <p className="labels-title">Transporte Aéreo:</p>
                            <p className="text-justify">Há voos regulares saindo de Salvador para cidade de Lençóis, http://www.voeazul.com.br/</p>
                            <div className="labels-divider w-25"></div>
                            <p className="text-justify">O Percurso do aeroporto de Lençóis até o Vale o Capão dura cerca de uma hora e  você pode contratar o serviço de translado, consulte disponibilidade.</p>
                        </div>
                    </div>
                    <div className="details-box terrestre">
                        <img src={BusIcon} />
                        <div className="labels">
                            <p className="labels-title">Via Terrestre:</p>
                            <p className="text-justify">A empresa Real expresso faz a rota Salvador -Palmeiras diariamente ,  em Palmeiras tem sempre um carro pronto para leva-lo até o Capão , São apenas 18 km. http://www.realexpresso.com.br/</p>
                            <div className="labels-divider w-25"></div>
                            <p className="text-justify">Para outras rotas entre em contato.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={Separador} className="flip" />
        </section>
    );
}

export default Localizacao;