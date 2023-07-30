import React from 'react'

const About = () => {

  return (
    <section id="about">
      <h1 className="mt-3">ABOUT ME</h1>
      <div className="mb-3">
        <div className="about-profile-pic">
          <img src="https://res.cloudinary.com/yl/image/upload/v1635456338/IMG_20211004_234507_581_hde86d.webp" alt="Victor" />
        </div>
        <p>I initially embarked on the self taught route with SQL and Python, but felt I needed more direction and to accelerate the learning process by enrolling in the Software Engineering Immersive with General Assembly.
        Driven by a need to understand how things work, I am a highly motivated learner with an adaptable mindset and a fascination for technology.
        </p>
      </div>
      <br />
      <br />
      <div id="skills mb-3">
        <h1>MY SKILLS</h1>
        <h3>FRONTEND</h3>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="icon-card d-flex flex-column">
                <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JavaScript" />
                JavaScript
              </div>
            </div>
            <div className="col-4">
              <div className="icon-card d-flex flex-column">
                <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="HTML" />
                HTML
              </div>
            </div>
            <div className="col-4">
              <div className="icon-card d-flex flex-column">
                <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="CSS" />
                CSS
              </div>
            </div>
            <div className="col-6">
              <div className="icon-card d-flex flex-column">
                <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" />
                Sass
              </div>
            </div>
            <div className="col-6">
              <div className="icon-card d-flex flex-column">
                <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="Bootstrap" />
                Bootstrap
              </div>
            </div>
            <div className="col-12">
              <div className="icon-card d-flex flex-column">
                <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                React
              </div>
            </div>
          </div>
          <br />
          <br />
          <h3>BACKEND</h3>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="icon-card d-flex flex-column">
                  <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="Node.js"/>
                  Node.js
                </div>
              </div>
              <div className="col-6">
                <div className="icon-card d-flex flex-column">
                  <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" />
                  Express
                </div>
              </div>
              <div className="col-6">
                <div className="icon-card d-flex flex-column">
                  <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" alt="MongoDB" />
                  MongoDB
                </div>
              </div>
              <div className="col-4">
                <div className="icon-card d-flex flex-column">
                  <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                  Python
                </div>
              </div>
              <div className="col-4">
                <div className="icon-card d-flex flex-column">
                  <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" />
                  Django
                </div>
              </div>
              <div className="col-4">
                <div className="icon-card d-flex flex-column">
                  <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" alt="PostgreSQL" />
                  PostgreSQL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div id="interests">
        <h1>INTERESTS</h1>
        <div className="container">
          <div className="row d-flex align-content-center">
            <ul className="d-flex flex-column">
              <li>
                <div className="interest-start col-6">I love</div><div className="interest-info col-6">green tea, learning new sports and random facts</div>
              </li>
              <li>
                <div className="interest-start col-6">I hate</div><div className="interest-info col-6">tight spaces, bugs and cooked vegetables</div>
              </li>
              <li>
                <div className="interest-start col-6">I have</div><div className="interest-info col-6">played for a professional club in Switzerland and Malaysia</div>
              </li>
              <li>
                <div className="interest-start col-6">I want</div><div className="interest-info col-6">to travel to America and Africa, and learn sign language</div>
              </li>
              <li>
                <div className="interest-start col-6">I can</div><div className="interest-info col-6">play the piano and violin (not very well)</div>
              </li>
              <li>
                <div className="interest-start col-6">I can&apos;t</div><div className="interest-info col-6">see John Cena</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </section>
  )
  
}

export default About