import React from 'react'
import { NavLink } from 'react-router-dom';



class TopNavBar extends React.Component { 


    render() {
      return (
        <div class="nav-container">
            <nav class="navbar">
                <h1 id="navbar-logo">My Project Manager</h1>
                <div class="menu-toggle" id="mobile-menu">
                {/* <NavLink to="/menu" exact><span class="bar">toggle menu</span></NavLink>
                <NavLink to="/menu" exact><span class="bar">toggle menu</span></NavLink> */}

                </div>
                <ul class="nav-menu">
                <NavLink to="/menu" exact><li class="nav-links"><a href="#"></a>Home</li></NavLink>
                <NavLink to="/menu" exact><li class="nav-links"><a href="#"></a>Contact Us</li></NavLink>
                <NavLink to="/menu" exact><li class="nav-links"><a href="#"></a>About</li></NavLink>
                <NavLink to="/menu" exact><li class="nav-links"><a href="#"></a>Log In</li></NavLink>
                <NavLink to="/menu" exact><li class="nav-links nav-links-btn"><a href="#" ></a>Sign Up</li></NavLink>

                </ul>
            </nav>
        </div>
      )
    }
  }
   
  export default TopNavBar;