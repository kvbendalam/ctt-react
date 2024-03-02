import React from 'react';
import './Style.css';


function Footer() {
  return (
    <div>
      <footer className="footer" style={{backgroundImage: `url('./assets/images/footer-bg.png')`}}>
        <div className="container">
          <div className="footer-bottom">

            <a href="/" className="logo">Crazy Tours & Travels</a>

            <p className="copyright">
              &copy; 2024 <a href="/" className="copyright-link">Crazy Tours & Travels</a>. All Rights Reserved
            </p>

            <ul className="social-list">

              <li>
                <a href="https://www.instagram.com/crazy_traveller_11/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="https://www.youtube.com/@CrazyTraveller_11" target="_blank" rel="noopener noreferrer" className="social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>

            </ul>

          </div>

        </div>
      </footer>
    </div>
  );
}

export default Footer;
