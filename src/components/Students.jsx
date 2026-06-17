import axios from 'axios'
import React, { useState } from 'react'
import { data, Link } from 'react-router-dom'
import getConfig from '../services/common/getConfig'

const Students = async () => {

  const data = [
    {

      name: "alice",
      doj: "12/1/2026",
      contact: "7412589632",
      address: "haldwani",
      seat: "10",
      status: "Active",
      bookIssued: "1",
      fee: "Paid",
      action: "active",
      isEnrolled: true,
    },
    {
      name: "john",
      doj: "10/2/2026",
      contact: "7412589632",
      address: "Pant Nagar",
      seat: "20",
      status: "Active",
      bookIssued: "5",
      fee: false,
      isEnrolled: true,
    },
    {
      name: "mack",
      doj: "20/3/2026",
      contact: "7412589632",
      address: "Kathgodam",
      seat: "28",
      status: "Active",
      bookIssued: "5",
      fee: true,
      isEnrolled: false,

    }

  ];

  const [showViewModel, setShowViewModel] = useState(null);

  const [showEditModel, setShowEditModel] = useState(false);

  const [showDeleteModel, setShowDeleteModel] = useState(false);

  const [student, setStudent] = useState();

  async function connect() {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/student/all-student`, data, getConfig()); l
    console.log(data);

    setStudent(data);

  };



  return (
    <>

      <div className="container-fluid g-0">

        <div className="row g-0 mt-3 px-3">
          <div className="col-lg-2 py-3">
            <h4 className='text-primary '>Students Details</h4>
          </div>
          <div className="col-lg-8 py-3">
            <input className='form-control' type='text' placeholder='Search Student' />
          </div>
          <div className="col-lg-2  py-2 mt-2 text-end">
            <Link to={'/add-student'}>
              <button className='text-center btn btn-outline-primary' type='button  '> Add Student </button>

            </Link>
          </div>
        </div>

        <div className="row g-0 px-4 mt-3 justify-content-center">
          <div className="col-lg-12 text-center">
            <div className="card p-3">

              <table className='table'>
                <thead className=''>
                  <tr className='text-center'>
                    <th className='col'>Sr. No.</th>
                    <th className='col'>Student Name</th>
                    <th className='col'>Date of Joining</th>
                    <th className='col'>Contact</th>
                    <th className='col'>Address</th>
                    <th className='col'>Seat Number</th>
                    <th className='col'>Book Issued</th>
                    <th className='col'>Fee</th>
                    <th className='col'>Status</th>
                    <th className='col'>Action</th>
                  </tr>
                </thead>

                <tbody className='text-center'>

                  {
                    data.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td> {item.name} </td>
                        <td> {item.doj} </td>
                        <td> {item.contact} </td>
                        <td> {item.address} </td>
                        <td> {item.seat} </td>
                        <td> {item.bookIssued} </td>
                        <td>
                          {item.fee === true ?
                            <button type='button' className='btn badge btn-warning btn-sm'>pending</button>
                            :
                            <button type='button' className='btn badge btn-primary btn-sm'>Paid</button>
                          }
                        </td>
                        <td>
                          {
                            item.isEnrolled === true ?
                              <button type='button' className='btn badge btn-success btn-sm '>Active</button>
                              :
                              <button type='button' className='btn badge btn-danger btn-sm '>In-Active</button>

                          }
                        </td>
                        <td className='justify-content-center'>
                          <div className=''>
                            <button onClick={() => { setShowViewModel(true) }} type='button' className='btn  btn-sm btn-outline-primary me-2 '>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                              </svg>
                            </button>
                            <button onClick={() => { setShowEditModel(true) }} type='button' className='btn  btn-sm btn-outline-warning me-2'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                              </svg>
                            </button>
                            <button onClick={() => { setShowDeleteModel(true) }} type='button' className='btn  btn-sm btn-outline-danger me-2'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                              </svg>
                            </button>
                          </div >
                        </td>
                      </tr>

                    ))
                  }


                </tbody>
              </table>

              {/* View Book Model Start */}
              {showViewModel && (
                <div className="modal d-block" tabIndex="-1">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">View Student Details</h5>
                        <button
                          className="btn-close"
                          onClick={() => setShowViewModel(false)}
                        ></button>
                      </div>

                      <div className="modal-body">
                        <p>Student details here...</p>
                      </div>

                      <div className="modal-footer">
                        <button
                          className="btn btn-primary"
                          onClick={() => setShowViewModel(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* View Book Model  Ends*/}

              {/* Edit Book Model Starts*/}
              {showEditModel && (
                <div className="modal d-block" tabIndex="-1">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Edit Student Details</h5>
                        <button
                          className="btn-close"
                          onClick={() => setShowEditModel(false)}
                        ></button>
                      </div>

                      <div className="modal-body">
                        <p>Edit, Update, Status Change, etc.</p>
                      </div>

                      <div className="modal-footer">
                        <button
                          className="btn btn-warning"
                          onClick={() => setShowEditModel(false)}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Edit Book Model Ends */}

              {/* Delete Book Model Starts */}
              {showDeleteModel && (
                <div className="modal d-block" tabIndex="-1">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Delete Book</h5>
                        <button
                          className="btn-close"
                          onClick={() => setShowDeleteModel(false)}
                        ></button>
                      </div>

                      <div className="modal-body">
                        <p>Are you sure you want to  delete this book?</p>
                      </div>

                      <div className="modal-footer">
                        <button
                          className="btn btn-secondary"
                          onClick={() => setShowDeleteModel(false)}
                        >
                          Cancel
                        </button>

                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            setShowDeleteModel(false);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Delete Book Model Ends */}

            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Students