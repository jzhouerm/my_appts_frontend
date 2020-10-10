import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
// import moment from 'moment'
import './App.css'
import Dashboard from './Containers/Dashboard'
import TopNavBar from './Containers/TopNavBar'
import Clients from './Containers/Clients'
import SideNavBar from './Containers/SideNavBar';
// import SearchBar from './Containers/SearchBar';
import Login from "./Containers/Login";
// import Register from "./Containers/Register";


export default class App extends Component {

  state = {
    emailLoggedIn: null,
    userObj: null,
  }

  loginHandler = (email) => {
    //if login is clicked, fetch for userdata matching email, true=>set email to state and redirect to dashboard, false=>null, stay onlogin page
    console.log("inside loginhandler ", email)
    this.setState({ emailLoggedIn: email })
  }
  
  async componentDidMount(){
    const response = await fetch("http://localhost:3000/users/4/")
    const json = await response.json()
    this.setState({userObj: json})
        // {let user = allUsers.find(obj => obj.email === x)
        //   {user ? <Redirect to={{pathname: "/dashboard"}}/> : <Redirect to={{pathname: "/dashboard"}}/> }})
  }


  render(){
    console.log("App.js state:", this.state)
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
                  userObj={this.state.userObj} 
                />} />

                <Route path="/login" render={() => 
                <Login
                  userObj={this.state.userObj} 
                  loginHandler={this.loginHandler}
                />} />

                <Route path="/clients" render={() => 
                <Clients
                  userObj={this.state.userObj} 
                />} />

              </Switch>
             
        </div>
      </Router>
    );
  }
  
}
