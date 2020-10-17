import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class NewClientForm extends Component {
    state = {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
    }

    clientChangeHandler = (e) => {
        e.persist()
        this.setState({ [e.target.name]: e.target.value})
    }

    clientSubmitHandler = (e) => {
        e.preventDefault()
        this.props.clientSubmitHandler(this.state)
        this.setState({
            first_name: "",
            last_name: "",
            phone: "",
            email: ""
        })
    }


    render() {
        return (
                <>
                <h1>Add a new client:</h1>
                <br />
                <form onSubmit={this.clientSubmitHandler}>
                    <h2>Client information:</h2>
                    <p><input className="" name="first_name" placeholder="First Name" onChange={this.clientChangeHandler} type="text" value={this.state.first_name} /></p>
                    <p><input className="" name="last_name" placeholder="Last Name" onChange={this.clientChangeHandler} type="text" value={this.state.last_name}/></p>
                    <p><input className="" name="phone" placeholder="Phone number" onChange={this.clientChangeHandler} type="text" value={this.state.phone}/></p>
                    <p><input className="" name="email" placeholder="Email" onChange={this.clientChangeHandler} type="text" value={this.state.email}/></p>
            
                    <p>
                        <input className="form-button" type="submit" />
                    </p>

                </form>
                </>
        )
    }
}
