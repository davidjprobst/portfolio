import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import projectData from './../data/projects';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: projectData };
  }

  render() {
    return (
      <section id="home">
        {
        <div className='content'>
          <div id='intro'>
            <h1>David Probst is a digital product designer currently working in Chicago, Illinois.</h1>
            <h3>Working as the connective element between product vision and product development, he has had the opportunity to work with a range of companies - from Fortune 500 corporations to early stage start ups.</h3>
            <h3>Today, David is working with DAIS Technology and a Bay Area start up to create modern designs that excite users, and accelerate product development.</h3>
            <Link to='/about' class='about-link'>Read full bio ></Link>
          </div>
          <div id='recent-projects'>
            <h2>Style test</h2>
            <li className='project-skills-list'>
              <ul className='project-skill'>This is a skill</ul>
              <ul className='project-skill'>This is a skill</ul>
            </li>
            <p>This is the body text of the project and this is how it goes man. Heres the deal man.</p>
          </div>
        </div>
        }
      </section>
    );
  }
}

export default Landing;
