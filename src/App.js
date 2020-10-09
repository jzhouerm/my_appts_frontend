import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css'
import Dashboard from './Containers/Dashboard'
import TopNavBar from './Containers/TopNavBar'

// import SideNavBar from './Containers/SearchBar';
// import SearchBar from './Containers/SearchBar';
import Login from "./Containers/Login";
// import Register from "./Containers/Register";


export default class App extends Component {

  state = {
    emailLoggedIn: null,
    userObj: null,
    allUsers: null
  }

  loginHandler = (e) => {
    //if login is clicked, fetch for userdata matching email, true=>set email to state and redirect to dashboard, false=>null, stay onlogin page
    e.preventDefault() 
    e.persist()
    console.log("inside loginhandler ", e.target[0].value)
    let email = e.target[0].value
    this.setState({ emailLoggedIn: email })
    e.target.reset()        
  }
  
  componentDidMount(){
    let x = this.state.emailLoggedIn
    fetch("http://localhost:3000/users/")                
      .then(resp => resp.json())      

      .then(allUsers => {
        let user = allUsers.find(obj => obj.email === x)
          {user ? <Redirect to={{pathname: "/dashboard"}}/> : <Redirect to={{pathname: "/dashboard"}}/> }})

  }    

  render(){
    console.log("App.js state:", this.state)
    return (
      <Router>
        <div className="mainContainer">

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

              </Switch>
             
        </div>
      </Router>
    );
  }
  
}
