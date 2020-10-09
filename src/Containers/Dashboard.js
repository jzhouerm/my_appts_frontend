import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

export default class Dashboard extends Component {

    state = {
        
      }

  render(){
    return (
    //   <Router>

        this.props?.userObj ?
          <div>
              <h1>User's Dashboard</h1>
              <p>Side-nav #1</p>
              <p>Side-nav #2</p>
              {this.state.test}

              <Switch>

                {/* <Route exact path='/dashboard' render={()=> <Clients/>}></Route> */}

              </Switch>
             

        </div>
        : <Redirect to={{
            pathname: "/login"
          }}/>
    //   </Router>
    )
  }
  
}
