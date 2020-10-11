import React, { useState, useEffect } from 'react'
import '../CSS/ClientTable.css'
import axios from 'axios'
import ClientCards from '../Components/ClientCards'
import Pagination from '../Components/Pagination'
 
const ClientsContainer = () => {
    const [clients, setClients] = useState([])
    const [loading, setLoading] = useState([false])
    const [currentPage, setCurrentPage] = useState([1])
    const[clientsPerPage, setClientsPerPage] = useState(100)   //# of items per page

    useEffect(() => {
        const fetchClients = async () => {
            setLoading(true)             //set to true (in the process of fetching)
            const res = await axios.get('http://localhost:3000/users/4')
            setClients(res.data.clients)
            setLoading(false)
        }
        fetchClients()
    },[]) //ADD EMPTY ARRAY TO AVOID INFINITE LOOP, MIMICS COMPONENTDIDMOUNT
    // debugger

    const indexOfLastClient = currentPage * clientsPerPage      //1 X 10
    const indexOfFirstClient = indexOfLastClient - clientsPerPage  
    const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient)  //get state of current clients and pass in

    return (
        <>
            <div className="table-title">
                <h3>My Clients</h3>
            </div>
            <Pagination clientssPerPage={clientsPerPage} totalClients={clients.length} clients={clients}/>
            <ClientCards clients={currentClients} loading={loading} />
        </>
    )
     

        
}
export default ClientsContainer