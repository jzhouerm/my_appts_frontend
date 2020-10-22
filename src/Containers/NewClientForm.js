import React, { Component } from 'react'
import '../CSS/NewClientForm.css'
import Button from '@material-ui/core/Button';

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
                // <div className="new-client-form">

                    <form  className="new-client-form"onSubmit={this.clientSubmitHandler}>
                        <h1>Add a new client:</h1>
                        <h2>Client information:</h2>
                            <br/>
                        <p>First Name: </p>
                        <input className="" name="first_name" placeholder="First Name" onChange={this.clientChangeHandler} type="text" value={this.state.first_name} />
                        <p>Last Name:</p>
                        <input className="" name="last_name" placeholder="Last Name" onChange={this.clientChangeHandler} type="text" value={this.state.last_name}/>
                        <p>Phone Contact:</p>
                        <input className="" name="phone" placeholder="Phone number" onChange={this.clientChangeHandler} type="text" value={this.state.phone}/>
                        <p>Email:</p>
                        <input className="" name="email" placeholder="Email" onChange={this.clientChangeHandler} type="text" value={this.state.email}/>
                
                            <br/>
                            <br/>

                        <p>
                            {/* <input className="form-button" type="submit" /> */}
                            <Button style={{backgroundColor: '#3BBA9C'}} variant="contained" color="primary" type="submit">Add new Client</Button>
                        </p>

                    </form>

                // </div>
        )
    }
}
