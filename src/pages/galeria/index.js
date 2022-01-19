import React from 'react';
import Separador from '../../assets/imagens/separador-branco.png';
import ImageGallery from 'react-image-gallery';
import { images } from '../../assets/data/gallery.js';
import './styles.css';

function Galeria() {

    return (
        <section>
            <div className="galeria-header">
                <div className="divider"></div>
                <h2 className="galeria-title">pensada pra você</h2>
                <p className="galeria-subtitle">que deseja se conectar com a natureza e o vale do capão</p>
                <div className="divider"></div>
            </div>
            <div className="galeria-container" id="galeria">
                <img src={Separador} />
                <h2 className="galeria-title2">galeria de fotos</h2>
                <ImageGallery
                    items={images}
                    infinite={true}
                    thumbnailPosition="left"
                    showBullets={false}
                />
                <img src={Separador} className="flip" />
            </div>
        </section>
    );
}

export default Galeria;