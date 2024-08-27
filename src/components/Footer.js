import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="contact-info">
        <p>Contato: contato@roupera.com</p>
      </div>
      <div className="social-links">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
      <p className="copyright">Roupera&copy; 2024. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;