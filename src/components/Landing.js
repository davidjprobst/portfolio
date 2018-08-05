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
      <section className="projects">
        {
          this.state.projects.map( (project,index)  =>
          <div className="project-preview">
            <img className="project-cover-image" src={project.coverImage} alt={project.title} />
            <h2>{project.title}</h2>
            <p className="project-skills">{project.skills}</p>
            <p>{project.intro}</p>
            <Link to={`project/${project.slug}`} key={index} className="see-more">View Project</Link>
          </div>
          )
        }
      </section>
    );
  }
}

export default Landing;
