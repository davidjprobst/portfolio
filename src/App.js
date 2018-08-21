import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import About from './components/About';
// import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 1,
    }
  }

  setActive(index) {
    this.setState({ activeIndex: index });
  }

  render() {
    return (
      <div className="App">
        <div id="container">
          <aside>
            <nav>
              <img className="prof-pic" src='/assets/images/prof-pic.png' alt="profile" />
              <Link to ='/about' className={ this.state.isActive ? 'active-link' : 'inactive-link' } index={0} isActive={ this.state.activeIndex===0 } onClick = { this.setActive }>About</Link>
              <Link to ='/' className={ this.state.isActive ? 'active-link' : 'inactive-link' } index={1} isActive={ this.state.activeIndex===1 } onClick = { this.setActive }>Projects</Link>
              <Link to ='/resume' className={ this.state.isActive ? 'active-link' : 'inactive-link' } index={2} isActive={ this.state.activeIndex===2 } onClick = { this.setActive }>Resume</Link>
              <Link to ='/contact' className={ this.state.isActive ? 'active-link' : 'inactive-link' } index={3} isActive={ this.state.activeIndex===3 } onClick = { this.setActive }>Contact</Link>
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
