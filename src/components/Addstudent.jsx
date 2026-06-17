import axios from 'axios';
import React, { useState } from 'react';
import getConfig from '../services/common/getConfig';

const Addstudent = () => {

    const initialState = {
        name: "",
        phone: "",
        email: "",
        doj: "",
        seat: "",
        status: "",
        bookissued: "",
        fee: "",
        address: "",

    }

    const [formValue, setFormValue] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    }

    const validate = () => {
        let newErrors = {};

        if (formValue.name.trim() === "") {
            newErrors.name = "Student name is required";
        }

        if (formValue.phone.trim() === "") {
            newErrors.phone = "Phone number is required!";
        }
        if (formValue.email.trim() === "") {
            newErrors.email = "Student email is required!";
        }
        if (formValue.doj.trim() === "") {
            newErrors.doj = "Date of joining is required";
        }
        if (formValue.seat.trim() === "") {
            newErrors.seat = "Seat number is required";
        }
        if (formValue.status.trim() === "") {
            newErrors.status = "Status is required";
        }
        if (formValue.bookissued.trim() === "") {
            newErrors.bookissued = "Number of book isued is required";
        }
        if (formValue.fee.trim() === "") {
            newErrors.fee = "Course is required";
        }
        if (formValue.address.trim() === "") {
            newErrors.address = "Address is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const hahndleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', formValue.name);
        data.append('phone', formValue.phone);
        data.append('email', formValue.email);
        data.append('doj', formValue.doj);
        data.append('seat', formValue.seat);
        data.append('status', formValue.status);
        data.append('bookissued', formValue.bookissued);
        data.append('fee', formValue.fee);
        data.append('address', formValue.address);

        const isValid = validate();

        if (isValid) {
            // Api Calling here

            const response = await axios.post(`${import.meta.env.VITE_API_URL}/student/add-new-student`, formValue, getConfig());
            alert('New Student Added Succefully!');

        } else {
            // Error Toast
            alert('Unable to add a new Student!, please try after sometimes');
        }
    }


    return (
        <>

            <div className="container-fluid g-0">
                <div className="row g-0 justify-content-center px-4 py-5">
                    <div className="col-lg-8">
                        <div className="card p-3">
                            <h3 className='text-warning text-center py-3'>ADD NEW STUDENT</h3>

                            <form onSubmit={hahndleSubmit} autoComplete='off' className='row g-3 mt-2'>

                                <div className="mb-2 col-lg-6 col-md-6 col-sm-6">
                                    <label className='form-label'> Student Name </label>
                                    <input name='name' onChange={handleInput} value={formValue.name} type='name' className='form-control' placeholder='Enter student name' />
                                    {
                                        errors.name &&
                                        <small className='text-danger'> {errors.name} </small>
                                    }
                                </div>

                                <div className='mb-2 col-lg-6 col-md-6 col-sm-6'>
                                    <label className='form-label'>Phone</label>
                                    <input name='phone' onChange={handleInput} value={formValue.phone} className='form-control' placeholder='Enter Phone number' />
                                    {
                                        errors.phone &&
                                        <small className='text-danger'>{errors.phone} </small>
                                    }
                                </div>

                                <div className="mb-2 col-lg-12 col-md-12 col-sm-12">
                                    <label className='form-label'>Email</label>
                                    <input name='email' onChange={handleInput} value={formValue.email} className='form-control' placeholder='Enter student email' />
                                    {
                                        errors.email && <small className='text-danger'> {errors.email} </small>
                                    }
                                </div>

                                <div className='mb-2 col-lg-4 col-md-4 col-sm-4'>
                                    <label className='form-label'>Date of Joining</label>
                                    <input name='doj' onChange={handleInput} value={formValue.doj} type='date' className='form-control' />
                                    {
                                        errors.doj &&
                                        <small className='text-danger' > {errors.doj} </small>
                                    }
                                </div>
                                <div className='mb-2 col-lg-4 col-md-4 col-sm-4'>
                                    <label className='form-label'>Seat Number</label>
                                    <input name='seat' onChange={handleInput} value={formValue.seat} className='form-control' placeholder='Enter Seat' />
                                    {
                                        errors.seat && <small className='text-danger'> {errors.doj} </small>
                                    }
                                </div>
                                <div className='mb-2 col-lg-4 col-md-4 col-sm-4'>
                                    <label className='form-label'>Status</label>
                                    <select name='status' value={formValue.status} onChange={handleInput} className="form-select" aria-label="--select status--">
                                        <option value="" selected >--select status--</option>
                                        <option value="active">Active</option>
                                        <option value="in-active">In-active</option>
                                    </select>
                                    {/* <input name='status' onChange={handleInput} value={formValue.status} className='form-control' placeholder='Enter Status' /> */}
                                    {
                                        errors.status && <small className='text-danger' > {errors.status} </small>
                                    }
                                </div>


                                <div className='mb-2 col-lg-6 col-md-6 col-sm-6'>
                                    <label className='form-label'>Number of book issued</label>
                                    <input name='bookissued' onChange={handleInput} value={formValue.bookissued} type='tel' className='form-control' placeholder='Enter number of book issued' />
                                    {
                                        errors.bookissued && <small className='text-danger'> {errors.bookissued} </small>
                                    }
                                </div>
                                <div className="mb-2 col-lg-6 col-md-6 col-sm-6">
                                    <label className='form-label'>Fee</label>
                                    <input name='fee' onChange={handleInput} value={formValue.fee} className='form-control' placeholder='enter fee' />
                                    {
                                        errors.fee &&
                                        <small className='text-danger'> {errors.fee} </small>
                                    }
                                </div>

                                <div className='mb-2 col-lg-12 col-md-12 col-sm-12'>
                                    <label className='form-label'>Address</label>
                                    <textarea name='address' onChange={handleInput} value={formValue.address} rows={2} className='form-control' placeholder='Enter address' />
                                    {
                                        errors.address && <small className='text-danger'> {errors.address} </small>
                                    }
                                </div>

                                <button type='submit' className='btn btn-outline-warning text-center'> Add </button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Addstudent