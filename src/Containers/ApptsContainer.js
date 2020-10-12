import React, { useState} from 'react'
import '../CSS/ClientTable.css'
import ApptCards from '../Components/ApptCards'
import Pagination from '../Components/Pagination'
 
const ApptsContainer = (props) => {
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
// debugger
    return (
        
        <>
            <div className="table-title">
                <h3>My Appointments</h3>
            </div>
            <ApptCards userObj={userObj} appts={currentAppts} loading={loading} />
            <Pagination objectsPerPage={apptsPerPage} totalObjects={appts.length} objects={appts} paginate={paginate}/>
        </>
    )
     

        
}
export default ApptsContainer