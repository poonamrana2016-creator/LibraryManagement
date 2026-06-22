import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { data, Link } from 'react-router-dom';
import getConfig from '../services/common/getConfig';

const Books = () => {

  const [showViewModel, setShowViewModel] = useState(null);

  const [showEditModel, setShowEditModel] = useState(false);

  const [showDeleteModel, setShowDeleteModel] = useState(false);
  // const showDeleteModel = (id) => {
  //   setShowDeleteModel(id);
  // }

  // to delete book
  const [selectedData, setSelectedData] = useState("");
  const closeBtnRef = useRef();

  const handleSlectedItem = (id) => {
    setSelectedData(id);
  }

  const handleDeleteData = async () => {
    const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/book/delete-book/${selectedData}`, getConfig());
  };
  console.log(data);
  if (data.success === true) {
    closeBtnRef.current.click();
    window.location.reload();
    alert(data.message);
  };


  const [books, setbooks] = useState([]);

  const [show, setShow] = useState(false);

  const handleClick = (id) => {
    setShow(!show);
  };

  async function connect() {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/book/get-all-book`, getConfig());
    setbooks(response.booklist);
    console.log(response.booklist);

  };

  // const handleDelete = async (id) => {

  //   const data = await axios.delete(`${import.meta.env.VITE_API_URL}/book/delete-book/${id}`, getConfig());
  //   console.log(data);

  //   if (data.status === 200) {
  //     setShowDeleteModel(false);
  //     alert(data.message);
  //   }
  // }

  useEffect(() => {
    connect();
    
    
  }, []);

  return (
    <>

      <div className="container-fluid g-0" >

        {/* Row first */}
        <div className="row g-0 px-5 py-4">
          <div className="col-lg-2 ">
            <h3 className='text-primary'>  Book List</h3>
          </div>
          <div className='col-lg-8'>
            <input className='form-control ' type='text' placeholder='Search book' />
          </div>
          <div className="col-lg-2 text-end">
            <Link to={'/add-new-book'}>
              <button type='submit' className='btn bg-primary'> Add New Book</button>
            </Link>
          </div>
        </div>
        {/* Row first ends */}


        {/* Row for Book Overview */}
        <div className="row px-3 g-0 book_page ">
          <div className="col-lg-3 p-2">
            <div className="card">
              <div className="row g-0">

                <div className="col-lg-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className=" mt-4   bi bi-book-fill" viewBox="0 0 16 16">
                    <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                  </svg>
                </div>

                <div className="col-lg-8 py-2">
                  <h5>Total Book</h5>
                  <h3 className=''>1234</h3>
                  <span>12% upto this month</span>
                </div>

              </div>
            </div>
          </div>

          <div className="col-lg-3 p-2">
            <div className="card">
              <div className="row g-0">

                <div className="col-lg-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className=" mt-4 bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                </div>

                <div className="col-lg-8 py-2">
                  <h5>Available</h5>
                  <h3 className=''>745</h3>
                  <span>59% of total</span>
                </div>

              </div>
            </div>
          </div>

          <div className="col-lg-3 p-2">
            <div className="card">
              <div className="row g-0">

                <div className="col-lg-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className=" mt-4  bi bi-book-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  </svg>
                </div>

                <div className="col-lg-8 py-2">
                  <h5>Issued</h5>
                  <h3 className=''>478</h3>
                  <span>38.2% of total</span>
                </div>

              </div>
            </div>
          </div>

          <div className="col-lg-3 p-2">
            <div className="card">
              <div className="row g-o">

                <div className="col-lg-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className=" mt-4 bi bi-book-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                  </svg>
                </div>

                <div className="col-lg-8 py-2">
                  <h5>Overdue</h5>
                  <h3 className=''>27</h3>
                  <span>Needs Attention</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Row for Book Overview Ends */}


        {/* Book List Starts */}

        <div className="row px-4 py-3 g-0">

          {/* Area to display Book List */}

          <div className="col-lg-12">
            <div className="card p-3">
              <table className='table table-responsive'>

                <thead>
                  <tr className='text-center'>
                    <th className='col'></th>
                    <th className='col'>Book Details</th>
                    <th className='col'>Category</th>
                    <th className='col'>Author</th>
                    <th className='col'>ISBN</th>
                    <th className='col'>Copies</th>
                    <th className='col'>Status</th>
                    <th className='col'>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    books?.map((item, index) => (
                      <tr className='text-center' key={index} >
                        <td>
                          <img src={item.img_url} alt='book' height={50} />
                        </td>
                        <td> {item.description} </td>
                        <td>{item.category}</td>
                        <td> {item.author} </td>
                        <td> {item.isbn} </td>
                        <td> {item.copies} </td>
                        <td> {item.status} </td>
                        {/* <td> {item.action} </td> */}
                        <td className='justify-content-center'>
                          <div className="">
                            <Link to={`/view-book-detail/${item._id}`}>
                              <button type='button' className=' btn btn-sm btn-outline-primary me-2 ' onClick={() => { setShowViewModel(true) }} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                </svg>
                              </button>
                            </Link>

                            <button type='button' className='btn btn-sm btn-outline-warning  me-2 ' onClick={() => { setShowEditModel(true) }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                              </svg>
                            </button>


                            <button type='submit' ref={closeBtnRef} className='btn btn-outline-danger btn-sm  me-2 ' onClick={() => handleSlectedItem(item._id)}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                              </svg>
                            </button>

                          </div>
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
                        <h5 className="modal-title">View Book Details</h5>
                        <button
                          className="btn-close"
                          onClick={() => setShowViewModel(false)}></button>
                      </div>

                      <div className="modal-body">
                        <p>User details here...</p>
                      </div>

                      <div className="modal-footer">
                        <button
                          className="btn btn-primary"
                          onClick={() => setShowViewModel(false)} >
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
                        <h5 className="modal-title">Edit book</h5>
                        <button
                          className="btn-close"
                          onClick={() => setShowEditModel(false)}
                        ></button>
                      </div>

                      <div className="modal-body">
                        <p>Edit, Update, Status Change, etc.</p>
                        <div className="card p-3">
                          <form>
                            <div className="row ">
                              <div className="col-lg-6">
                                <label className='form-label'>Name: </label>
                              </div>
                              <div className="col-lg-6">
                                <input className='form-control' placeholder='enter name' />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>

                      <div className="modal-footer">
                        <button className="btn btn-warning" onClick={() => setShowEditModel(false)} > Save Changes </button>
                        <button className='btn btn-secondary'>Cancel</button>
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
                          
                        ></button>
                      </div>

                      <div className="modal-body">
                        <p>Are you sure you want to <span className='text-danger'>delete this book ? </span> </p>
                      </div>

                      <div className="modal-footer">
                        <button
                          className="btn btn-secondary"
                          
                        >
                          Cancel
                        </button>

                        <button type='button'
                          className="btn btn-danger"
                          onClick={handleDeleteData}>
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

          {/* Area to display after clicked/ selected book */}
          {/* <div className="col-lg-3 px-2">
            <div className="card p-35">
              <h4 className='py-3 px-4'>Book Details</h4>
              <p className='text-center'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBp7IPVZUgnleS01eD7nsxapdRO99phcRvw&s' alt='book' height={60} />
              </p>
              <h5 className='px-3'>Rich Dad Poor Dad</h5>
              <p className='px-3'>Personal finance classic that challenges the myth that you need to earn a high income to become rich .</p>

              <table className='table '>

                <tr >
                  <td className='px-3'>Author:</td>
                  <td className=''>Robert Kioski</td>
                </tr>
                <tr >
                  <td className='px-3'>Category:</td>
                  <td className=''>Finance</td>
                </tr>
                <tr >
                  <td className='px-3'>ISBN:</td>
                  <td className=''>978-0-7432-7356-9</td>
                </tr>
                <tr >
                  <td className='px-3'>Publisher:</td>
                  <td className=''>Warner Books</td>
                </tr>
                <tr >
                  <td className='px-3'>Published:</td>
                  <td className=''>April 8, 2000</td>
                </tr>
                <tr >
                  <td className='px-3'>Total Copies:</td>
                  <td className=''>8</td>
                </tr>
                <tr >
                  <td className='px-3'>Status:</td>
                  <td className=''>Available</td>
                </tr>


              </table>

              <div className="row px-4  mb-3">


                <button className='btn btn-outline-primary btn-sm mb-2 ' onClick={handleClick} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="me-2 bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                  </svg>
                  Edit Book</button>



                <button className='btn btn-outline-primary btn-sm'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="me-1 bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                  </svg>
                  Add copy </button>


              </div>

            </div>
          </div> */}

        </div>

        {/* Book List Ends */}

      </div>

    </>
  )
}

export default Books;