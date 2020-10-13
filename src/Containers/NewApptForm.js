import React, { Component } from 'react'

//NEW TASK FORM
export default class NewApptForm extends Component {
    state = {
        service_id: "",
        client_id: "",
        start: "",
        end: "",
        note: "",
        client_name: "",
        service_name: ""
    }

    apptChangeHandler = (e) => {
        e.persist()
        this.setState({ [e.target.name]: e.target.value})
    }

    apptSubmitHandler = (e) => {
        e.preventDefault()
        this.props.apptSubmitHandler(this.state)
        this.setState({
            service_id: "",
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

    serviceName = () => {
        return this.props.serviceObjs.map(service => <option id="service_id" key={service.id} className="service_name" data-id={service.id} value={service.id + " " + service.name}> {"ID: " + service.id + " Project: " + service.name}</option>)
    }

    render() {
        // debugger
        console.log(this.state)
        return (
                <>
                <h1>Add a new task for a project:</h1>
                <br />
                <form onSubmit={this.apptSubmitHandler}>
                    <h2>Task details</h2>
                    <br />

                    <h3>Start date and time:</h3>
                    <p><input className="" name="start" placeholder="Start Date" onChange={this.apptChangeHandler} type="datetime-local" value={this.state.start} /></p>
                    <h3>End date and time</h3>
                    <p><input className="" name="end" placeholder="End Date" onChange={this.apptChangeHandler} type="datetime-local" value={this.state.end}/></p>
                    <h3>Notes/description</h3>
                    <p><textarea rows="5" cols="100" className="" name="note" placeholder="Note/description" onChange={this.apptChangeHandler} type="text" value={this.state.note}/></p>
                    
                    <h3>Client Name:</h3>
                    <select className="" name="client_name" value={this.state.client_name} onChange={this.dropdownHandler}>
                        {this.clientName()}
                    </select>

                    <h3>Project:</h3>
                    <select className="" name="service_name" value={this.state.service_name} onChange={this.dropdownHandler}>
                        {this.serviceName()}
                    </select>              
                    <p>
                        <input className="form-button" type="submit" />
                    </p>

                </form>
                </>
        )
    }
}
