import React, { useState, useEffect } from 'react'
import '../CSS/ClientTable.css'
import ClientCards from '../Components/ClientCards'
import Pagination from '../Components/Pagination'
 
const ClientsContainer = (props) => {
      // Get current clients
      const [clients, setClients] = useState(props.userObj.clients)
      const [loading, setLoading] = useState([true])
      const [currentPage, setCurrentPage] = useState([1])
      const[clientsPerPage] = useState(10)   //# of items per page
  
      //Change page (pageNumber is passed in from Pagination.js ln 21)
      const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
      const indexOfLastClient = currentPage * clientsPerPage      //1 X 10
      const indexOfFirstClient = indexOfLastClient - clientsPerPage  
      const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient)  //get state of current clients and pass in
  // debugger
      return (
          
          <>
              <div className="table-title">
                  <h3>My Clients</h3>
              </div>
              <ClientCards clients={currentClients} loading={loading} />
              <Pagination clientsPerPage={clientsPerPage} totalClients={clients.length} clients={clients} paginate={paginate}/>
          </>
      )
        
}
export default ClientsContainer