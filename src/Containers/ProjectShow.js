import React, { Component } from 'react'
import {withRouter} from "react-router-dom";
import moment from 'moment'
import UpdateProjectModal from '../Components/UpdateProjectModal'
import Button from '@material-ui/core/Button';
import AddTaskForm from '../Components/AddTaskForm'
import TaskTable from '../Components/TaskTable'

export default class ProjectShow extends Component {

    state= {
        userObj: this.props.userObj,
        project: this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)),
        client: this.props.userObj.clients.find(client => client.id === parseInt(this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)).client_id)),
        //passed in from updateForm
        // id: this.props.match.params.id,
        user_id: this.props.userObj.id,
        // client_id: this.props.userObj.clients.find(client => client.id === parseInt(this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)).client_id)).id, 
        name: this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)).name, 
        description: this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)).description,
        amount: this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)).amount,
        paid: this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)).paid,
        start: this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)).start, 
        end: this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)).end,
        //tasks
        tasks: this.props.userObj.projects.find(project => project.id === parseInt(this.props.match.params.id)).tasks

    }
    // projectUpdateSubmitHandler
    projectPatchHandler =(formState) => {
        console.log("PROJECT UPDATING", formState)
        const obj = {
        // id: formState.id,
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
        .then(patchedProj => {
            this.setState({ project: patchedProj})
        })
    }

    taskSubmitHandler = (taskFormState) => {
        console.log("projectShow")
        const obj = {
            project_id: taskFormState.project_id,
            note: taskFormState.note,
            amount: taskFormState.amount,
            paid: taskFormState.paid,
            start: taskFormState.start, 
            end: taskFormState.end
            }
            const options = {
                "method": "POST",
                "headers": {
                  "Content-Type": "application/json",
                  "accept": "application/json"
                },
              body: JSON.stringify(obj)
            }
            
            fetch(`http://localhost:3000/tasks`, options)
            .then(res => res.json())
            .then(newTask => { 
                console.log("newwArr", this.state.tasks)
                let newArr = [...this.state.tasks, newTask]
                this.setState({tasks: newArr})
                // console.log(newArr)
                // this.setState((previousState) => ({ tasks: [...previousState, newTask]}))
            })
    }

    render() {

        // debugger
        const {userObj, deleteHandler, editHandler} = this.props
        const clicked_id = this.props.match.params.id
        const project = this.props.userObj.projects.find(project => project.id === parseInt(clicked_id))

        const loading = ()=> {
            return "Loading"
        }

        const success = () => {
            // debugger
            const client = this.state.userObj.clients.find(client => client.id === parseInt(project.client_id))
            const tasks = () => {return this.state.tasks.map(task => <li>{"Date: " + moment(task.start).format("MMMM Do YYYY") + " " + "Description/notes: " + task.note}</li>) }
            const total_balance = (isNaN(parseInt(this.state.project.amount)) ? 0 : parseInt(this.state.project.amount))
            const amount_paid = (isNaN(parseInt(this.state.project.paid)) ? 0 : parseInt(this.state.project.paid))
            const currencyFormat = (num) =>{
            return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
         }

         return (
            <div>
                <h3>Project Name: {this.state.project.name}</h3><span>{this.state.project.name}</span>
                <h3>Project Description:</h3><span>{project.description}</span>

                <h3>Client:</h3>
                <span>{"Name: " + client.last_name + ", " + client.first_name}</span>
                <br/>

                <span>Phone contact: {this.state.client.phone}</span>
                <br/>
                <span>Email: {this.state.client.email}</span>
                <br/>
                <h3>Start Date:</h3>
                <span>{moment(this.state.project.start).format("MMMM Do YYYY")}</span>
                <h3>End Date:</h3>
                <span>{moment(this.state.project.end).format("MMMM Do YYYY")}</span>


                <h3>Client balance:</h3>
                <span>{"Total Billed: " + currencyFormat(total_balance)}</span>
                <p>{"Remaining balance due from client:  " + currencyFormat(parseInt(total_balance - amount_paid))}</p>
                <p>{"Project status:  " + (this.state.project.status ? "Completed" : "In progress")}</p>

                <UpdateProjectModal projectPatchHandler={this.projectPatchHandler} project={this.state.project} client={this.state.client}/>
                <br/>
                <Button variant="contained" color="primary" onClick={()=>{deleteHandler(this.state.project.id, this.props.history)}}>Delete</Button>
                <br/>
                {/* <h2>Project Activity:</h2> */}
                {/* <ul>
                    {tasks()}
                </ul> */}
                <AddTaskForm project={this.state.project} taskSubmitHandler={this.taskSubmitHandler}/>
                <TaskTable tasks={this.state.tasks}/>
            </div>
        )

        }
// debugger
        return (
            project ? success() : loading()
        )
        
    }
}
