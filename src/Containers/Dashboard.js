import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import SideNavBar from './SideNavBar';

export default class Dashboard extends Component {

    state = {
        
      }

  render(){
    return (
        <>
            {this.props?.userObj ?
            <>
            <h1>{this.props.userObj.first_name}'s Dashboard</h1>
                    
                <Switch>
                    <SideNavBar />
                </Switch>
            </>
                : <Redirect to={{pathname: "/login"}}/>
            }
        </>
    )
  }
  
}
