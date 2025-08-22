/* eslint-disable no-unused-vars */
import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">&lt;Ajay Gaur/&gt;</h1>

            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                    <li>
                    <a href="#experience" className="footer__link">Experience</a>
                </li>

                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/ig_ajaygaur/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </a>

                <a href="https://github.com/iamajaygaur" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>

                <a href="https://x.com/iamajaygaurx" className="footer__social-link" target="_blank">
                    <i className="bx bxl-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/iamajaygaur" className="footer__social-link" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>

                <a href="https://www.facebook.com/iamajaygaur" className="footer__social-link" target="_blank">
                    <i className="bx bxl-facebook"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; 2025 Ajay Gaur | Built with ❤️ & Code</span>
        </div>
    </footer>
  )
}

export default Footer