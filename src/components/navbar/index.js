import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import brand from '../../assets/imagens/logo-rodape.png';
import './styles.css';

const Navbar = ({ data }) => {

  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (location.hash == "#guias_passeios") {
      navigate("/guias-e-passeios", { replace: true });
    }
    console.log(location.pathname);
  }, [location]);

  return (
    <nav id="navbar-top" className="navbar-top">
      <img src={brand} className="brand-image" />
      {
        data.map((value, index) => {
          if (location.hash == value.link) {
            return (
              <a key={`link-${index}`} href={`/${value.link}`} className="navbar-link active-link">{value.label}</a>
            );
          }
          else if (location.pathname == '/guias-e-passeios' && value.link == "#guias_passeios") {
            return (
              <a key={`link-${index}`} href={`/${value.link}`} className="navbar-link active-link">{value.label}</a>
            );
          }
          else {
            return (
              <a key={`link-${index}`} href={`/${value.link}`} className="navbar-link">{value.label}</a>
            );
          }
        })
      }
      <div className="dropdown" id="navbar-dropdown">
        <button className="dropdown-button"
          role="button"
          id="btnMenu"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <FaBars color="white" size={20} />
        </button>
        <ul className="dropdown-menu" aria-labelledby="btnMenu">
          {
            data.map((value, index) => {
              if (location.hash == value.link) {
                return (
                  <li key={`link-${index}`} className="navbar-link-dropdown active-link-left-border">
                    <a className="dropdown-item" href={`/${value.link}`}>{value.label}</a>
                  </li>
                );
              }
              else if (location.pathname == "/guias-e-passeios" && value.link == "#guias_passeios") {
                return (
                  <li key={`link-${index}`} className="navbar-link-dropdown active-link-left-border">
                    <a className="dropdown-item" href={`/${value.link}`}>{value.label}</a>
                  </li>
                );
              }
              else {
                return (
                  <li key={`link-${index}`}>
                    <a className="navbar-link-dropdown dropdown-item" href={`/${value.link}`}>{value.label}</a>
                  </li>
                );
              }
            })
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;