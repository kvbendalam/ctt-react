import React from 'react';
import './Style.css';
import Shape1 from './assets/images/shape-1.png';
import Shape2 from './assets/images/shape-2.png';
import Shape3 from './assets/images/shape-3.png';
import hero from './assets/images/hero-banner.png';

function Hero() {
  const mobileNumber = "+91 7989515104"; 

  return (
    <div>
      <section
        className="section hero"
        style={{
          backgroundImage: `url('./assets/images/hero-bg-bottom.png'), url('./assets/images/hero-bg-top.png')`,
        }}
      >
        <div className="container">
          <img src={Shape1} width="61" height="61" alt="Vector Shape" className="shape shape-1" />
          <img src={Shape2} width="56" height="74" alt="Vector Shape" className="shape shape-2" />
          <img src={Shape3} width="57" height="72" alt="Vector Shape" className="shape shape-3" />

          <div className="hero-content">
            <p className="section-subtitle" style={{ textAlign: "left" }}>
              Explore Your Travel
            </p>
            <h2 className="hero-title" style={{ textAlign: "left", marginBottom: "10px" }}>
              Telugu Trusted Travel Agency
            </h2>
            <p className="hero-text" style={{ textAlign: "left" }}>
            Experience the wonders of North India as if you were in South India. Our services include booking bus tickets from Delhi, providing cab transportation, accommodations, and meals throughout your entire excursion.
            </p>
            <div className="btn-group" style={{ textAlign: "left" }}>
              <a href={`tel:${mobileNumber}`} className="btn btn-primary" style={{ textDecoration: "none" }}>
                Contact Us: {mobileNumber}
              </a>
            </div>
          </div>

          <figure className="hero-banner">
            <img src={hero} width="686" height="812" loading="lazy" alt="hero banner" className="w-100" />
          </figure>
        </div>
      </section>
    </div>
  );
}

export default Hero;
