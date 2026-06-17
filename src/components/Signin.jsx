import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import getConfig from "../services/common/getConfig";

const Signin = () => {

  //  function to Hide-Unhide password 
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    setShow(!show);
  }

  const navigate = useNavigate();

  //  function to apply Controlled Component by using useState or 

  const initialState = {
    email: '',
    password: '',
  };
  const initialErr = {
    emailErr: '',
    passwordErr: '',
  };


  const [formErr, setFormErr] = useState({});
  const [formValue, setFormValue] = useState(initialState);
  console.log(formValue);

  const handleFromChange = (e) => {
    console.log(e);
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });

    // to remover error display while typing.
    setFormErr({
      ...formErr,
      [name]: ''
    });

  }

  //  form validation Error Handling

  const validate = () => {
    let errors = {};

    if (formValue.email === "") {
      errors.emailErr = " email is required";
    }
    else if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.test(formValue.email)) {
      errors.emailErr = "email is not valid";
    }

    if (formValue.password === '') {
      errors.passwordErr = 'please enter password';
    }


    setFormErr(errors);
    return Object.keys(errors).length === 0;

  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validate();

    if (isValid) {

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/sign-in`, formValue, getConfig);
      // here api of backend is connected through auth-api.js
      console.log(response);


      setFormValue(initialState);

      if (response.status === 201) {

        localStorage.setItem('token',response.token);

        alert('submitted.');
        navigate('/');
      }
    }
    else {
      alert('cannot log in due to invalid credentials');
    };

  }



  return (
    <>

      <div className="container-fluid  " height={'100'}>
        <div className="row g-0 py-4 mt-5  justify-content-center">
          <div className="col-lg-5 ">
            <div className="card p-3">

              <h3 className='text-center text-primary py-2'>Sign In</h3>

              <form action='' autoComplete="off" onSubmit={handleSubmit} >
                <div className="mb-3">
                  <label className="form-label"> Email</label>
                  <input type="text" className="form-control" placeholder="Enter Email" onChange={handleFromChange} name="email" value={formValue.email} />
                  {
                    formErr.emailErr &&
                    <span className="text-danger"> {formErr.emailErr} </span>
                  }
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <div className="input-group flex-nowrap">
                    <input type={show === true ? 'text' : 'password'} className="form-control" placeholder="Enter Password" onChange={handleFromChange} name="password" value={formValue.password} />

                    <span className="input-group-text" id="addon-wrapping" onClick={handleShow} >

                      {show === false ?

                        <i className="bi bi-eye-slash"></i>
                        :
                        <i className="bi bi-eye"></i>

                      }

                    </span>
                  </div>
                  {
                    formErr.passwordErr &&
                    <span className="text-danger"> {formErr.passwordErr} </span>
                  }
                </div>

                <div className='mb-3 text-center'>
                  <button type='submit' className='btn btn-outline-success w-100'> Log In </button>
                </div>

                <p className='mb-2 text-center'> New user? <Link to={'/sign-up'}> Sign up </Link> here.</p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin;