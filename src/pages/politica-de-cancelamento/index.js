import React from "react";
import Separador from '../../assets/imagens/separador-branco.png'
import './styles.css';

function PoliticaCancelamento() {
    return (
        <>
            <div className="politica-de-cancelamento-header" id="politica_cancelamento">
                <h2 className="politica-de-cancelamento-title"><b>Os depósitos não são reembolsáveis</b></h2>
            </div>
            <div className="politica-de-cancelamento-container">
                <img src={Separador} />
                <ul className="politica-de-cancelamento-topicos">
                    <li>Reservas canceladas com mais de 10 dias de antecedência do check in, o valor depositado, 
                        menos a taxa de cancelamento (10% do valor total da reserva), estará disponível por até 24
                        meses como Carta de Crédito para futura estadia mediante a nossa disponibilidade.
                        Após esta data o crédito será expirado. (A Carta de Crédito poderá ser utilizada por Terceiros)
                    </li>
                    <li>Todos os pedidos de cancelamento devem ser feitos por escrito e enviados diretamente para nosso email: pousadatarumim@gmail.com</li>
                    <li>Cancelamentos de reservas com menos de 10 dias do check in, o depósito integral será cobrado como penalidade</li>
                    <li>Early check-in: Sujeito a disponibilidade</li>
                    <li>Late check out: Sujeito a disponibilidade</li>
                </ul>
                <img src={Separador} className='flip' />
            </div>
        </>
    );
}

export default PoliticaCancelamento