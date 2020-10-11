import React from 'react'

const ClientCards = ({ clients, loading }) => {

    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
                <table className="table-fill">
                    <thead>
                            <tr>
                                <th className="text-left">ID</th>
                                <th className="text-left">First Name</th>
                                <th className="text-left">Last Name</th>
                                <th className="text-left">Phone</th>
                                <th className="text-left">Email</th>

                            </tr>
                    </thead>

                    <tbody className="table-hover">
                            {clients.map(client => (
                                <tr>
                                    <td className="text-left">{client.id}</td>
                                    <td className="text-left">{client.first_name}</td>
                                    <td className="text-left">{client.last_name}</td>
                                    <td className="text-left">{client.phone}</td>
                                    <td className="text-left">{client.email}</td>
                                </tr>
                            ))} 
                    </tbody>
                </table>

        </>


    )
}




export default ClientCards