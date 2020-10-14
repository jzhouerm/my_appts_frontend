// import React, { Component } from 'react'

// export default class NewServiceForm extends Component {

//     state = {
//         name: "",
//         description: "",
//         amount: ""
//     }

//     serviceChangeHandler = (e) => {
//         e.persist()
//         this.setState({ [e.target.name]: e.target.value})
//     }

//     serviceSubmitHandler = (e) => {
//         e.preventDefault()
//         this.props.serviceSubmitHandler(this.state)
//         this.setState({
//             name: "",
//             description: "",
//             amount: ""
//         })
//     }


//     render() {
//         return (
//                 <>
//                 <h1>Add a new project/service:</h1>
//                 <br />
//                 <form onSubmit={this.serviceSubmitHandler}>
//                     <h2>Project information:</h2>
//                     <p><input className="" name="name" placeholder="Project Name" onChange={this.serviceChangeHandler} type="text" value={this.state.name} /></p>
//                     <p><textarea rows="10" cols="100" className="" name="description" placeholder="Description" onChange={this.serviceChangeHandler} type="text" value={this.state.description}/></p>
//                     <p><input className="" name="amount" placeholder="Fee/Contract Amount" onChange={this.serviceChangeHandler} type="number" min="" step="1" max="50000"value={this.state.amount}/></p>
            
//                     <p>
//                         <input className="form-button" type="submit" />
//                     </p>

//                 </form>
//                 </>
//         )
//     }
// }
