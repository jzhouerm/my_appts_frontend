import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';

export default class Login extends Component {
    
    state ={
        email: null
    }

    // loginHandler =(e) =>{
    //     e.preventDefault()
    //     e.persist()
    //     // console.log("inside login ", e.target[0].value)
    //     this.props.loginHandler(e.target[0].value)
    //     e.target.reset()        

    // }

    changeHandler =(e) =>{
        e.persist()
        // console.log("inside login ", e.target[0].value)
        this.props.loginHandler(e.target.value)

    }


    render() {
    // console.log("login props", this.props)
        return (
            <>
            <div className="login-wrapper">
                <div className="login-container">
                        <h1>Sign in</h1>
                        <form id="login-form" onSubmit = {this.loginHandler}>
                        <input type="text" placeholder="✉️ Email" onChange = {this.changeHandler}></input>
                        <input type="password" placeholder="🔒Password" onChange = {this.changeHandler}></input>
                        <br/>
                        <br/>
                        <NavLink to="/dashboard">
                            <Button variant="contained" color="primary" type="submit" id="login-button">Log in</Button>
                        </NavLink>
                        </form>
                </div>
            </div>
            
            </>
        )
    }
}
//add success message from Material-ui 
// https://material-ui.com/components/snackbars/

