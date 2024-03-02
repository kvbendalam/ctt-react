import React from 'react'
import './Style.css'

function Header() {
  return (
    <div>
         <header class="header" data-header>
    <div class="container">

      <a href="#">
        <h3 class="logo">Crazy Tours & Travels</h3>
      </a>

      <button class="nav-toggle-btn" data-nav-toggle-btn aria-label="Toggle Menu">
        <ion-icon name="menu-outline" class="open"></ion-icon>
        <ion-icon name="close-outline" class="close"></ion-icon>
      </button>

      <nav class="navbar">

        <ul class="navbar-list">

          <li>
            <a href="#" class="navbar-link">Home</a>
          </li>

          <li>
            <a href="#" class="navbar-link">About Us</a>
          </li>

          <li>
            <a href="#" class="navbar-link">Tours</a>
          </li>

          <li>
            <a href="#" class="navbar-link">Contact Us</a>
          </li>

        </ul>

        <p style={{color:"white", fontSize: "24px", margin:"10px"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
          </svg> +91 7989515104</p>

      </nav>

    </div>
  </header>
    </div>
  )
}

export default Header