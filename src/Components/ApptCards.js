import React from 'react'
import moment from 'moment'


const ApptCards = ({ appts }) => {
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

                            </tr>
                    </thead>

                    <tbody className="table-hover">
                            {appts.map(appt => (
                                <tr key={appt.id}>
                                    <td className="text-left">{appt.id}</td>
                                    <td className="text-left">{moment(appt.start).format("MMMM Do YYYY")}{" "}</td>
                                    <td className="text-left">{moment(appt.start).format("LT")}</td>
                                    <td className="text-left">{appt.client_first_name + " " + appt.client_last_name}</td>
                                    <td className="text-left">{appt.client_email}</td>
                                </tr>
                            ))} 
                    </tbody>
                </table>

        </>


    )
}




export default ApptCards