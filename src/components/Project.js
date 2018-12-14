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
      <section class="project">
        <div className="close-project">
          <Link to="/">Close [X]</Link>
        </div>
        <section id="project-details">
          <img className="project-image" src = {this.state.project.coverImage} alt={this.state.project.coverImageAlt} />
          <h1 className="project-title">{this.state.project.title}</h1>
          <li className='project-skills-list'>
            {this.state.project.skills.map( (skill,index) =>
              <ul className='project-skill' key={index}>{skill}</ul>
            )}
          </li>
          <p className="project-intro">{this.state.project.intro}</p>
          <li>{
              this.state.project.info.map( (info,index) =>
              <div className="project-section" key={index}>
                <img className="project-image" src={info.image} alt={info.alt} />
                <p className="project-blurb">{info.body}</p>
              </div>
              )
          }</li>
        </section>
      </section>
    );
  }
}

export default Project;
