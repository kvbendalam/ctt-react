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
                  <i class="fa fa-instagram" style={{fontSize:"24px", color:"#dc2743"}}></i>
                </a>
              </li>

              <li>
                <a href="https://www.youtube.com/@CrazyTraveller_11" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i class="fa fa-youtube-play" style={{fontSize:"24px",color:"red"}}></i>
                </a>
              </li>

              <li>
                <a href="https://www.facebook.com/people/Mahesh-Reddy/pfbid0383emmfWygWZ1NpuPVEi3CByzQTYH69BSKrBj7jb7TtyNUamDEUtdj6EMZC6iijnJl/?ref=xav_ig_profile_web" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i class="fa fa-facebook-f" style={{fontSize:"24px",color:"#2962ff"}}></i>
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
