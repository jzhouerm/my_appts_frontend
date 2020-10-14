import React, { Component } from 'react'

export default class ProjectShow extends Component {

    tasks

    render() {
        console.log(this.props)
        const {userObj, deleteHandler, editHandler} = this.props
        console.log(userObj, deleteHandler, editHandler)
        console.log(this.props.match.params.id )
        const id = this.props.match.params.id 
        return (
            <div>
                <h1>Project Show Page</h1>
                <button>Edit</button>
                <button onClick={()=>{deleteHandler(id)}}>Delete</button>

            </div>
        )
    }
}
