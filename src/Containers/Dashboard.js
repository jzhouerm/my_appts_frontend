import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import SideNavBar from './SideNavBar';
import ClientsContainer from './ClientsContainer'


export default class Dashboard extends Component {

    state = {
        emailLoggedin: null,    //❌ Email typed by user
        userObj: []           //❌ HARD-CODED...fix lines 14-20
      }

    // async componentDidMount(){
    //     const response = await fetch("http://localhost:3000/users/")
    //     const json = await response.json()
    //     const currentUser = await json.find(obj => obj.email === this.props.emailLoggedIn)
    //     this.setState({userObj: currentUser}) //this is not running
    //     // debugger
    // }

    componentDidMount(){
        fetch("http://localhost:3000/users/4/")                
          .then(resp => resp.json())      
          .then(userObj => 
            // console.log(userObj))
            this.setState({userObj: userObj
            }))
      }

  render(){
      console.log("dashboard props", this.props) //✅"email@email.com"
      console.log("dashboard state", this.state) //❌
    // debugger
    return (
        <>
        {this.state.userObj ?
            <Router>
            
                <h1>{this.state.userObj.first_name}'s Dashboard</h1>
                <SideNavBar />
                        
                <Switch>

                    <Route path="/clients" render={() => 
                    <ClientsContainer
                    userObj={this.state.userObj} 
                    />} />

                </Switch>

                
            </Router>
            : <Redirect to={{pathname: "/login"}}/>
            }
            </>
    )
  }
  
}
