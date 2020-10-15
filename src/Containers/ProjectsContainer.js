import React, { useState, useEffect} from 'react'
import '../CSS/ClientTable.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProjectCards from '../Components/ProjectCards'
import Pagination from '../Components/Pagination'
import NewProjectForm from './NewProjectForm'
import ProjectShow from './ProjectShow'
 
const ProjectsContainer = (props) => {
    // Get ALL projects and clients from DB to create project/project
    const [clientObjs, setClientObjs] = useState([])

    // Get current projects
    const [projects, setProjects] = useState([props.userObj.projects])
    const [userObj] = useState(props.userObj)
    const [loading, setLoading] = useState([true])
    const [currentPage, setCurrentPage] = useState([1])
    const[projectsPerPage] = useState(10)   //# of items per page

    //Change page (pageNumber is passed in from Pagination.js ln 21)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const indexOfLastProject = currentPage * projectsPerPage      //1 X 10
    const indexOfFirstProject = indexOfLastProject - projectsPerPage  
    const currentProjects = projects?.slice(indexOfFirstProject, indexOfLastProject)  //get state of current projects and pass in


    useEffect( () => {
        async function fetchData() {
        const res1 = await fetch("http://localhost:3000/clients/")
        res1           
            .json()
            .then(clientObjs => setClientObjs(clientObjs))

        const res2 = await fetch("http://localhost:3000/projects/")
        res2            
            .json()
            .then(projects => setProjects(projects))
        }fetchData()
    }, [])

    const projectSubmitHandler = (newProject) => {
        // console.log("inside projectSubmitHandler", newProject)
        let newArray = [newProject,...projects]
        console.log("old", newArray)
        setProjects(newArray)
        console.log("new", newArray)
        const obj = {
        user_id: userObj.id,
        client_id: newProject.client_id, 
        name: newProject.name, 
        description: newProject.description,
        amount: newProject.amount,
        start: newProject.start, 
        end: newProject.end}

        const options = {
            "method": "POST",
            "headers": {
              "Content-Type": "application/json",
              "accept": "application/json"
            },
          body: JSON.stringify(obj)
        }
        
        fetch("http://localhost:3000/projects/", options)
        .then(res => res.json())
        .then(proj => setProjects([proj,...projects]))
    }













    deleteHandler =(id)=>{
        console.log("deletehandler", id)
  
        fetch(`http://localhost:3000/projects/${id}`, {
        method: "DELETE"
        })
      }
  
      editHandler =()=> {
        console.log("edithandler")
      }


// debugger
    return (
        
        <>
            <div className="table-title">
                <h3>My Projects</h3>
            </div>
            <NewProjectForm projects={projects} clientObjs={clientObjs} userObj={props.userObj} projectSubmitHandler={projectSubmitHandler}/>
            <ProjectCards userObj={props.userObj} projects={currentProjects} clients={clientObjs}/>
            <Pagination objectsPerPage={projectsPerPage} totalObjects={projects.length} objects={projects} paginate={paginate}/>

            <Route exact path="/projects/:id" render={(renderProps) =>
                    <ProjectShow 
                    userObj={this.state.userObj}
                    deleteHandler={this.deleteHandler}
                    editHandler={this.editHandler}
                    {...renderProps}/>
                    }/>
        </>
    )
     

        
}
export default ProjectsContainer