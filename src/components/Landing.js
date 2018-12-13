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
          <div id='intro' className="fixed-width">
            <h1 id='title' className='xs-text-padding'><span className='white-text-background'>David Probst is a Chicago-based software designer.</span></h1>
            <div id='home-image'>
              <img src='/assets/images/home-image.jpeg'></img>
            </div>
            <h3 className='xs-text-padding'><span className='white-text-background'>Working as the connective element between product vision and product development, he has had the opportunity to work with a range of companies - from Fortune 500 corporations to early stage start ups.</span></h3>
            <h3 className='xs-text-padding'><span className='white-text-background'>David has designing responsive web products, iOS apps, conversational interfaces, and design systems. He has recently worked with two early stage startps to create designs that excite users and accelerate product development.</span></h3>
            {/*} <Link to='/about' class='about-link xs-text-padding'>Read full bio ></Link> */}
          </div>

          <div id='recent-projects'>
            {
              this.state.projects.map( (project,index) =>
              <div className='project-preview' key={index}>
                <div className='project-description xs-text-padding'>
                  <h2>{project.title}</h2>
                  <li className='project-skills-list'>
                    {project.skills.map( (skill,index) =>
                      <ul className='project-skill' key={index}>{skill}</ul>
                    )}
                  </li>
                  <p>{project.intro}</p>
                  <div className='project-link'>
                    <Link to={`/projects/${project.slug}`} key={index}>See full project ></Link>
                  </div>
                </div>
                <div className='project-cover-image'>
                  <img src = {project.coverImage} alt={project.coverImageAlt} />
                </div>
              </div>
            )}
          </div>
        </div>
        }
        <a id="linkedin" href="//www.linkedin.com/in/davidjprobst/" target="_blank">
          <p>Connect on LinkedIn</p>
        </a>
      </section>
    );
  }
}

export default Landing;
