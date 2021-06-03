import React, { useState, useEffect } from "react";
import ReactJsTyping from "reactjs-typing-effect";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);

  const toggleHeader = () => setToggle(!toggle);

  const titles = ["A Freelancer", "A Developer", "An Enthusiast"];

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

      <section className={toggle ? "ml330 landing-page" : "landing-page"}>
        <div>
          <h1>Allison Feliciano</h1>
          <p>
            <ReactJsTyping StringList={titles} speed={750} />
          </p>
        </div>
      </section>

      <main>
        <section id="about" className="about">
          <div className="main-container">
            <div className="container-title">
              <h2>About</h2>
              <p>
                Kamusta! Hello! Konnichiwa! Bonjour! Hola! Ni hao! Ciao!
                Anyoung! (yes, I just Googled some of those greetings.) Allison
                here, Alli for short. An ordinary guy with an extraordinary
                imagination. I do believe that being imaginative can make a
                person be who they want to be.
              </p>
            </div>
            <div className="container-content">
              <div>
                <h3>Personal Information</h3>
                <p className="italic">Basic stuff about yours truly.</p>
                <div className="personal-info">
                  <div>
                    <ul>
                      <li>
                        <i className="fas fa-chevron-right"></i>
                        <strong>Full Name:</strong>
                        <span>Allison Laya Feliciano</span>
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>
                        <strong>Birthdate:</strong>
                        <span>April 16, 1986</span>
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>
                        <strong>Age:</strong>
                        <span>35</span>
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>
                        <strong>Height:</strong>
                        <span>5'6</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <i className="fas fa-chevron-right"></i>
                        <strong>Nationality:</strong>
                        <span>Filipino</span>
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>
                        <strong>Status:</strong>
                        <span>Single</span>
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>
                        <strong>City:</strong>
                        <span>Malolos</span>
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>
                        <strong>Province:</strong>
                        <span>Bulacan</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <i className="fas fa-chevron-right"></i>
                        <strong>College:</strong>
                        <span>Centro Escolar University</span>
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>
                        <strong>Degree:</strong>
                        <span>Bachelor</span>
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>
                        <strong>Religion:</strong>
                        <span>Catholic</span>
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>
                        <strong>Language:</strong>
                        <span>Filipino, English</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <i className="fas fa-chevron-right"></i>
                        <strong>Website:</strong>
                        <span>www.allisonfeliciano.com</span>
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>
                        <strong>Degree:</strong>
                        <span>Bachelor</span>
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>
                        <strong>Freelance:</strong>
                        <span>Available</span>
                      </li>
                      <li>
                        <i className="fas fa-chevron-right"></i>
                        <strong>Country:</strong>
                        <span>Philippines</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <h3>Travel Junkie</h3>
                <p className="italic">
                  "Not all who wander are lost". Traveling has always been a
                  simple activity that helps people enjoy, live life and forget
                  problems. My simple solution if ever I feel stressed or
                  depressed. Going to places I've never been before helped me
                  change my personality for the better. Life has always been a
                  journey. It is either a daring adventure or nothing at all.
                </p>
                <h3>Random Facts</h3>
                <div className="random-facts">
                  <ul>
                    <li>
                      <i className="fas fa-circle"></i>No rice since 2011, just
                      because.
                    </li>
                    <li>
                      <i className="fas fa-circle"></i>
                      No social media accounts. As you can tell from my contact
                      details.
                    </li>
                    <li>
                      <i className="fas fa-circle"></i>
                      Conversationalist. (Maybe someday we can talk about your
                      random facts)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="resume" className="resume">
          <div className="main-container">
            <div className="container-title">
              <h2>Resume</h2>
              <p>
                I have been a web developer for over 8 years now. Witnessed the
                vast changes within the technologies may it be front end or back
                end stuff. Even if web development nowadays comes easy to some
                people, I am still very much excited on what new ideas and
                progression about web and technology would bring.
              </p>
            </div>
            <div className="container-content">
              <h3>Professional Experience</h3>
              <div className="resume">
                <div>
                  <div className="resume-info">
                    <h4>Freelance front end web developer</h4>
                    <h5>2017 - Present</h5>
                    <p>Work from home setup</p>
                    <ul>
                      <li>
                        Responsible for the HTML, CSS and JS part of the web
                        application.
                      </li>
                      <li>Mobile first code layout</li>
                      <li>Browser compatibilty testing</li>
                      <li>Using ReactJS as the front end framework</li>
                    </ul>
                  </div>
                  <div className="resume-info">
                    <h4>Senior Web Developer</h4>
                    <h5>June 2019 - January 2020</h5>
                    <p>
                      <strong>Cloudstaff Philippines Inc.</strong>
                    </p>
                    <p>
                      12F Entec2 Bldg, New Point Mall Plaridel St. corner
                      Catalina, Nepo Center, Angeles City
                    </p>
                    <ul>
                      <li>
                        Handled mostly the front end side of the application and
                        giving support for the back end
                      </li>
                      <li>
                        ReactJS was used for the front end and Ruby on Rails for
                        the back end
                      </li>
                      <li>Used Redux as our state management</li>
                      <li>
                        Working side by side with our customer support team for
                        client requests
                      </li>
                      <li>Adding new features within the application</li>
                    </ul>
                  </div>
                  <div className="resume-info">
                    <h4>.NET Developer</h4>
                    <h5>July 2016 - February 2019</h5>
                    <p>
                      <strong>ProV International Inc.</strong>
                    </p>
                    <p>
                      37th Floor, GT Tower International, 2813, Ayala Avenue,
                      Makati, 1200 Metro Manila
                    </p>
                    <ul>
                      <li>
                        Overall tasks were split between the two, 70% front end
                        tasks and 30% back end tasks
                      </li>
                      <li>
                        AngularJS was used for the front end and C# for the back
                        end
                      </li>
                      <li>Resolved website performance issues</li>
                      <li>
                        Refine code and improve processes to produce smoother
                        opertaions and enhance user engagement
                      </li>
                      <li>
                        Delivered a better user experience through optimization
                        of codes, cross-browser compatibilty and refactoring of
                        data
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="resume-info">
                    <h4>Web Developer</h4>
                    <h5>May 2013 - May 2016</h5>
                    <p>
                      <strong>Trend Micro Incorporated Philippines</strong>
                    </p>
                    <p>
                      8/F Tower 2, The Rockwell Business Center, 1600, Ortigas
                      Ave, Pasig, Metro Manila
                    </p>
                    <ul>
                      <li>
                        Full stack developer using Javascript and jQuery for the
                        front end and C# for the back end
                      </li>
                      <li>Converting Photoshop designs to working web pages</li>
                      <li>
                        Presenting wireframes/mockup pages to stakeholders
                      </li>
                      <li>Made several projects with Microsoft Sharepoint</li>
                    </ul>
                  </div>
                  <div className="resume-info">
                    <h4>Front End Developer</h4>
                    <h5>September 2010 - November 2012</h5>
                    <p>
                      <strong>
                        Pulse Interactive Systems International Inc.
                      </strong>
                    </p>
                    <p>
                      105 L. P. Leviste 1200 Makati City Metro Manila -
                      Philippines
                    </p>
                    <ul>
                      <li>Handled the site's user interface</li>
                      <li>
                        HTML, CSS, Javascript and jQuery best practices
                        application
                      </li>
                      <li>Browser compatibilty testing</li>
                      <li>
                        One of the main developers using technologies such as
                        ASP.NET MVC 3, C# 4.0, VS2010, WCF Web Services, JSON,
                        etc.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
