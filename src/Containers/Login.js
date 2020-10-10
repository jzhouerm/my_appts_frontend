import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Login extends Component {
    
    render() {

        return (
            <>
            <div className="login-wrapper">
                <div className="login-container">
                        <h1>Log in</h1>
                        <form id="login-form" onSubmit = {this.props.loginHandler}>
                        <input type="text" placeholder="Email" onChange = {this.props.changeHandler}></input>
                        <input type="password" placeholder="Password" onChange = {this.props.changeHandler}></input>
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

