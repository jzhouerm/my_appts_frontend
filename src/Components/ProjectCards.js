import React from 'react'
import moment from 'moment'
import {NavLink} from "react-router-dom";


const ProjectCards = ({ projects }) => {
// debugger
    return (
        <>
                <table className="table-fill">
                    <thead>
                            <tr>
                                <th className="text-left">ID</th>
                                <th className="text-left">Name</th>
                                <th className="text-left">Start Date:</th>
                                <th className="text-left">Due Date:</th>
                                <th className="text-left">Status:</th>
                                <th className="text-left">Remaining balance:</th>
                            </tr>
                    </thead>

                    <tbody className="table-hover">
                            {projects.map(project => (
                                <tr key={project.id}>
                                    <td className="text-left">{project.id}</td>
                                    <NavLink to={`/projects/${project.id}`} >
                                    <td className="text-left">{project.name}</td>
                                    </NavLink>
                                    <td className="text-left">{moment(project.start).format("MMMM Do YYYY")}{" "}</td>
                                    <td className="text-left">{moment(project.end).format("MMMM Do YYYY")}{" "}</td>
                                    <td className="text-left">{project.status ? "Completed" : "In progress"}</td>
                                    <td className="text-left">{project.amount - project.paid}</td>
                                </tr>
                            ))} 
                    </tbody>
                </table>


            




        </>


    )
}




export default ProjectCards