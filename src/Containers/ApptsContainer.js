import React, { useState, useEffect} from 'react'
import '../CSS/ClientTable.css'
import ApptCards from '../Components/ApptCards'
import Pagination from '../Components/Pagination'
import NewApptForm from './NewApptForm'
 
const ApptsContainer = (props) => {
    // Get ALL services and clients from DB to create task/appt
    const [serviceObjs, setServiceObjs] = useState([])
    const [clientObjs, setClientObjs] = useState([])

    // Get current appts
    const [appts] = useState(props.userObj.appointments)
    const [userObj] = useState(props.userObj)
    const [loading, setLoading] = useState([true])
    const [currentPage, setCurrentPage] = useState([1])
    const[apptsPerPage] = useState(10)   //# of items per page

    //Change page (pageNumber is passed in from Pagination.js ln 21)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const indexOfLastAppt = currentPage * apptsPerPage      //1 X 10
    const indexOfFirstAppt = indexOfLastAppt - apptsPerPage  
    const currentAppts = appts.slice(indexOfFirstAppt, indexOfLastAppt)  //get state of current appts and pass in


    useEffect( () => {
        async function fetchData() {
        const res1 = await fetch("http://localhost:3000/clients/")
        res1           
            .json()
            .then(clientObjs => setClientObjs(clientObjs))

        const res2 = await fetch("http://localhost:3000/services/")
        res2            
            .json()
            .then(serviceObjs => setServiceObjs(serviceObjs))
        }fetchData()
    },[])

    const apptSubmitHandler = (newAppt) => {
        console.log("inside apptSubmitHandler", newAppt, props.userObj.id)
        const obj = {user_id: props.userObj.id, service_id: newAppt.service_id, client_id: newAppt.client_id, start: newAppt.start, end: newAppt.end, note: newAppt.note}
        const options = {
            "method": "POST",
            "headers": {
              "Content-Type": "application/json",
              "accept": "application/json"
            },
          body: JSON.stringify(obj)
        }
      
        fetch("http://localhost:3000/appointments/", options)
        .then(resp => resp.json())
        .then(data => {
        console.log("posted new appt/task", data)
        })
        
    }

// debugger
    return (
        
        <>
            <div className="table-title">
                <h3>My Tasks</h3>
            </div>
            {/* <NewApptForm userObj={props.userObj} apptSubmitHandler={apptSubmitHandler}/> */}
            <NewApptForm serviceObjs={serviceObjs} clientObjs={clientObjs} apptSubmitHandler={apptSubmitHandler}/>
            <ApptCards userObj={userObj} appts={currentAppts} loading={loading} />
            <Pagination objectsPerPage={apptsPerPage} totalObjects={appts.length} objects={appts} paginate={paginate}/>

            
        </>
    )
     

        
}
export default ApptsContainer