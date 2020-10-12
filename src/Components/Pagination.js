import React from 'react'
// import '../CSS/bootstrap-theme.css'
// import '../CSS/bootstrap-theme.min.css'
// import '../CSS/Pagination.css'
// import '../CSS/bootstrap.min.css'

const Pagination = ({ clientsPerPage, totalClients, clients, paginate }) => {
    const pageNumbers = []
// debugger
// if index is less than or equal to totalClients divided by clientsPerPage, increment i, Math.ceil rounds up
    for( let i = 1; i <= Math.ceil(totalClients / clientsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(pageNumber => (
                    <li key={pageNumber} className="page-item">
                        <a onClick={() => paginate(pageNumber)} className='page-link'>
                            {pageNumber}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
