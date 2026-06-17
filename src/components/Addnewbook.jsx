import React, { useState } from 'react'
import addNewBookHelper from '../helper/add-new-book-helper';
import { Await } from 'react-router-dom';
import axios from 'axios';
import getConfig from '../services/common/getConfig';

const Addnewbook = () => {
    // const { formValue, errors, handleInputChange, handleSubmit } = addNewBookHelper();

    const initialState = {
        bookName: '',
        category: "",
        description: "",
        author: "",
        copies: "",
        status: "",
        isbn: "",
        price: "",

    }

    const [formValue, setFormValue] = useState(initialState);
    const [errors, setErrors] = useState({});

    const [navigate, setNavigate] = useState();

    const [image, setImage] = useState(null);

    const handleInputChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    }

    const imageChange = (e) => {

        console.log(e.target.files);
        setImage(e.target.files[0]);
    }

    const validate = () => {
        let newErrors = {};

        if (formValue.bookName.trim() === "") {
            newErrors.bookName = "Book name is required!";
        }
        if (formValue.category.trim() === "") {
            newErrors.category = "Book category is required!";
        }
        if (formValue.description.trim() === "") {
            newErrors.description = "Book description is required!";
        }
        if (formValue.author.trim() === "") {
            newErrors.author = "Author name is required!";
        }
        if (formValue.copies.trim() === "") {
            newErrors.copies = "Number of copies is required!";
        }
        if (formValue.status.trim() === "") {
            newErrors.status = "Status is required!";
        }
        if (formValue.isbn.trim() === "") {
            newErrors.isbn = "Status is required!";
        }
        if (formValue.status.trim() === "") {
            newErrors.price = "Price is required";
        }
        // if (formValue.image.trim() === "") {
        //     newErrors.image = "Image file is required";
        // }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append('bookName', formValue.bookName);
        data.append('category', formValue.category);
        data.append('description', formValue.description);
        data.append('author', formValue.author);
        data.append('copies', formValue.copies);
        data.append('status', formValue.status);
        data.append('isbn',formValue.isbn);
        data.append('price', formValue.price);
        data.append('image', image);

        const isValid = validate();

        if (isValid) {
            // API Calling to send data to backend
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/book/add-new-book`, data, getConfig());
            // setErrors(initialState);


            alert('Book added successful');
            navigate();
            
        } else {
            // use Toast/ popup to display error name

        }

    }


    return (
        <>
            <div className="row g-0 px-1  py-5 justify-content-center">
                <div className="col-lg-10 ">
                    <div className="card p-3">

                        <h3 className='py-3  text-center text-primary'>ADD NEW BOOK</h3>

                        <form onSubmit={handleSubmit} autoComplete='off' className="row mt-3 g-3">
                            <div className="col-md-6">
                                <label className="form-label">Book Name</label>
                                <input value={formValue.bookName} onChange={handleInputChange} name='bookName' type="text" className="form-control" placeholder='Enter Book Name' />
                                {
                                    errors.bookName && <small className='text-danger'> {errors.bookName} </small>
                                }
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Category</label>
                                <select name='category' onChange={handleInputChange} value={formValue.category} className='form-select' >
                                    <option value="" selected disabled >--select--</option>
                                    <option value="sports" >Sports</option>
                                    <option value="Web development" >Web Development</option>
                                    <option value="Arts" >Arts</option>
                                    <option value="Literature" >Literature</option>
                                    <option value="Finance" >Finance</option>

                                </select>
                                {
                                    errors.category && <small className='text-danger'> {errors.category} </small>
                                }
                            </div>
                            <div className="col-12">
                                <label className="form-label">Description</label>
                                <textarea onChange={handleInputChange} name='description' value={formValue.description} type="text" className="form-control" rows={2} placeholder="Enter Description" />
                                {
                                    errors.description && <small className='text-danger'> {errors.description} </small>
                                }
                            </div>
                            <div className="col-12">
                                <label className="form-label">Author Name</label>
                                <input name='author' onChange={handleInputChange} value={formValue.author} type="text" className="form-control" placeholder="Enter Author Name" />
                                {
                                    errors.author && <small className='text-danger'> {errors.author} </small>
                                }
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Copies</label>
                                <input name='copies' onChange={handleInputChange} value={formValue.copies} type="number" className="form-control" placeholder='No. of copies' />
                                {
                                    errors.copies && <span className='text-danger'> {errors.copies} </span>
                                }
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Status</label>
                                <select name='status' onChange={handleInputChange} value={formValue.status} className="form-select">
                                    <option value="" selected disabled>--Choose...</option>
                                    <option value='available'>Available</option>
                                    <option value='reserved'>Reserved</option>
                                    <option value='issued'>Issued</option>
                                    <option value='overdue'>Overdue</option>
                                </select>
                                {
                                    errors.status && <small className='text-danger'> {errors.status} </small>
                                }
                            </div>
                            {/* no. of copies */}
                            <div className="col-md-2">
                                <label className="form-label">ISBN</label>
                                <input name='isbn' onChange={handleInputChange} value={formValue.isbn} type="text" className="form-control" placeholder='Enter ISBN Number' />
                                {
                                    errors.isbn && <small className='text-danger'> {errors.isbn} </small>
                                }
                            </div>

                            <div className='col-md-6'>
                                <label className='form-label' >Upload Image</label>
                                <input onChange={imageChange} accept='image/*' type='file' className='form-control' />
                                {
                                    errors.image &&
                                    <small text-danger> {errors.image} </small>
                                }
                            </div>

                            <div className='col-md-6'>
                                <label className='form-label' >Book Price</label>
                                <input name='price' onChange={handleInputChange} value={formValue.price} type='text' className='form-control' placeholder='Enter Book Price' />
                                {
                                    errors.price && <small className='text-danger'>{errors.price}</small>
                                }
                            </div>



                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-success">Save & Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div >
        </>
    )
}

export default Addnewbook;