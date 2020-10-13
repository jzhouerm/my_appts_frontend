import React, { useState } from 'react'
import '../CSS/ClientTable.css'
import ClientCards from '../Components/ClientCards'
import Pagination from '../Components/Pagination'
// import NewClientForm from './NewTaskForm'
 
const ClientsContainer = (props) => {
console.log("inside clientscontainer", props) 
      // Get current clients
      const [clients] = useState(props.userObj.clients)
      const [loading] = useState([true])
      const [currentPage, setCurrentPage] = useState([1])
      const[clientsPerPage] = useState(10)   //# of items per page
  
      //Change page (pageNumber is passed in from Pagination.js ln 21)
      const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
      const indexOfLastClient = currentPage * clientsPerPage      //1 X 10
      const indexOfFirstClient = indexOfLastClient - clientsPerPage  
      const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient)  //get state of current clients and pass in
      //   debugger

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



      return (
          
          <>
              <div className="table-title">
                  <h3>My Clients</h3>
              </div>
              {/* <NewClientForm userObj={props.userObj} clientSubmitHandler={clientSubmitHandler}/> */}
              <ClientCards clients={currentClients} loading={loading} />
              <Pagination objectsPerPage={clientsPerPage} totalObjects={clients.length} objects={clients} paginate={paginate}/>
          </>
      )
        
}
export default ClientsContainer