import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../CSS/ClientTable.css'
import ClientCards from '../Components/ClientCards'
import Pagination from '../Components/Pagination'
import Button from '@material-ui/core/Button';

 
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
          
        <div className="projects-container"> 
              <div className="create-project-div">
                <NavLink style={{ textDecoration: 'none' }} to="/newclient" exact>
                    <Button className="new-project-modal" variant="contained" style={{backgroundColor: '#3BBA9C'}}>
                        New Client
                    </Button>
                </NavLink>
              </div>
                <br/>
              <div className="projects-list">
                <ClientCards clients={currentClients} loading={loading} />
                    <br/>
                <Pagination objectsPerPage={clientsPerPage} totalObjects={clients.length} objects={clients} paginate={paginate}/>
              </div>
        </div>

      )
        
}
export default ClientsContainer