import React, { Component } from 'react'

class MyDashCopy extends Component {

  
  render() {

    const loading =() => {
      return (
        this.props.userObj.projects ? successScreen() : failScreen()
      )
    }

    const failScreen =()=>{
      return (<h1>User does not exist</h1>)
    }

    const successScreen =()=>{
      return (
        <>
          <h1>My dashboard</h1>
          <h1>Last project created:</h1>
          <p>{this.props.userObj.projects.slice(-1)[0].name}</p>
          <h1>All projects:</h1>
          <p>{this.props.userObj.projects.map(project=> project.name)}</p>

       </>
      )
    }
    // debugger


    console.log(this.props.userObj)
    return (
      <>
        <div>
          {loading()}
          {/* <h1>Last project created:</h1>
          {this.props.userObj.projects[0].name} */}
        </div>

      </>
    )
  }
}

export default MyDashCopy
// this.props.userObj.projects[0].name