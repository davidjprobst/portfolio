import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 1,
    }

    this.setActive = this.setActive.bind(this)

  }

  setActive(e) {
    const clickedIndex = parseInt(e.target.getAttribute("index"), 10);
    this.setState({ activeIndex: clickedIndex });
  }

  render() {
    return(
      <nav>
        <img className="prof-pic" src='/assets/images/prof-pic.png' alt="profile" />
        <Link
          to ='/about'
          className={ this.state.activeIndex===0 ? 'active-link' : 'inactive-link' }
          index={0}
          onClick = { this.setActive }>
          About
        </Link>
        <Link
          to ='/'
          className={ this.state.activeIndex===1 ? 'active-link' :'inactive-link' }
          index={1}
          onClick = { this.setActive }>
          Projects
        </Link>
        <Link
          to ='/resume'
          className={ this.state.activeIndex===2 ? 'active-link' : 'inactive-link' }
          index={2}
          onClick = { this.setActive }>
          Resume
        </Link>
        <Link
          to ='/contact'
          className={ this.state.activeIndex===3 ? 'active-link' : 'inactive-link' }
          index={3}
          onClick = { this.setActive }>
          Contact
        </Link>
      </nav>
    );
  }
}

export default Nav;
