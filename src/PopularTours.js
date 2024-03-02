import React from 'react';
import './Style.css'


const PopularTours = ({ tours,type }) => {
  return (
    <section className="section popular">
      <div className="container">
        <h2 className="h2 section-title">{type} Packages</h2>
        <ul className="popular-list">
          {tours.map((tour, index) => (
            <li key={index}>
              <div className="popular-card">
                <figure className="card-banner">
                  <a href={tour.link}>
                    <img src={tour.image} style={{ height: '440px' }} loading="lazy" alt={tour.alt} className="img-cover" />
                  </a>
                  <span className="card-badge">
                    <ion-icon name="time-outline"></ion-icon>
                    <time dateTime={tour.duration}>{tour.durationText}</time>
                  </span>
                </figure>
                <div className="card-content">
                  <div className="card-wrapper">
                    <div className="card-price">{tour.price}</div>
                  </div>
                  <h3 className="card-title">
                    <a href={tour.link}>{tour.title}</a>
                  </h3>
                  <address className="card-location">{tour.location}</address>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PopularTours;
