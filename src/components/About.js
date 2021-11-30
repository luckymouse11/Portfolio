import React from 'react'

const About = () => {

  return (
    <section id="about">
      <h1 className="mt-3">ABOUT ME</h1>
      <div className="mb-3">
        <div className="about-profile-pic">
          <img src="https://res.cloudinary.com/yl/image/upload/v1635456338/sneakers/IMG_20211004_234507_581_hde86d.webp" alt="Victor" />
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
              <div className="d-flex flex-column">
                <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                JavaScript
              </div>
            </div>
            <div className="col-4">
              <div className="d-flex flex-column">
                <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
                HTML
              </div>
            </div>
            <div className="col-4">
              <div className="d-flex flex-column">
                <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
                CSS
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-column">
                <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                Sass
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-column">
                <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" />
                Bootstrap
              </div>
            </div>
          </div>
          <br />
          <br />
          <h3>BACKEND</h3>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="d-flex flex-column">
                  <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
                  Node.js
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column">
                  <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                  Express
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column">
                  <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" />
                  MongoDB
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column">
                  <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                  Python
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column">
                  <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
                  Django
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column">
                  <img className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" />
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
        <ul>
          <li><span>I love </span>learning new sports and random facts</li>
          <li><span>I hate </span>cooked vegetables</li>
          <li><span>I have </span>represented England at junior and senior level, played for a professional club in Switzerland and Malaysia</li>
          <li><span>I want </span>to travel to America and Africa</li>
          <li><span>I can </span>ski and snowboard</li>
          <li><span>I cant </span></li>
        </ul>
      </div>
      <br />
      <br />
      <br />
    </section>
  )
  
}

export default About