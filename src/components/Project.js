import React, { Component } from 'react';
import projectData from './../data/projects';

class Project extends Component {
  constructor(props) {
    super(props);

    const project = project.find( project => {
      return project.slug === this.props.match.params.slug
    });

    this.state = { project: project };

  }

  render() {
    return (
      <h1>This is the Project component.</h1>
      <p>The project title is {this.state.project.title}</p>
    );
  }
}

export default Project;
