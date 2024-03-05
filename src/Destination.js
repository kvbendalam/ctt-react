import React from 'react';
import manali from './assets/images/manali.jpeg';
import shimla from './assets/images/shimla.jpeg';
import delhi from './assets/images/delhi.jpeg';
import mathura from './assets/images/mathura.jpeg';
import vrindavan from './assets/images/vrindavan.jpeg';
import { useNavigate } from 'react-router-dom';

function Destination() {
  const navigate = useNavigate();

  return (
    <section className="section destination">
      <div className="container">

        <p className="section-subtitle">Destinations</p>

        <h2 className="h2 section-title">Choose Your Place</h2>

        <ul className="destination-list">

          <li className="w-50" onClick={() => navigate('/destination/manali')}>
            <p className="destination-card" >

              <figure className="card-banner">
                <img src={manali} width="1140" loading="lazy"
                  alt="Manali, Himachal Pradesh" className="img-cover" style={{ height: '670px' }} />
              </figure>

              <div className="card-content">
                <p className="card-subtitle">Himachal Pradesh</p>
                <h3 className="h3 card-title">Manali</h3>
              </div>

            </p>
          </li>

          <li className="w-50" onClick={() => navigate('/destination/shimla')}>
            <p className="destination-card">

              <figure className="card-banner">
                <img src={shimla} width="1140" height="1100" loading="lazy"
                  alt="Shimla, Himachal Pradesh" className="img-cover" />
              </figure>

              <div className="card-content">
                <p className="card-subtitle">Himachal Pradesh</p>
                <h3 className="h3 card-title">Shimla</h3>
              </div>

            </p>
          </li>

          <li onClick={() => navigate('/destination/delhi')}>
            <p className="destination-card">

              <figure className="card-banner">
                <img src={delhi} width="1110" height="400px" loading="lazy"
                  alt="Delhi, Delhi" className="img-cover" />
              </figure>

              <div className="card-content">
                <p className="card-subtitle">Delhi</p>
                <h3 className="h3 card-title">Delhi</h3>
              </div>

            </p>
          </li>

          <li onClick={() => navigate('/destination/mathura')}>
            <p className="destination-card">

              <figure className="card-banner">
                <img src={mathura} width="1110" loading="lazy"
                  alt="Mathura, Uttar Pradesh" className="img-cover" style={{ height: '440px' }} />
              </figure>

              <div className="card-content">
                <p className="card-subtitle">Uttar Pradesh</p>
                <h3 className="h3 card-title">Mathura</h3>
              </div>

            </p>
          </li>

          <li onClick={() => navigate('/destination/vrindhavan')}>
            <p className="destination-card">

              <figure className="card-banner">
                <img src={vrindavan} width="1110" height="480px" loading="lazy"
                  alt="Vrindavan, Uttar Pradesh" className="img-cover" />
              </figure>

              <div className="card-content">
                <p className="card-subtitle">Uttar Pradesh</p>
                <h3 className="h3 card-title">Vrindhavan</h3>
              </div>

            </p>
          </li>

        </ul>

      </div>
    </section>
  );
}

export default Destination