import React, { useState, useEffect} from 'react'
import '../CSS/ClientTable.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProjectCards from '../Components/ProjectCards'
import Pagination from '../Components/Pagination'
import NewProjectModal from '../Components/NewProjectModal'
import NewProjectForm from './NewProjectForm'
import ProjectShow from './ProjectShow'
// import ProjectsContainer from './ProjectsContainer';

 
const ProjectsContainer = (props) => {
    // Get ALL projects and clients from DB to create project/project
    const [clientObjs, setClientObjs] = useState([])

    // Get current projects
    // const [projects, setProjects] = useState([props.userObj.projects])
    // const [userObj] = useState(props.userObj)
    const [loading, setLoading] = useState([true])
    const [currentPage, setCurrentPage] = useState([1])
    const[projectsPerPage] = useState(10)   //# of items per page

    //Change page (pageNumber is passed in from Pagination.js ln 21)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const indexOfLastProject = currentPage * projectsPerPage      //1 X 10
    const indexOfFirstProject = indexOfLastProject - projectsPerPage  
    const currentProjects = props.userObj.projects?.slice(indexOfFirstProject, indexOfLastProject)  //get state of current projects and pass in

    // console.log("currentProjects: ", currentProjects)

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

    // const submitProjectHandler = (newProject) => {
    //     console.log("ProjectsContainer submitProjectHandler", newProject)
    //     props.submitProjectHandler(newProject)
    // }
   
    // console.log(props.userObj.projects)
    return (
        
        <div className="projects-container"> 
        

            <div className="table-title">
                <h3>My Projects</h3>
            </div>
            <div>
            </div>
            <div className="new-project-form">
                <NewProjectModal projects={props.userObj.projects} clientObjs={clientObjs} userObj={props.userObj} projectSubmitHandler={props.submitProjectHandler}/>
                {/* <NewProjectForm projects={props.userObj.projects} clientObjs={clientObjs} userObj={props.userObj} projectSubmitHandler={props.submitProjectHandler}/> */}
            </div>

            <div className="projects-list">
            <ProjectCards userObj={props.userObj} projects={currentProjects} clients={clientObjs}/>
            {props.userObj.projects ? <Pagination objectsPerPage={projectsPerPage} totalObjects={props.userObj.projects.length} objects={props.userObj.projects} paginate={paginate}/> : null }
            </div>



        </div>
    )
     

        
}
export default ProjectsContainer