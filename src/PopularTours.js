import React from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";

const PopularTours = ({ tours, type }) => {
  const navigate = useNavigate();

  const redirect = (tour) => {
    console.log(tour)
    navigate(`/package/${tour.title}/${type}`);
  };

  return (
    <section className="section popular">
      <div className="container">
        <h2 className="h2 section-title">{type} Packages</h2>
        <ul className="popular-list">
          {tours.map((tour, index) => (
            <li key={index} onClick={() => redirect(tour)}>
              <div className="popular-card">
                <figure className="card-banner">
                  <p>
                    <img
                      src={tour.image}
                      style={{ height: "440px" }}
                      loading="lazy"
                      alt={tour.alt}
                      className="img-cover"
                    />
                  </p>
                  <span className="card-badge">
                    <ion-icon name="time-outline"></ion-icon>
                    <time dateTime={tour.duration}>{tour.durationText}</time>
                  </span>
                </figure>
                <div className="card-content">
                  <h3 className="card-title">
                    <a href={tour.link}>{tour.title}</a>
                  </h3>
                  <address className="card-location">{tour.location}</address>
                  <div
                    className="card-wrapper"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="card-price">{tour.price}</div>
                  </div>
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
