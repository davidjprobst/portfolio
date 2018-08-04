import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <aside>
          <nav>
            <Link to ='/about' className="link">About</Link>
            <Link to ='/' className="link">Projects</Link>
            <Link to ='/resume' className="link">Resume</Link>
            <Link to ='/contact' className="link">Contact</Link>
          </nav>
        </aside>
      </div>
    );
  }
}

export default App;
