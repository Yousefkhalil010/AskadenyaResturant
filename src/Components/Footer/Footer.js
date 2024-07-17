import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <section>
            <footer className="footer">
              <div className="credit">
                <p><i className="fa fa-copyright" aria-hidden="true"></i> copyright @ 2024 by Yousef Khalil </p>
                <div className="icons">
                  <a href="https://www.facebook.com/yousef.khalil.9210" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="https://www.instagram.com/yyoussef__" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="https://www.linkedin.com/in/yousefkhalilibrahim" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="https://github.com/Yousefkhalil010" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </footer>
    </section>
  );
}

export default Footer;
