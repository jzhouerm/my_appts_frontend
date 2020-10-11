import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
// import moment from 'moment'
import './App.css'
import Dashboard from './Containers/Dashboard'
import TopNavBar from './Containers/TopNavBar'
// import Clients from './Containers/Clients'
import SideNavBar from './Containers/SideNavBar';
// import SearchBar from './Containers/SearchBar';
import Login from "./Containers/Login";
// import Register from "./Containers/Register";


export default class App extends Component {

  state = {
    emailLoggedIn: null,
    testEmail: "email@email.com", //properly being passed to dashboard upon login
    userObj: null,
  }

  loginHandler = (email) => {
    //if login is clicked, fetch for userdata matching email, true=>set email to state and redirect to dashboard, false=>null, stay onlogin page
    console.log("inside loginhandler ", email) //EMAIL INPUT IS BEING PROPERLY PASSED IN from login form but need to remove navlink from login form
    this.setState({ emailLoggedIn: email })
  }

  render(){
    // console.log("App.js state:", this.state)
    return (
      <Router>
        <div className="mainContainer">
        {/* {this.getUsersData()} */}

          <div className="App">
            <TopNavBar/>
          </div>

              <Switch>

                <Route path="/dashboard" render={() => 
                <Dashboard
                  testEmail={this.state.testEmail}
                  emailLoggedIn={this.state.emailLoggedIn}
                />} />

                <Route path="/login" render={() => 
                <Login
                  loginHandler={this.loginHandler}
                />} />

              </Switch>
             
        </div>
      </Router>
    );
  }
  
}
