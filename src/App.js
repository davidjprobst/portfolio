import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: "projects"
    }
  }

  makeActive(clickedItem, currentView) {
    console.log("changing the color of " + this.state.currentView);
    console.log(clickedItem.target);
    clickedItem.target.add("active");
  }

  setCurrentView(e) {
    var clickedValue = e.target.innerHTML.toLowerCase();
    this.setState({ currentView: clickedValue });
    this.makeActive(e, clickedValue)
  }

  render() {
    return (
      <div className="App">
        <div id="container">
          <aside>
            <nav>
              <img className="prof-pic" src='/assets/images/prof-pic.png' />
              <Link to ='/about' className="link" onClick = { (e) => this.setCurrentView(e) }>About</Link>
              <Link to ='/' className="link" onClick = { (e) => this.setCurrentView(e) }>Projects</Link>
              <Link to ='/resume' className="link" onClick = { (e) => this.setCurrentView(e) }>Resume</Link>
              <Link to ='/contact' className="link" onClick = { (e) => this.setCurrentView(e) }>Contact</Link>
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
