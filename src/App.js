import React, { useState, useEffect } from "react";
import ReactJsTyping from "reactjs-typing-effect";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  const titles = ["A Freelancer", "A Developer", "An Enthusiast"];
  // const items = [
  //   {
  //     id: 0,
  //     target: "Home",
  //     icon: "fas fa-home",
  //   },
  //   {
  //     id: 1,
  //     target: "About",
  //     icon: "fas fa-user-tie",
  //   },
  //   {
  //     id: 2,
  //     target: "Resume",
  //     icon: "far fa-file-alt",
  //   },
  //   {
  //     id: 3,
  //     target: "Skills",
  //     icon: "fas fa-award",
  //   },
  //   {
  //     id: 4,
  //     target: "Projects",
  //     icon: "fas fa-project-diagram",
  //   },
  //   {
  //     id: 5,
  //     target: "Contact",
  //     icon: "far fa-address-book",
  //   },
  // ];

  const showBackToTop = () => {
    if (window.scrollY > 500) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", showBackToTop);

  const toggleHeader = () => setToggle(!toggle);

  const [active, setActive] = useState(false);

  // !active ?

  // const addActiveClass = () => {
  //   const el = document.getElementsByClassName("navHome")[0];
  //   if (!active) {
  //     el.classList.add("active");
  //   } else {
  //     el.classList.remove("active");
  //   }
  // };

  useEffect(() => {
    showBackToTop();
  }, []);

  // const toggleActiveNav = (e) => {
  //   let defaultClass = "nav-icons";
  //   let allClasses = document.getElementsByClassName("nav-icons active");
  //   if (allClasses) {
  //     while (allClasses[0]) {
  //       allClasses[0].remove("active");
  //     }
  //   }
  //   e.target.className = defaultClass.replace("nav-icons", "nav-icons active");
  // };

  // const NavLink = ({ id, target, icon, isActive, onClick }) => (
  //   <a
  //     href={`#${target.toLowerCase()}`}
  //     onClick={useCallback(() => onClick(id), [id])}
  //     className={`nav-icons ${isActive ? "activeIcon activeNav" : ""}`}
  //   >
  //     <i className={icon}></i>
  //     <span>{target}</span>
  //   </a>
  // );

  // const Nav = ({ menuItems }) => {
  //   let [active, setActive] = useState(0);
  //   return (
  //     <ul>
  //       {menuItems.map((item) => (
  //         <li key={item.id}>
  //           <NavLink
  //             {...item}
  //             onClick={setActive}
  //             isActive={active === item.id}
  //           ></NavLink>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };

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
            <img src="./images/profile_picture.jpg" alt="Pic" />
            <h1>Allison Feliciano</h1>
            <div>
              <a href="#contact">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="#contact">
                <i className="fab fa-viber"></i>
              </a>
              <a href="#contact">
                <i className="far fa-envelope"></i>
              </a>
              <a href="#contact">
                <i className="fas fa-phone"></i>
              </a>
            </div>
          </div>
          <nav className="navlinks">
            {/* <Nav menuItems={items}></Nav> */}
            <ul>
              <li>
                <a
                  href="#home"
                  className={
                    active === "home" ? "nav-icons active" : "nav-icons"
                  }
                  onClick={() => {
                    setActive("home");
                  }}
                >
                  <i className="fas fa-home"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={
                    active === "about" ? "nav-icons active" : "nav-icons"
                  }
                  onClick={() => {
                    setActive("about");
                  }}
                >
                  <i className="fas fa-user-tie"></i>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className={
                    active === "resume" ? "nav-icons active" : "nav-icons"
                  }
                  onClick={() => {
                    setActive("resume");
                  }}
                >
                  <i className="far fa-file-alt"></i>
                  <span>Resume</span>
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={
                    active === "skills" ? "nav-icons active" : "nav-icons"
                  }
                  onClick={() => {
                    setActive("skills");
                  }}
                >
                  <i className="fas fa-award"></i>
                  <span>Skills</span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={
                    active === "projects" ? "nav-icons active" : "nav-icons"
                  }
                  onClick={() => {
                    setActive("projects");
                  }}
                >
                  <i className="fas fa-project-diagram"></i>
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={
                    active === "contact" ? "nav-icons active" : "nav-icons"
                  }
                  onClick={() => {
                    setActive("contact");
                  }}
                >
                  <i className="far fa-address-book"></i>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className={toggle ? "ml330 landing-page" : "landing-page"}
      >
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
                        <strong>Course:</strong>
                        <span>Computer Science and Information System</span>
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
                        <strong>Religion:</strong>
                        <span>Catholic</span>
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
                    <h4>Assistant Consultant</h4>
                    <h5>October 2021 – Present</h5>
                    <p>
                      <strong>Tata Consulting Services</strong>
                    </p>
                    <p>Temporary work from home setup</p>
                    <ul>
                      <li>
                        Responsible for the HTML, CSS and JavaScript part of the
                        web application
                      </li>
                      <li>Mobile first code layout</li>
                      <li>Browser compatibility testing</li>
                      <li>Using ReactJS as the front end framework</li>
                      <li>Integration with back end API’s</li>
                      <li>Complying with the UX design requirements</li>
                      <li>Optimization of loading pages</li>
                      <li>Addition of features within the application</li>
                      <li>Being agile with ongoing changes from the client</li>
                    </ul>
                  </div>
                  <div className="resume-info">
                    <h4>Freelance web developer</h4>
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
                      <li>Python/Django and NodeJS for the back end</li>
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

        <section id="skills" className="skills">
          <div className="main-container">
            <div className="container-title">
              <h2>Skills</h2>
              <p>
                I honestly do not know 100% of every web technology. I still
                have to research and study some of them if I'm stuck on an error
                or bug. But I can say that I know enough to kick start an
                application.
              </p>
              <div className="skills-container container-content">
                <div>
                  <p>
                    <i className="fab fa-html5 html5"></i>
                    <i className="fab fa-css3 css3"></i>
                    <i className="fab fa-js-square js"></i>
                  </p>
                  <span>
                    Versed with best practices of HTML5, CSS3 and JavaScript.
                  </span>
                </div>
                <div>
                  <p>
                    <i className="fab fa-chrome chrome"></i>
                    <i className="fab fa-firefox-browser firefox"></i>
                    <i className="fab fa-edge edge"></i>
                  </p>
                  <span>
                    Testing with all modern browsers for compatibility issues.
                  </span>
                </div>
                <div>
                  <p>
                    <i className="fas fa-server"></i>
                  </p>
                  <span>
                    Connection and usage API, e.g. (GET, POST and DELETE).
                  </span>
                </div>
                <div>
                  <p>
                    <i className="fas fa-users user"></i>
                  </p>
                  <span>
                    Making sure that proper UI/UX design is implemented for
                    better experience for the users.
                  </span>
                </div>
                <div>
                  <p>
                    <i className="fas fa-key key"></i>
                  </p>
                  <span>
                    Using token and authentication process for better security.
                  </span>
                </div>
                <div>
                  <p>
                    <i className="fab fa-react react"></i>
                    <i className="fab fa-angular angular"></i>
                  </p>
                  <span>
                    Modern front end frameworks for better SPA experience.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="main-container">
            <div className="container-title">
              <h2>Projects</h2>
              <p>
                Short list of some projects that I've done. Some are for clients
                and others for personal growth.
              </p>
              <div className="container-content">
                <div className="projects-content">
                  <ul>
                    <li>
                      <i className="fas fa-chevron-right"></i>
                      <strong>A&A Travel and Tours</strong> -{" "}
                      <span>
                        A business website that details their services with
                        travel and tours
                      </span>
                      <br />
                      <a
                        href="https://aatraveltours.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.aatravelandtours.com
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-chevron-right"></i>
                      <strong>Sportion Dafabet</strong> -{" "}
                      <span>
                        A webpage describing the services of their online
                        betting site
                      </span>
                      <br />
                      <a
                        href="https://sportiondafabet.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.sportiondafabet.com
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-chevron-right"></i>
                      <strong>Dork (Dose Of Random Kwōts)</strong> -{" "}
                      <span>A just for fun personal project of mine</span>
                      <br />
                      <a
                        href="https://dorkdork.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.dork.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="main-container">
            <div className="container-title">
              <h2>Contact</h2>
              <p>Feel free to contact me.</p>
              <div className="container-content">
                <div className="contact-details">
                  <ul>
                    <li>
                      <i className="far fa-envelope"></i>
                      <span>Email:</span>
                      <a href="mailto:allisonlaya.feliciano@gmail.com">
                        allisonlaya.feliciano@gmail.com
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-phone"></i>
                      <span>Phone:</span>
                      <span>09175394025 / 09275124936</span>
                    </li>
                    <li>
                      <i className="fab fa-telegram"></i>
                      <span>Telegram:</span>
                      <span>09275124936 (Alli)</span>
                    </li>
                    <li>
                      <i className="fab fa-viber"></i>
                      <span>Viber:</span>
                      <span>09275124936 (Alli)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <i
        className={
          scroll
            ? "scrollTop fas fa-arrow-up activeScroll"
            : "scrollTop fas fa-arrow-up"
        }
        onClick={scrollToTop}
      ></i>
    </React.Fragment>
  );
}

export default App;
