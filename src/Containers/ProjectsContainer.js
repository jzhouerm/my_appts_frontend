import React, { useState, useEffect} from 'react'
import '../CSS/ClientTable.css'
import ProjectCards from '../Components/ProjectCards'
import Pagination from '../Components/Pagination'
import NewProjectModal from '../Components/NewProjectModal'

const ProjectsContainer = (props) => {
    // Get ALL projects and clients from DB to create project/project
    const [clientObjs, setClientObjs] = useState([])

    // Get current projects
    const [currentPage, setCurrentPage] = useState([1])
    const[projectsPerPage] = useState(7)   //# of items per page

    //Change page (pageNumber is passed in from Pagination.js ln 21)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const indexOfLastProject = currentPage * projectsPerPage      //1 X 10
    const indexOfFirstProject = indexOfLastProject - projectsPerPage  
    const currentProjects = props.userObj.projects?.slice(indexOfFirstProject, indexOfLastProject)  //get state of current projects and pass in

    useEffect( () => {
        async function fetchData() {
        const res1 = await fetch("http://localhost:3000/clients/")
        res1           
            .json()
            .then(clientObjs => setClientObjs(clientObjs))
            // .then(obj => console.log("clients", obj))

        const res2 = await fetch("http://localhost:3000/projects/")
        res2            
            .json()
            // .then(projects => setProjects(projects))
        }fetchData()
    }, [])
   
    return (
        
        <div className="projects-container"> 
        

            <div className="table-title">
            </div>
            <div className="create-project-div">
                <NewProjectModal projects={props.userObj.projects} clientObjs={clientObjs} userObj={props.userObj} projectSubmitHandler={props.submitProjectHandler}/>
            </div>
                <br/>

            <div className="projects-list">
                <ProjectCards userObj={props.userObj} projects={currentProjects} clients={clientObjs}/>
                {props.userObj.projects ? <Pagination objectsPerPage={projectsPerPage} totalObjects={props.userObj.projects.length} objects={props.userObj.projects} paginate={paginate}/> : null }
            </div>



        </div>
    )
     

        
}
export default ProjectsContainer