
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import getConfig from '../services/common/getConfig';
import { data, useParams } from 'react-router-dom';

const GetBookById = () => {

    const { id } = useParams();
    const [bookData, setBookData] = useState({});

    

    useEffect(() => {
        async function getBook() {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/book/book-detail/${id}`, getConfig());
            // here {data} is bringing the book details stored in a clicked book item from backend named as "book"
            console.log(data);
            setBookData(data.book);
            // here if we see in console we will get the {data} all details of Book 

        }
        getBook();
    }, []);

    return (
        <>

            <div className="container-fluid g-0">
                <div className="row g-0 justify-content-center px-2">
                    <div className="col-lg-10 py-3">
                        <h3 className='text-center text-primary'>book details see</h3>

                        <div className="card p-3">
                            <form autoComplete='off'>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <label className='form-label'>Book Name</label>
                                        <input className='form-control' value={bookData.bookName} />
                                    </div>
                                    <div className="col-lg-4">
                                        <label className='form-label'>Author</label>
                                        <input className='form-control' value={bookData.author} />
                                    </div>
                                    <div className="col-lg-4">
                                        <label className='form-label'>Category</label>
                                        <input className='form-control' value={bookData.category} />
                                    </div>
                                    <div className="col-lg-4">
                                        <label className='form-label'>Copies</label>
                                        <input className='form-control' value={bookData.copies} />
                                    </div>
                                    <div className="col-lg-4">
                                        <label className='form-label'>Status</label>
                                        <input className='form-control' value={bookData.status} />
                                    </div>
                                    <div className="col-lg-4">
                                        <label className='form-label'>Price</label>
                                        <input className='form-control' value={bookData.price} />
                                    </div>
                                    <div className="col-lg-4">
                                        <label className='form-label'>Description</label>
                                        <input className='form-control' value={bookData.description} />
                                    </div>
                                    <div className="col-lg-4">
                                        <label className='form-label'>ISBN</label>
                                        <input className='form-control' value={bookData.isbn} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default GetBookById