import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css'
import Dashboard from './Containers/Dashboard'
import TopNavBar from './Containers/TopNavBar'

// import SideNavBar from './Containers/SearchBar';
// import SearchBar from './Containers/SearchBar';
// import Login from "./Containers/Login";
// import Register from "./Containers/Register";


export default class App extends Component {

  state = {
    userObj: [],
    user_id: 4
    
  }

  componentDidMount(){                                     
    // fetch("http://localhost:3000/users/{this.state.user_id}/")   
    fetch("http://localhost:3000/users/4/")                
    .then(resp => resp.json())      
    .then(userObjArr =>

      this.setState(() => ({
        userObj: userObjArr
      }))
    )
  }

  render(){
    console.log(this.props)
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

              </Switch>
             
        </div>
      </Router>
    );
  }
  
}
