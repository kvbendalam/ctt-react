import React from 'react';
import './AboutUsPage.css'
import MaheshReddyImage from './assets/images/Maheshreddy.jpeg';

function AboutUs() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div>
                <img src={MaheshReddyImage} alt="Mahesh Reddy" className='mahesh' />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="about-content">
                <h2 className="section-title text-center">About Crazy Tours & Travels</h2>
                <p className="about-text">
                  Crazy Tours & Travels is your gateway to unforgettable travel experiences. We specialize in creating
                  unique and personalized tours that cater to your interests and preferences. Our team of experienced
                  travel experts is dedicated to ensuring that every journey with us is filled with excitement,
                  discovery, and comfort.
                </p>
                <p className="about-text">
                  Founded by Mahesh Reddy, a passionate traveler and explorer, Crazy Tours & Travels has been
                  providing exceptional travel services since 2020. Our mission is to create memorable adventures
                  that leave a lasting impression and create cherished memories for our clients.
                </p>
                <p className="about-text">
                  Whether you're dreaming of a cultural immersion in vibrant cities, an adrenaline-filled adventure
                  in the great outdoors, or a relaxing getaway on pristine beaches, Crazy Tours & Travels has the
                  expertise to make it a reality.
                </p>
                <p className="about-text">
                  Get in touch with us today to start planning your next journey of a lifetime!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
