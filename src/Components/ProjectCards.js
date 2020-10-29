import React from 'react'
import moment from 'moment'
import {NavLink} from "react-router-dom";


const ProjectCards = ({ projects }) => {
//getting new data from useEffect in ProjectsContainer

const currencyFormat = (num) =>{
    return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }
    return (
        <>
                <table className="table-fill">
                    <thead>
                            <tr>
                                <th className="text-left">ID</th>
                                <th className="text-left">Project Name</th>
                                <th style={{width:'20%'}} className="text-left">Start Date:</th>
                                <th style={{width:'20%'}} className="text-left">Due Date:</th>
                                <th style={{width:'10%'}}className="text-left">Status:</th>
                                <th style={{width:'10%'}}className="text-left">Balance:</th>
                            </tr>
                    </thead>

                    <tbody className="table-hover">
                            {projects?.map(project => (
                                <tr key={project.id}>
                                    <td className="text-left">{project.id}</td>
                                    <NavLink style={{ textDecoration: 'none' }} to={`/projects/${project.id}`} >
                                    <td style={{height:'88px', width:'400px'}}className="text-left">{project.name}</td>
                                    </NavLink>
                                    <td className="text-left">{moment(project.start).format("MMMM Do YYYY")}{" "}</td>
                                    <td className="text-left">{moment(project.end).format("MMMM Do YYYY")}{" "}</td>
                                    <td className="text-left">{project.status ? "Completed" : "In progress"}</td>
                                    <td className="text-left">{currencyFormat(project.amount - project.paid)}</td>
                                </tr>
                            ))} 
                    </tbody>
                </table>


            




        </>


    )
}




export default ProjectCards