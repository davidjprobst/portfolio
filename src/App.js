import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';

class App extends Component {

  setActiveView() {
    console.log("active view set");
  }

  render() {
    return (
      <div className="App">
        <div id="container">
          <aside>
            <nav>
              <img className="prof-pic" src='/assets/images/prof-pic.png' />
              <Link to ='/about' className="link">About</Link>
              <Link to ='/' className="link">Projects</Link>
              <Link to ='/resume' className="link">Resume</Link>
              <Link to ='/contact' className="link">Contact</Link>
            </nav>
          </aside>
          <main>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
