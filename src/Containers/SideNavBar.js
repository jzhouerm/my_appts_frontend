import React from 'react';
import { NavLink } from 'react-router-dom';


export default class SideNavBar extends React.Component {

  render() {
    return (
      <>
      <div className="nav-container" color="white" >
    <h1 id="navbar-logo">{this.props.userObj.first_name}'s SideNavBar</h1>
        <NavLink to="/dashboard" exact><li className="nav-links">My Dashboard</li></NavLink>
        <NavLink to="/clients" exact><li className="nav-links">My Clients</li></NavLink>
        <NavLink to="/tasks" exact><li className="nav-links">My Tasks</li></NavLink>
        <NavLink to="/newclient" exact><li className="nav-links">New Client</li></NavLink>
        <NavLink to="/newservice" exact><li className="nav-links">New Service</li></NavLink>

      </div>
      </>
    )
  }
}