import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import projectData from './../data/projects';

class Project extends Component {
  constructor(props) {
    super(props);

    const project = projectData.find( project => {
      return project.slug === this.props.match.params.slug
    });

    this.state = { project: project };

  }

  render() {
    return (
      <section id="project">
        <div className="close-project">
          <Link to="/">[x] Close</Link>
        </div>
        <section id="project-details">
          <p>{this.state.project.title}</p>
          <li>{
              this.state.project.info.map( (info,index) =>
              <div className="project-section" key={index}>
                <img className="project-image" src={info.image} alt={info.alt} />
                <p>{info.body}</p>
              </div>
              )
          }</li>
        </section>
      </section>
    );
  }
}

export default Project;
