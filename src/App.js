import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);

  const toggleHeader = () => setToggle(!toggle);

  return (
    <React.Fragment>
      <i
        className={
          toggle ? "fas fa-times nav-toggle" : "fas fa-bars nav-toggle"
        }
        onClick={toggleHeader}
      ></i>

      <header className={toggle ? "header-active" : ""}>
        <div>
          <div className="profile">
            <img src="/images/profile_picture.jpg" alt="Pic" />
            <h1>Allison Feliciano</h1>
            <div>
              <a>
                <i className="fab fa-telegram"></i>
              </a>
              <a>
                <i className="fab fa-viber"></i>
              </a>
              <a>
                <i className="far fa-envelope"></i>
              </a>
              <a>
                <i className="fas fa-phone"></i>
              </a>
            </div>
          </div>
          <nav className="navlinks">
            <ul>
              <li>
                <a className="nav-icons">
                  <i className="fas fa-home"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a className="nav-icons">
                  <i className="fas fa-user-tie"></i>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a className="nav-icons">
                  <i className="far fa-file-alt"></i>
                  <span>Resume</span>
                </a>
              </li>
              <li>
                <a className="nav-icons">
                  <i className="fas fa-project-diagram"></i>
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a className="nav-icons">
                  <i className="far fa-address-book"></i>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* <section className="landing-page">
        <div>
          <h1>Allison Feliciano</h1>
          <p>Enthusiast</p>
        </div>
      </section> */}
      <section>
        <div className="gallery">
          <div className="gallery-1">
            <img src="/images/1.jpg" alt="Gallery" />
            <img src="/images/2.JPEG" alt="Gallery" />
            <img src="/images/3.JPEG" alt="Gallery" />
            <img src="/images/4.JPEG" alt="Gallery" />
            <img src="/images/5.jpg" alt="Gallery" />
            <img src="/images/6.jpg" alt="Gallery" />
            <img src="/images/7.jpg" alt="Gallery" />
            <img src="/images/8.jpg" alt="Gallery" />
            <img src="/images/9.jpg" alt="Gallery" />
            <img src="/images/10.jpg" alt="Gallery" />
            <img src="/images/11.jpg" alt="Gallery" />
            <img src="/images/12.jpg" alt="Gallery" />
          </div>
          {/* <div className="gallery-2">
            <img src="/images/13.jpg" alt="Gallery" />
            <img src="/images/14.jpg" alt="Gallery" />
            <img src="/images/15.jpg" alt="Gallery" />
            <img src="/images/16.jpg" alt="Gallery" />
            <img src="/images/17.jpg" alt="Gallery" />
            <img src="/images/18.jpg" alt="Gallery" />
            <img src="/images/19.jpg" alt="Gallery" />
            <img src="/images/20.JPG" alt="Gallery" />
            <img src="/images/21.jpg" alt="Gallery" />
            <img src="/images/22.jpg" alt="Gallery" />
            <img src="/images/23.jpg" alt="Gallery" />
            <img src="/images/24.jpg" alt="Gallery" />
          </div>
          <div className="gallery-3">
            <img src="/images/25.jpg" alt="Gallery" />
            <img src="/images/26.jpg" alt="Gallery" />
            <img src="/images/27.jpg" alt="Gallery" />
            <img src="/images/28.jpg" alt="Gallery" />
            <img src="/images/29.jpg" alt="Gallery" />
            <img src="/images/30.jpg" alt="Gallery" />
            <img src="/images/31.jpg" alt="Gallery" />
            <img src="/images/32.jpg" alt="Gallery" />
            <img src="/images/33.jpeg" alt="Gallery" />
            <img src="/images/34.jpeg" alt="Gallery" />
            <img src="/images/35.jpeg" alt="Gallery" />
            <img src="/images/36.jpg" alt="Gallery" />
          </div> */}
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
