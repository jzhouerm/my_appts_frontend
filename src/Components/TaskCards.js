import React from 'react'
import moment from 'moment'


const TaskCards = ({ tasks }) => {
// debugger
    return (
        <>
                <table className="table-fill">
                    <thead>
                            <tr>
                                <th className="text-left">ID</th>
                                <th className="text-left">Date</th>
                                <th className="text-left">Time</th>
                                <th className="text-left">Client Name</th>
                                <th className="text-left">Email</th>
                                <th className="text-left">Note</th>

                            </tr>
                    </thead>

                    <tbody className="table-hover">
                            {tasks.map(task => (
                                <tr key={task.id}>
                                    <td className="text-left">{task.id}</td>
                                    <td className="text-left">{moment(task.start).format("MMMM Do YYYY")}{" "}</td>
                                    <td className="text-left">{moment(task.start).format("LT")}</td>
                                    <td className="text-left">{task.client_first_name + " " + task.client_last_name}</td>
                                    <td className="text-left">{task.client_email}</td>
                                </tr>
                            ))} 
                    </tbody>
                </table>

        </>


    )
}




export default TaskCards