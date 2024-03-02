import React from 'react';
import aboutBanner from './assets/images/about-banner.png'

function About() {
  return (
    <section className="section about">
      <div className="container">

        <div className="about-content">

          <p className="section-subtitle">About Us</p>

          <h2 className="h2 section-title">Explore all tours like you are in South India.</h2>

          <p className="about-text">
            Feeling exhausted from all the planning and cancellations? No worries! Travel with us and enjoy a hassle-free experience.
          </p>

          <ul className="about-list">

            <li className="about-item">

              <div className="about-item-icon">
                <ion-icon name="compass"></ion-icon>
              </div>

              <div className="about-item-content">
                <h3 className="h3 about-item-title">Budget Friendly Tours</h3>

                <p className="about-item-text">
                  Explore the world on a budget with our affordable tours! Enjoy top-notch experiences without breaking the bank.
                </p>
              </div>

            </li>

            <li className="about-item">

              <div className="about-item-icon">
                <ion-icon name="briefcase"></ion-icon>
              </div>

              <div className="about-item-content">
                <h3 className="h3 about-item-title">Best Experience</h3>

                <p className="about-item-text">
                  Immerse yourself in the best experiences life has to offer while on your travels. From breathtaking landscapes to unforgettable encounters, every moment becomes a cherished memory.
                </p>
              </div>

            </li>

            <li className="about-item">

              <div className="about-item-icon">
                <ion-icon name="umbrella"></ion-icon>
              </div>

              <div className="about-item-content">
                <h3 className="h3 about-item-title">Telugu Speaking Guide</h3>

                <p className="about-item-text">
                  Enhance your journey with a knowledgeable Telugu-speaking guide. Explore culture, history, and hidden gems with ease and understanding.
                </p>
              </div>

            </li>

          </ul>

          {/* <a href="#" className="btn btn-primary">Booking Now</a> */}

        </div>

        <figure className="about-banner">
          <img src={aboutBanner} width="756" height="842" loading="lazy" alt="" className="w-100" />
        </figure>

      </div>
    </section>
  );
}

export default About;
