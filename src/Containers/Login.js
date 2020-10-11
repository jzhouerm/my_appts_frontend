import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

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
                        <NavLink to="/dashboard">
                            <button type="submit" id="login-button">Log in</button>
                        </NavLink>
                        </form>
                </div>
            </div>
            
            </>
        )
    }
}

