import React, { useState, useEffect} from 'react'
import '../CSS/ClientTable.css'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import ClientCards from '../Components/ClientCards'
import Pagination from '../Components/Pagination'
import NewClientForm from './NewClientForm'
 
const ClientsContainer = (props) => {
console.log("inside clientscontainer", props) 
      // Get current clients
      const [clients, setClients] = useState(props.userObj.clients)
      const [loading] = useState([true])
      const [currentPage, setCurrentPage] = useState([1])
      const[clientsPerPage] = useState(10)   //# of items per page
  
      //Change page (pageNumber is passed in from Pagination.js ln 21)
      const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
      const indexOfLastClient = currentPage * clientsPerPage      //1 X 10
      const indexOfFirstClient = indexOfLastClient - clientsPerPage  
      const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient)  //get state of current clients and pass in
      //   debugger

      useEffect( () => {
        async function fetchData() {
        const res1 = await fetch("http://localhost:3000/clients/")
        res1           
            .json()
            .then(clientObjs => setClients(clientObjs))


        }fetchData()
    })
//      const clientSubmitHandler = (newClient) => {
//         console.log("inside clientSubmitHandler", newClient, props.userObj)
//         const obj = { first_name: newClient.first_name, last_name: newClient.last_name, phone: newClient.phone, email: newClient.email}
//         const options = {
//             "method": "POST",
//             "headers": {
//             "Content-Type": "application/json",
//             "accept": "application/json"
//             },
//         body: JSON.stringify(obj)
//         }
    
//         fetch("http://localhost:3000/clients/", options)
//         .then(resp => resp.json())
//         .then(data => {
//             console.log("posted new client", data)
//         })
        
// }

        const clientSubmitHandler = (newClient) => {
            console.log("inside clientSubmitHandler", newClient, this.state.userObj)
            const obj = {first_name: newClient.first_name, last_name: newClient.last_name, phone: newClient.phone, email: newClient.email}
            const options = {
                "method": "POST",
                "headers": {
                "Content-Type": "application/json",
                "accept": "application/json"
                },
            body: JSON.stringify(obj)
            }
        
            fetch("http://localhost:3000/clients/", options)
            .then(resp => resp.json())
            .then(newClient => setClients([newClient,...clients]))
            
        }

      return (
          
          <>
          <Router>
              <div className="table-title">
                  <h3>My Clients</h3>
              </div>
              {/* <NewClientForm userObj={props.userObj} clientSubmitHandler={clientSubmitHandler}/> */}
              <Route path="/newclient" render={() => 
                    <NewClientForm
                    userObj={this.state.userObj} 
                    clientSubmitHandler={clientSubmitHandler}
                    />} />
              <ClientCards clients={currentClients} loading={loading} />
              <Pagination objectsPerPage={clientsPerPage} totalObjects={clients.length} objects={clients} paginate={paginate}/>

          </Router>
          </>
      )
        
}
export default ClientsContainer