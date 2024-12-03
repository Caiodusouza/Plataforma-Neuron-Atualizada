import React from 'react';
import './Footer.css';
import logoBranca from '../../assets/images/logoBranca.png'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";




function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section logo-section">
        <a>
          <img src={logoBranca} alt="Logo" className="logo" />
        </a>
        <div className="social-media">
          <a href="#" className='icon'> {/* Link  LinkedIn */}
            <FaLinkedin className='' />
          </a>
          <a href="#" className='icon'> {/* Link  Instagram */}
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h3>Home</h3>
        <ul>
          <li><a href="#">Planos</a></li>
          <li><a href="#">Funcionalidades</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Sobre Nós</h3>
        <ul>
          <li><a href="#">Time de desenvolvimento</a></li>
          <li><a href="#">Por que “Neuron”?</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Intercâmbio</h3>
        <ul>
          <li><a href="#">Como funciona</a></li>
          <li><a href="#">Histórias inspiradoras</a></li>
          <li><a href="#">Oportunidades</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Login</h3>
        <ul>
          <li><a href="#">Crie a sua conta</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;