import React from 'react'
import { NavLink } from 'react-router-dom';
import '../CSS/TopNavBar.css';



class TopNavBar extends React.Component { 


    render() {
      return (
        <div className="nav-container">
            <nav className="navbar">
                {/* <h1 id="navbar-logo">My Clients</h1> */}
                <h1 className="logo-name">My HQ</h1>

                <div className="menu-toggle" id="mobile-menu">
                {/* <NavLink to="/menu" exact><span className="bar">toggle menu</span></NavLink>
                <NavLink to="/menu" exact><span className="bar">toggle menu</span></NavLink> */}

                </div>
                <ul className="nav-menu">
                {/* <NavLink to="/" exact><li className="nav-links">Home</li></NavLink> */}
                {/* <NavLink to="/contact" exact><li className="nav-links">Contact Us</li></NavLink> */}
                {/* <NavLink to="/about" exact><li className="nav-links">About</li></NavLink> */}
                <NavLink to="/login" exact><li className="nav-links">Log In</li></NavLink>
                <NavLink to="/signup" exact><li className="nav-links nav-links-btn">Sign Up</li></NavLink>

                </ul>
            </nav>
        </div>
      )
    }
  }
   
  export default TopNavBar;