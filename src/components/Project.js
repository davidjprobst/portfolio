import React, { Component } from 'react';
import projectData from './../data/projects';

class Project extends Component {
  constructor(props) {
    super(props);

    const project = projectData.find( project => {
      return projectData.slug === this.props.match.params.slug
    });

    this.state = { project: project };

  }

  render() {
    return (
      <section id="projects">
        <h1>This is the Project component.</h1>
        <p>{this.state.project.title}</p>
      </section>
    );
  }
}

export default Project;
