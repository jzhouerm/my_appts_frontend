import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class NewProjectForm extends Component {
    state = {
        client_id: "", 
        name: "", 
        description: "",
        amount: "",
        start: "", 
        end: "",
        client_name: ""
    }

    projectChangeHandler = (e) => {
        e.persist()
        this.setState({ [e.target.name]: e.target.value})
    }

    projectSubmitHandler = (e) => {
        e.preventDefault()
        this.props.projectSubmitHandler(this.state)
        this.setState({
            user_id: "",
            client_id: "", 
            name: "", 
            description: "",
            amount: "",
            start: "", 
            end: "",
        })
    }

    dropdownHandler = (e) => {
        e.persist()
        // console.log(e.target)

        this.setState({
            [e.target.options[e.target.selectedIndex].id]: e.target.options[e.target.selectedIndex].dataset.id,     //client_id: "22"
            [e.target.options[e.target.selectedIndex].className]: e.target.value                                    //client_name: "John Smith"
        })
        // debugger
    }

    clientName = () => {
        // return this.props.userObj?.clients?.map(client => <option id="client_id" key={client.id} className="client_name" data-id={client.id} value={client.first_name + " " + client.last_name}> {client.first_name + " " + client.last_name}</option>)
        return this.props.clientObjs.map(client => <option id="client_id" key={client.id} className="client_name" data-id={client.id} value={client.first_name + " " + client.last_name}> {client.first_name + " " + client.last_name}</option>)
    }

    render() {
        // debugger
        // console.log(this.state)
        return (
                <>
                <h1>Add a new project for a client:</h1>
                <br />
                <form onSubmit={this.projectSubmitHandler}>
                    <h2>Project details:</h2>
                    <br />
                    <h3>Client Name:</h3>
                    <select className="" name="client_name" value={this.state.client_name} onChange={this.dropdownHandler}>
                        <option default>Select</option>
                        {this.clientName()}
                    </select>
                    <p><input className="" name="name" placeholder="Project Title" onChange={this.projectChangeHandler} type="text" value={this.state.name} /></p>

                    <h3>Start date and time:</h3>
                    <p><input className="" name="start" placeholder="Start Date" onChange={this.projectChangeHandler} type="datetime-local" value={this.state.start} /></p>
                    <h3>End date and time:</h3>
                    <p><input className="" name="end" placeholder="End Date" onChange={this.projectChangeHandler} type="datetime-local" value={this.state.end}/></p>
                    <h3>Fee/Contract Amount:</h3>
                    <p><input className="" name="amount" placeholder="Enter Amount" onChange={this.projectChangeHandler} type="number" min="" step="1" max="50000"value={this.state.amount}/></p>
                    <h3>Notes/description:</h3>
                    <p><textarea rows="5" cols="100" className="" name="description" placeholder="Note/description" onChange={this.projectChangeHandler} type="text" value={this.state.description}/></p>
                    

                    <p>
                    <Button variant="contained" color="primary"type="submit">Add Project</Button>
                    </p>

                </form>
                </>
        )
    }
}
