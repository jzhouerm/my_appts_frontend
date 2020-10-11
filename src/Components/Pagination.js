import React from 'react'
import {
    // BrowserRouter as Router,
    Link
    // Route,
    // Switch,
  } from 'react-router-dom';

const Pagination = ({ clientsPerPage, totalClients, clients}) => {
    const pageNumbers = []
// debugger
// if index is less than or equal to totalClients divided by clientsPerPage, increment i, Math.ceil rounds up
    for( let i = 1; i <= Math.ceil(totalClients / clientsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <Link className='page-link'>
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
