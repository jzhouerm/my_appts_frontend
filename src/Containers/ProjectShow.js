import React, { Component } from 'react'
import moment from 'moment'
import UpdateProjectModal from '../Components/UpdateProjectModal'

import TaskTable from '../Components/TaskTable'
// import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
// import { green, purple } from '@material-ui/core/colors';
import '../CSS/ProjectShow.css'

class ProjectShow extends Component {


    state= {
        userObj: this.props.userObj,
        project: this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)),
        client: this.props.userObj.clients.find(client => client.id === parseInt(this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)).client_id)),
        //passed in from updateForm
        user_id: this.props.userObj.id,
        name: this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)).name, 
        description: this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)).description,
        amount: this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)).amount,
        paid: this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)).paid,
        start: this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)).start, 
        end: this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)).end,
        status: this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)).status,
        //tasks
        tasks: this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)).tasks,
        btnDisable: false

    }
    projectPatchHandler =(formState) => {
        console.log("PROJECT UPDATING", formState)
        const obj = {
        user_id: this.state.userObj.id,
        client_id: this.state.client.id, 
        name: formState.name, 
        description: formState.description,
        amount: formState.amount,
        paid: formState.paid,
        start: formState.start, 
        end: formState.end
        }
        const options = {
            "method": "PATCH",
            "headers": { 
              "Content-Type": "application/json",
              "accept": "application/json"
            },
          body: JSON.stringify(obj)
        }
        
        fetch(`http://localhost:3000/projects/${formState.id}`, options)
        .then(res => res.json())
        .then(userObj => {
            console.log("projectPatchHandler", userObj)
            this.props.passProject(userObj)
        })
    }

    statusHandler =(status, id) => {
        // console.log("STATUS UPDATING", status)
        const obj = {status: status}
        const options = {
            "method": "PATCH",
            "headers": { 
              "Content-Type": "application/json",
              "accept": "application/json"
            },
          body: JSON.stringify(obj)
        }
        
        fetch(`http://localhost:3000/projects/${id}`, options)
        .then(res => res.json())
        .then(userObj => {
            console.log("projectPatchHandler", userObj)
            this.props.passProject(userObj)
            // this.setState({ project: patchedProj})
            console.log("STATUS PATCHED",this.state.status)
            const btn = this.state.btnDisable
            const status = this.state.status
            this.setState({status: !status})
            this.setState({btnDisable: !btn})
        })
    }

    render() {

        const { classes } = this.props;
        const {userObj, deleteHandler, editHandler} = this.props
        const clicked_id = this.props.match.params.id
        const project = this.props.userObj?.projects.find(project => project.id === parseInt(clicked_id))

        const changeStatus =()=>{
            const status = this.state.status
            this.statusHandler(!status, project.id)
        }

        const loading = ()=> {
            return "Loading"
        }

        const success = () => {
            // debugger
            const client = this.state.userObj.clients.find(client => client.id === parseInt(project.client_id))
            const tasks = () => {return this.state.tasks.map(task => <li>{"Date: " + moment(task.start).format("MMMM Do YYYY") + " " + "Description/notes: " + task.note}</li>) }
            const total_balance = (isNaN(parseInt(project.amount)) ? 0 : parseInt(project.amount))
            const amount_paid = (isNaN(parseInt(project.paid)) ? 0 : parseInt(project.paid))
            const currencyFormat = (num) =>{
            return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
         }

         return (
            <div className="pshow-container">

                <div className="project-info-box">
                    <h3>Project Name:</h3><span>{project.name}</span>
                    <h3>Project Description:</h3><span>{project.description}</span>
                </div>

                <div className="client-info-box">
                    <h3>Client:</h3>
                    <p>{"Name: " + client.last_name + ", " + client.first_name}</p>
                    <p>Phone contact: {this.state.client.phone}</p>
                    <p>Email: {this.state.client.email}</p>
                </div>

                <div className="client-info-box">
                <h3>Start Date:</h3>
                <span>{moment(project.start).format("MMMM Do YYYY")}</span>
                <h3>End Date:</h3>
                <span>{moment(project.end).format("MMMM Do YYYY")}</span>
                </div>

                <div className="project-info-box">
                <h3>Client balance:</h3>
                <span>{"Total Billed: " + currencyFormat(total_balance)}</span>
                <p>{"Remaining balance due from client:  " + currencyFormat(parseInt(total_balance - amount_paid))}</p>
                <span>{"Project status: "}</span>
                <span className={project.status ? 'green' : 'red'}><b>{project.status ? "Completed" : "In progress"}</b></span>
                </div>


                <div className="pbuttons-container">
                    <UpdateProjectModal projectPatchHandler={this.projectPatchHandler} project={project} client={this.state.client}/>
                    <br/>
                    <Button variant="contained" color="primary" onClick={()=>{deleteHandler(project.id, this.props.history)}}>Delete Project</Button>
                    <br/>
                    {/* <Chip theme={makeStyles} label="Completed" color="primary" deleteIcon={<DoneIcon />}/> */}

                    <ThemeProvider >
                        <Button variant="contained" color="primary" onClick={()=>changeStatus()}>
                            {(this.state.status === false) ? "Complete" : "In progress"}
                        </Button>
                    </ThemeProvider>
                </div>

                    <TaskTable updateTaskinDataArr={this.props.updateTaskinDataArr} userObj={this.props.userObj} submitTaskHandler={this.props.submitTaskHandler} updateTaskHandler={this.props.updateTaskHandler} deleteTaskHandler={this.props.deleteTaskHandler} tasks={this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)).tasks}/>

            </div>
        )

        }
// debugger
        return (
            project ? success() : loading()
        )
        
    }
}
        // ProjectShow.propTypes = {
        //     classes: PropTypes.object.isRequired,
        //   };
export default ProjectShow;
// https://stackoverflow.com/questions/56432167/how-to-style-components-using-makestyles-and-still-have-lifecycle-methods-in-mat