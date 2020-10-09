import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

export default class Dashboard extends Component {

  render(){
    return (
      <Router>

          <div>
              <h1>Main Page</h1>
              <p>Side-nav #1</p>
              <p>Side-nav #2</p>
              <p>{this.props}</p>

              <Switch>

                {/* <Route exact path='/dashboard' render={()=> <Clients/>}></Route> */}

              </Switch>
             





        </div>
      </Router>
    );
  }
  
}
