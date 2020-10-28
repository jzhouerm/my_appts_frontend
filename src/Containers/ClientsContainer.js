import React, { useState } from 'react'
import '../CSS/ClientTable.css'
import ClientCards from '../Components/ClientCards'
import Pagination from '../Components/Pagination'
 
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
      return (
          
          <>
              <div className="table-title">
              </div>
              <ClientCards clients={currentClients} loading={loading} />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
              <Pagination objectsPerPage={clientsPerPage} totalObjects={clients.length} objects={clients} paginate={paginate}/>
          </>
      )
        
}
export default ClientsContainer