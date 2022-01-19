import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const CardPortrait = ({image, title, titleBold, list, link}) => {
    return (
        <div className="card-container">
            <img src={image} className="card-image" />
            <div className="card-title">
                <h2>{title}&nbsp;<span className="card-title-bold">{titleBold}</span></h2>
            </div>
            <ul className="card-list">{list}</ul>
            <Link to={link} className="card-button">ver <span className="card-title-bold">todas</span> as fotos</Link>
        </div>
    );
}

export default CardPortrait;