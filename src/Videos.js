import React from 'react';
import YouTube from 'react-youtube';

function Videos() {
  const videoLinks = [
    "https://www.youtube.com/watch?v=cggDbPhPXpc",
    "https://www.youtube.com/watch?v=jdibVPupHL0",
    "https://www.youtube.com/watch?v=FZ6pm86ZvVM"
  ];

  return (
    <section className="section blog">
      <div className="container">
        <p className="section-subtitle">From The Crazy traveller YouTube</p>
        <h2 className="h2 section-title">Latest Videos</h2>
        <ul className="blog-list">
          {videoLinks.map((videoLink, index) => (
            <li key={index}>
              <div className="blog-card">
                <div className="card-banner">
                  <YouTube
                    videoId={getYouTubeID(videoLink)}
                    className="video-player"
                    opts={{
                      width: 360,
                      height: 218,
                      playerVars: {
                        autoplay: 0,
                      },
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function getYouTubeID(url) {
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  if (match && match[2].length === 11) {
    return match[2];
  } else {
    return 'error';
  }
}

export default Videos;
