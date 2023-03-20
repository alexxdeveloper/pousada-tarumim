import React from "react";
import Separador from '../../assets/imagens/separador-branco.png'
import './styles.css';

function PoliticaCancelamento() {
    return (
        <>
            <div className="politica-de-cancelamento-header" id="politica_cancelamento">
                <h2 className="politica-de-cancelamento-title">políticas de cancelamento</h2>
            </div>
            <div className="politica-de-cancelamento-container">
                <img src={Separador} />
                <ul className="politica-de-cancelamento-topicos">
                    <li>Os depósitos não são reembolsáveis. O valor referente à estadia menos a taxa de cancelamento,
                        estará disponível por até 24 meses a partir da data do check in, como Carta de Crédito para
                        futura estadia mediante a nossa disponibilidade e fora dos períodos de feriado. Após esta data o
                        crédito será expirado. (A Carta de Crédito poderá ser utilizada por Terceiros)</li>
                    <li>Todos os pedidos de cancelamento devem ser feitos por escrito e enviados diretamente para nosso email: pousadatarumim@gmail.com.</li>
                    <li>Cancelamentos de reservas com mais de 10 dias do check-in: 10% multa (do valor total da reserva). </li>
                    <li>Cancelamentos  de reservas com menos de 10 dias, o depósito integral será cobrado como  penalidade.</li>
                    <li>Early check-in: Sujeito a disponibilidade.</li>
                </ul>
                <img src={Separador} className='flip' />
            </div>
        </>
    );
}

export default PoliticaCancelamento