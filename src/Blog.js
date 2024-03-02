import React from 'react';
import popular1 from './assets/images/popular-1.jpg';
import popular2 from './assets/images/popular-2.jpg';
import popular3 from './assets/images/popular-3.jpg';
import authorAvatar from './assets/images/author-avatar.png';

function Blog() {
  return (
    <section className="section blog">
      <div className="container">
        <p className="section-subtitle">From The Crazy traveller YouTube</p>
        <h2 className="h2 section-title">Latest Videos</h2>
        <ul className="blog-list">
          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <button>
                  <img
                    src={popular1}
                    width="740"
                    height="518"
                    loading="lazy"
                    alt="A good traveler has no fixed plans and is not intent on arriving."
                    className="img-cover"
                  />
                </button>
                <span className="card-badge">
                  <ion-icon name="time-outline"></ion-icon>
                  <time datetime="12-04">04 Dec</time>
                </span>
              </figure>
              <div className="card-content">
                <div className="card-wrapper">
                  <div className="author-wrapper">
                    <figure className="author-avatar">
                      <img src={authorAvatar} width="30" height="30" alt="Jony bristow" />
                    </figure>
                    <div>
                      <a href="#" className="author-name">
                        Jony bristow
                      </a>
                      <p className="author-title">Admin</p>
                    </div>
                  </div>
                  <time className="publish-time" datetime="10:30">
                    10:30 AM
                  </time>
                </div>
                <h3 className="card-title">
                  <button>
                    A good traveler has no fixed plans and is not intent on arriving.
                  </button>
                </h3>
                <button className="btn-link">
                  <span>Read More</span>
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </button>
              </div>
            </div>
          </li>
          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <button>
                  <img
                    src={popular2}
                    width="740"
                    height="518"
                    loading="lazy"
                    alt="A good traveler has no fixed plans and is not intent on arriving."
                    className="img-cover"
                  />
                </button>
                <span className="card-badge">
                  <ion-icon name="time-outline"></ion-icon>
                  <time datetime="12-04">04 Dec</time>
                </span>
              </figure>
              <div className="card-content">
                <div className="card-wrapper">
                  <div className="author-wrapper">
                    <figure className="author-avatar">
                      <img src={authorAvatar} width="30" height="30" alt="Jony bristow" />
                    </figure>
                    <div>
                      <a href="#" className="author-name">
                        Jony bristow
                      </a>
                      <p className="author-title">Admin</p>
                    </div>
                  </div>
                  <time className="publish-time" datetime="10:30">
                    10:30 AM
                  </time>
                </div>
                <h3 className="card-title">
                  <button>
                    A good traveler has no fixed plans and is not intent on arriving.
                  </button>
                </h3>
                <button className="btn-link">
                  <span>Read More</span>
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </button>
              </div>
            </div>
          </li>
          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <button>
                  <img
                    src={popular3}
                    width="740"
                    height="518"
                    loading="lazy"
                    alt="A good traveler has no fixed plans and is not intent on arriving."
                    className="img-cover"
                  />
                </button>
                <span className="card-badge">
                  <ion-icon name="time-outline"></ion-icon>
                  <time datetime="12-04">04 Dec</time>
                </span>
              </figure>
              <div className="card-content">
                <div className="card-wrapper">
                  <div className="author-wrapper">
                    <figure className="author-avatar">
                      <img src={authorAvatar} width="30" height="30" alt="Jony bristow" />
                    </figure>
                    <div>
                      <a href="#" className="author-name">
                        Jony bristow
                      </a>
                      <p className="author-title">Admin</p>
                    </div>
                  </div>
                  <time className="publish-time" datetime="10:30">
                    10:30 AM
                  </time>
                </div>
                <h3 className="card-title">
                  <button>
                    A good traveler has no fixed plans and is not intent on arriving.
                  </button>
                </h3>
                <button className="btn-link">
                  <span>Read More</span>
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Blog;
