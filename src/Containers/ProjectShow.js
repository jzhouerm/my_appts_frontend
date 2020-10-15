import React, { Component } from 'react'
import moment from 'moment'

export default class ProjectShow extends Component {

    
    render() {
        const {userObj, deleteHandler, editHandler} = this.props
        const clicked_id = this.props.match.params.id
        const project = userObj.projects.find(project => project.id === parseInt(clicked_id))
        const client = userObj.clients.find(client => client.id === parseInt(project.client_id))
        const tasks = () => {return project.tasks.map(task => <li>{"Date: " + moment(task.start).format("MMMM Do YYYY") + " " + "Description/notes: " + task.note}</li>) }
        const total_balance = (isNaN(parseInt(project.amount)) ? 0 : parseInt(project.amount))
        const amount_paid = (isNaN(parseInt(project.paid)) ? 0 : parseInt(project.paid))
        const currencyFormat = (num) =>{
            return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
         }

// debugger
        console.log(project)
        // console.log(userObj, deleteHandler, editHandler)
        console.log("Found client", client )
        // debugger
        return (
            <div>
                <h3>Project Name: {project.name}</h3><span>{project.name}</span>
                <h3>Project Description:</h3><span>{project.description}</span>

                <h3>Client:</h3>
                <span>{"Name: " + client.last_name + ", " + client.first_name}</span>
                <br/>

                <span>Phone contact: {client.phone}</span>
                <br/>
                <span>Email: {client.email}</span>
                <br/>
                <h3>Start Date:</h3>
                <span>{moment(project.start).format("MMMM Do YYYY")}</span>
                <h3>End Date:</h3>
                <span>{moment(project.end).format("MMMM Do YYYY")}</span>

                <button>Update Project</button>
                <button onClick={()=>{deleteHandler(clicked_id)}}>Delete</button>

                <h3>Client balance:</h3>
                <span>{"Total Billed: " + currencyFormat(total_balance)}</span>
                <p>{"Remaining balance due from client:  " + currencyFormat(parseInt(total_balance - amount_paid))}</p>
                <p>{"Project status:  " + (project.status ? "Completed" : "In progress")}</p>

                <h2>Project Activity:</h2>
                <ul>
                    {tasks()}
                </ul>

            </div>
        )
    }
}
