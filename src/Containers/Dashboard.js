import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import SideNavBar from './SideNavBar';
import ClientsContainer from './ClientsContainer'
import ApptsContainer from './ApptsContainer'
import NewClientForm from './NewClientForm'
import NewServiceForm from './NewServiceForm'


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
    
    clientSubmitHandler = (newClient) => {
        console.log("inside clientSubmitHandler", newClient, this.state.userObj)
        const obj = {first_name: newClient.first_name, last_name: newClient.last_name, phone: newClient.phone, email: newClient.email}
        const options = {
            "method": "POST",
            "headers": {
              "Content-Type": "application/json",
              "accept": "application/json"
            },
          body: JSON.stringify(obj)
        }
      
          fetch("http://localhost:3000/clients/", options)
          .then(resp => resp.json())
          .then(data => {
            console.log("posted new client", data)
          })
        
    }

    serviceSubmitHandler = (newService) => {
        console.log("inside serviceSubmitHandler", newService)
        const obj = {name: newService.name, description: newService.description, amount: newService.amount}
        const options = {
            "method": "POST",
            "headers": {
              "Content-Type": "application/json",
              "accept": "application/json"
            },
          body: JSON.stringify(obj)
        }
      
          fetch("http://localhost:3000/services/", options)
          .then(resp => resp.json())
          .then(data => {
            console.log("posted new client", data)
          })
        
    }

  render(){
    //   console.log("dashboard props", this.props) //✅"email@email.com"
    //   console.log("dashboard state", this.state) //❌
    // debugger
    return (
        <>
        {this.state.userObj ?
            <Router>
            
                <h1>{this.state.userObj.first_name}'s Dashboard</h1>
                <SideNavBar userObj={this.state.userObj}/>
                        
                <Switch>

                    <Route path="/clients" render={(renderProps) => 
                    <ClientsContainer
                    userObj={this.state.userObj}
                    {...renderProps}
                    />} />

                    <Route path="/appointments" render={() => 
                    <ApptsContainer
                    userObj={this.state.userObj} 
                    />} />

                    <Route path="/newclient" render={() => 
                    <NewClientForm
                    userObj={this.state.userObj} 
                    clientSubmitHandler={this.clientSubmitHandler}
                    />} />

                    <Route path="/newservice" render={() => 
                    <NewServiceForm
                    userObj={this.state.userObj} 
                    serviceSubmitHandler={this.serviceSubmitHandler}
                    />} />

                </Switch>

                
            </Router>
            : <Redirect to={{pathname: "/login"}}/>
            }
            </>
    )
  }
  
}
