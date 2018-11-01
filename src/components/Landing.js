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
      <section id="projects">
        {
          <h1>HOME PAGE</h1>
        }
      </section>
    );
  }
}

export default Landing;
