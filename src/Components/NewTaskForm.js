import React, { Component } from 'react'

export default class NewTaskForm extends Component {
    state = {
        project_id: "",
        client_id: "",
        start: "",
        end: "",
        note: "",
        client_name: "",
        project_name: ""
    }

    taskChangeHandler = (e) => {
        e.persist()
        this.setState({ [e.target.name]: e.target.value})
    }

    taskSubmitHandler = (e) => {
        e.preventDefault()
        this.props.taskSubmitHandler(this.state)
        this.setState({
            project_id: "",
            client_id: "",
            start: "",
            end: "",
            note: ""
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
        return this.props.clientObjs.map(client => <option id="client_id" key={client.id} className="client_name" data-id={client.id} value={client.first_name + " " + client.last_name}> {client.first_name + " " + client.last_name}</option>)
    }

    projectName = () => {
        return this.props.projectObjs.map(project => <option id="project_id" key={project.id} className="project_name" data-id={project.id} value={project.id + " " + project.name}> {"ID: " + project.id + " Project: " + project.name}</option>)
    }

    render() {
        // debugger
        console.log(this.state)
        return (
                <>
                <h1>Add a new task for a project:</h1>
                <br />
                <form onSubmit={this.taskSubmitHandler}>
                    <h2>Task details</h2>
                    <br />

                    <h3>Start date and time:</h3>
                    <p><input className="" name="start" placeholder="Start Date" onChange={this.taskChangeHandler} type="datetime-local" value={this.state.start} /></p>
                    <h3>End date and time</h3>
                    <p><input className="" name="end" placeholder="End Date" onChange={this.taskChangeHandler} type="datetime-local" value={this.state.end}/></p>
                    <h3>Notes/description</h3>
                    <p><textarea rows="5" cols="100" className="" name="note" placeholder="Note/description" onChange={this.taskChangeHandler} type="text" value={this.state.note}/></p>
                    
                    <h3>Client Name:</h3>
                    <select className="" name="client_name" value={this.state.client_name} onChange={this.dropdownHandler}>
                        {this.clientName()}
                    </select>

                    <h3>Project:</h3>
                    <select className="" name="project_name" value={this.state.project_name} onChange={this.dropdownHandler}>
                        {this.projectName()}
                    </select>              
                    <p>
                        <input className="form-button" type="submit" />
                    </p>

                </form>
                </>
        )
    }
}
