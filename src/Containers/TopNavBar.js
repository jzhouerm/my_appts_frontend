import React from 'react'
import { NavLink } from 'react-router-dom';
import '../CSS/TopNavBar.css';
import hex2 from '../Components/hex2.png'


class TopNavBar extends React.Component { 

  state ={
    login: false
  }

  changeLogin = () =>{
    const loginStatus = this.state.login
    this.setState({login: !loginStatus})
  }

    render() {
      return (
        <div className="nav-container">
            <nav className="navbar">
                {/* <h1 id="navbar-logo">My Clients</h1> */}
                <h1 className="logo-name"><img src={hex2} className="logo" alt="hex2" />            My HQ </h1>
                

                <div className="menu-toggle" id="mobile-menu">

                </div>
                <ul className="nav-menu">
                <NavLink style={{ textDecoration: 'none' }} to="/" exact><li className="nav-links">Home</li></NavLink>
                <NavLink style={{ textDecoration: 'none' }} to="/login" exact><li className="nav-links"onClick={()=>this.changeLogin()}>
                            {(this.state.login === false) ? "Log in" : "Log out"}</li></NavLink>
                <NavLink style={{ textDecoration: 'none' }} to="/signup" exact><li className="nav-links nav-links-btn">Sign Up</li></NavLink>

                </ul>
            </nav>
        </div>
      )
    }
  }
   
  export default TopNavBar;