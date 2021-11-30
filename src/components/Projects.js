import React from 'react'
import p4Pic from '../styles/images/p4-homepage.png'
import p3Pic from '../styles/images/p3-homepage.png'
import p2Pic from '../styles/images/p2-homepage.png'
import p1Pic from '../styles/images/p1-screenshot-4.png'

const Projects = () => {

  return (
    <section id="projects" className="m-4">
      <h1>MY PROJECTS</h1>
      <div className="project-display">
        <div className="project-card mb-3 p-1">
          <h3>Sneaker-dom</h3>
          <hr/>
          <img src={p4Pic} alt="project 4 homepage" width="95%"/>
          <p>
          An 8 day solo project with the requirement of displaying one-to-many and many-to-many relationships. 
          I decided to create a sneaker database app as a place for “sneakerheads” to comment, review and collaborate. 
          The project uses Django rest framework with a frontend built with React.
          </p>
          Link to site
          Github Repo
        </div>
        <div className="project-card mb-3 p-1">
          <h3>How Green is Your Plate</h3>
          <hr/>
          <img src={p3Pic} alt="project 3 homepage" width="95%"/>
          <p>
          A recipe website with a focus on the environmental impact of certain food ingredients. 
          An 8 day group project built using MongoDB, Express, React, Node.js, Bootleg and SASS.
          </p>
          Link to site
          Github Repo
        </div>
        <div className="project-card mb-3 p-1">
          <h3>Random Movie Generator</h3>
          <hr/>
          <img src={p2Pic} alt="project 2 homepage" width="95%"/>
          <p>
          A Hackathon style pair project challenge. We were given 48 hours to create a React app using a public API. 
          We decided to create a Movie database with the unique selling point of being a random movie generator.
          </p>
          Link to site
          Github Repo
        </div>
        <div className="project-card mb-3 p-1">
          <h3>Battleships Avengers</h3>
          <hr/>
          <img src={p1Pic} alt="project 1 homepage" width="95%"/>
          <p>
          The first project with GA, an Avengers themed Battleships game. 
          This was a solo project built in 8 days using Vanilla JavaScript, HTML and CSS.
          </p>
          Link to site
          Github Repo
        </div>
      </div>
    </section>
  )

}

export default Projects