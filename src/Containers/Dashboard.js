import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from "react-router-dom";
import SideNavBar from './SideNavBar';
import ClientsContainer from './ClientsContainer'
import TasksContainer from './ProjectsContainer'
import NewClientForm from './NewClientForm'
import ProjectsContainer from './ProjectsContainer';
import ProjectShow from './ProjectShow'
import MyDash from './MyDash';


export default class Dashboard extends Component {

    state = {
        emailLoggedin: null,    //❌ Email typed by user
        userObj: [],           //❌ HARD-CODED...fix lines 14-20
        tasks: [],
        projects: []
      }

    // async componentDidMount(){
    //     const response = await fetch("http://localhost:3000/users/")
    //     const json = await response.json()
    //     const currentUser = await json.find(obj => obj.email === this.props.emailLoggedIn)
    
    //     this.setState({userObj: currentUser}) //this is not running
    //     // debugger
    // }

    componentDidMount(){
        fetch("http://localhost:3000/users/3/")                
          .then(resp => resp.json())      
          .then(userObj => 
            // console.log(userObj))
            this.setState({
              userObj: userObj
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
            const newUserObj = this.state.userObj
            newUserObj.clients.push(data)
            // debugger
            this.setState({userObj: newUserObj})
            // console.log("posted new client", data)
          })
    }

    deleteHandler =(id, history)=>{
      console.log("deletehandler", id)
// debugger
      fetch(`http://localhost:3000/projects/${id}`, {
      method: "DELETE"
    })
      return(
      history.push("/projects")
      )
    }

    updateTaskHandler = (updatedTask) => {
      console.log("inside updateTaskHandler", updatedTask)
      // debugger
      const obj = {
        project_id: updatedTask.project_id,
        start: updatedTask.start,
        end: updatedTask.end,
        note: updatedTask.note,
      }
      const options = {
          "method": "PATCH",
          "headers": {
            "Content-Type": "application/json",
            "accept": "application/json"
          },
        body: JSON.stringify(obj)
      }
    
        fetch(`http://localhost:3000/tasks/${updatedTask.id}`, options)
        .then(resp => resp.json())
        .then(data => 
          this.setState({ userObj: data })
        )
    }

    submitTaskHandler = (newData) => {
      console.log("inside updateTaskHandler")
      const obj = {
        project_id: newData.project_id,
        start: newData.start,
        end: newData.end,
        note: newData.note,
      }
      const options = {
          "method": "POST",
          "headers": {
            "Content-Type": "application/json",
            "accept": "application/json"
          },
        body: JSON.stringify(obj)
      }
    
        fetch(`http://localhost:3000/tasks/`, options)
        .then(resp => resp.json())
        .then(data => {
          // console.log("Data returned from submitTaskHandler:", data)
          this.setState({userObj: data})
        })
    }

    deleteTaskHandler = (rowData) => {
      fetch(`http://localhost:3000/tasks/${rowData.id}`, {method: "DELETE"})
      .then(res => res.json())
      .then(data => 
      this.setState({userObj: data})
      )
      

      }
      
    // passProject = (newProject) => {
    //   const newUserObj = this.state.userObj
    //   newUserObj.projects.push(newProject)
    //   // debugger
    //   this.setState({userObj: newUserObj})
    // }

    // passProject = (newProject) => {
    //   const newUserObj = this.state.userObj
    //   const findObj = newUserObj.projects.find(proj => proj.id === newProject.id)
    //   if (findObj){
    //     //patch optimistically
    //     const index = newUserObj.projects.indexOf(findObj)
    //     newUserObj.projects[index] = newProject
    //     this.setState({userObj: newUserObj})
    //   }else {
    //     //post optimistically
    //     newUserObj.projects.push(newProject)
    //     this.setState({userObj: newUserObj})
    // }
      // debugger
    // }

    submitProjectHandler = (newProject) =>{
      console.log("we're in the submitprojecthandler :", newProject)
      const obj = {
        user_id: this.state.userObj.id,
        client_id: newProject.client_id, 
        name: newProject.name, 
        description: newProject.description,
        amount: newProject.amount,
        start: newProject.start, 
        end: newProject.end}

        console.log(obj)
        const options = {
            "method": "POST",
            "headers": {
              "Content-Type": "application/json",
              "accept": "application/json"
            },
          body: JSON.stringify(obj)
        }
        
        fetch("http://localhost:3000/projects/", options)
        .then(res => res.json())
        .then(data => 
          this.setState({userObj: data})
        )
    }


  render(){
    //   console.log("dashboard props", this.props) //✅"email@email.com"
    //   console.log("dashboard state", this.state) //❌
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

                    <Route exact path="/dashboard" render={() => 
                    <MyDash
                    userObj={this.state.userObj} 
                    />} />

                    <Route path="/newclient" render={() => 
                    // <Redirect to="/projects"/>
                    <NewClientForm
                    
                    userObj={this.state.userObj} 
                    clientSubmitHandler={this.clientSubmitHandler}
                    />} />

                    {/* can't route to projectShow after creating a new project because userObj doesn't include new project */}
                    <Route exact path="/projects/:id" render={(renderProps) =>
                    <ProjectShow 
                    updateTaskinDataArr = {this.updateTaskinDataArr}
                    userObj={this.state.userObj}
                    passProject={this.passProject}
                    // passTasks={this.state.tasks}
                    deleteHandler={this.deleteHandler}
                    updateTaskHandler={this.updateTaskHandler}
                    deleteTaskHandler={this.deleteTaskHandler}
                    submitTaskHandler={this.submitTaskHandler}
                    {...renderProps}/>
                    }/> */
                    
                    <Route path="/projects" render={() => 
                    <ProjectsContainer
                    passProject={this.passProject}
                    userObj={this.state.userObj} 
                    submitProjectHandler={this.submitProjectHandler}
                    />} />


                </Switch>

                
            </Router>
            : <Redirect to={{pathname: "/login"}}/>
            }
            </>
    )
  }
  
}
