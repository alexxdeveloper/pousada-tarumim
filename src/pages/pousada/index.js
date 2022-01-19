import React from 'react';
import Separador from '../../assets/imagens/separador-branco.png';
import Marcador from '../../assets/imagens/marcador.png';
import "./styles.css";

const Pousada = () => {

    const infos1 = [
        { icon: Marcador, text: "8 Quartos. Todos com banheiro privativo." },
        { icon: Marcador, text: "Café da Manhã" },
        { icon: Marcador, text: "Estacionamento" },
        { icon: Marcador, text: "Internet WIFI" },
        { icon: Marcador, text: "Banho Quente" },
        { icon: Marcador, text: "Sauna" },
    ];

    const infos2 = [
        { icon: Marcador, text: "Televisão" },
        { icon: Marcador, text: "Guarda-Volumes" },
        { icon: Marcador, text: "Varanda com Rede" },
        { icon: Marcador, text: "Cabana de Massagem" },
        { icon: Marcador, text: "Serviço de Guia" },
    ];

    return (
        <section id="inicio">
            <div className="pousada-container"></div>
            <div className="pousada-description" id="a_pousada">
                <img src={Separador} />
                <h2 className="pousada-title">a pousada</h2>
                <p className="pousada-details">
                    Localizada a apenas 400 metros da trilha da Cachoeira da Fumaça, uma das mais famosas do mundo,
                    aproximadamente 1,5km da vila do Capão, a pousada conta com uma estrutura de 8 quartos , estacionamento,
                    cabana para massagem e terapias, espaço para fogueira, sauna e uma ampla área verde, tudo criado para garantir
                    harmonia, conforto e acolhimento.  <span className="bold">Tarumim</span> significa&nbsp;
                    <span className="bold">“Mãe das Águas”</span> em tupi-guarani. Ressalta a beleza das nascentes, rios,
                    corredeiras, lagos e cachoeiras do Vale encantado do Capão.
                    Depois do banho de cachoeira, da trilha, venha desfrutar e relaxar aqui, no aconchego da pousada Tarumim.
                </p>

                <div className="divider"></div>

                <div className="pousada-table">
                    <div>
                        {
                            infos1.map((value, index) => {
                                return (
                                    <p key={`item-${index}`}>
                                        <img src={value.icon} />
                                        <span>{value.text}</span>
                                    </p>
                                );
                            })
                        }
                    </div>
                    <div>
                        {
                            infos2.map((value, index) => {
                                return (
                                    <p key={`item-${index}`}>
                                        <img src={value.icon} />
                                        <span>{value.text}</span>
                                    </p>
                                );
                            })
                        }
                    </div>
                </div>
                <img className="flip" src={Separador} />
            </div>
        </section>
    );
}

export default Pousada;