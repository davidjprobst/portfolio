import React, { Component } from 'react';
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
      <section id="projects">
        <h1>This is the Project component.</h1>
        <p>{this.state.project.title}</p>
        <p>{
            this.state.project.info.map( (info,index) =>
            <div className="project-section">
              <img className="project-image" src={info.image} alt={info.alt} />
              <p>{info.body}</p>
            </div>
            )
        }</p>
      </section>
    );
  }
}

export default Project;
