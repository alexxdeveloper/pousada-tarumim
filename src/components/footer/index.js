import React from 'react';
import LogoRodape from '../../assets/imagens/logo-rodape.png';
import './styles.css';

function Footer() {
    return (
        <section className="footer-container">
            <div className="shadow-top"></div>
            <img src={LogoRodape} />
            <p>Pousada Tarumim - Vale do Capão - Chapada Diamantina - BA - Brasil</p>
            <p>Todos os Direitos Reservados ® - 2021</p>
            <p>www.pousadatarumim.com.br / contato@pousadatarumim.com.br</p>
        </section>
    );
}

export default Footer;