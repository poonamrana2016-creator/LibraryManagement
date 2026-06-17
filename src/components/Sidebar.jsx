import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <>
            <div className="container-fluid p-0">
                <div className="row g-0 py-2 justify-content-center">
                    <div className="col-lg-10 ">

                        <nav className="navbar title_bg bg-body-tertiary">
                            <Link to={'/'} className='no_underline' > <h3 className=' title_color text-center'>Library Management </h3></Link>
                        </nav>

                    </div>
                </div>

                <div className="row g-0">
                    <div className='col-lg-12 p-0 '>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Link to={'/'}>Dashboard</Link>
                            </li>

                            <li className="list-group-item">
                                <Link to={'/students-list'}>Students</Link>
                            </li>

                            <li className="list-group-item">
                                <Link to={'/book-list'}>Books</Link>
                            </li>
                                                    

                            <li className="list-group-item">
                               <Link to={'/fee'}> Fees </Link>
                            </li>

                            <li className="list-group-item">Renewal Management</li>



                            <li className="list-group-item">
                                <Link to={'/sign-in'}>Log in</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to={'/sign-up'}>New Registration </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar