import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerationAPI } from '../slice/authSlice';

const Signup = () => {

  // const [alert, setAlert] = useState(null);


  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   setAlert({
  //     message: "Log in successful",
  //     type: "success",
  //   });

  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 3000);
  // };

  // function Hook to Hide - Unhide Password

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStore = useSelector((state) => state.authStore);
  console.log(authStore);


  const [show, setShow] = useState(false);
  const handleShow = (e) => {
    setShow(!show);
  }

  //  form handling function by creating object

  const initialState = {
    name: "",
    email: "",
    mobile: "",
    address: "",
    password: "",

  };


  const [formValue, setFormValue] = useState(initialState);

  const [errors, setErrors] = useState({});

  const handleFormChange = (e) => {

    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });


  }

  const validate = () => {
    let newErrors = {};

    if (formValue.name.trim() === '') {
      newErrors.name = 'User name is required!';
    }
    // else (formValue.name.length < 3) {
    //   errors.nameErr = 'user name length can not be less than 3!';
    // }

    if (formValue.email.trim() === '') {
      newErrors.email = 'Email is required!';
    }
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formValue.email)) {
      newErrors.email = 'Please enter a valid email!';
    }

    if (formValue.mobile.trim() === '') {
      newErrors.mobile = 'mobile number is required';
    }

    else if (formValue.mobile.length < 10 || formValue.mobile.length > 10) {
      newErrors.mobile = "Contact must be exact 10 digits";
    }
    else if (!/^[0-9]{10}$/.test(formValue.mobile.trim())) {
      newErrors.mobile = 'mobile number should be only digits';
    }
    if (formValue.password.trim() === '') {
      newErrors.password = "password is required";
    }
    else if (formValue.password.length < 8) {
      newErrors.password = "Password must be atleast 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validate();

    if (isValid) {
      // API Call;
      // const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/sign-up`, formValue, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     // 'Authorization': 'Bearer your-token-here',
      //   }
      // });
      // console.log(response);

      // API using React-Redux Slice-Store
      dispatch(registerationAPI(formValue));

    }
    else {
      alert('Registration form is empty');
    };
  }

  useEffect(() => {
    if (authStore.statusCode === 201) {
      navigate("/sign-in");
      setFormValue(initialState);
    } 
  }, [authStore.statusCode]);

  return (
    <>
      <div className="container-fluid g-0  "   >
        <div className="row g-0 justify-content-center">
          <div className="col-5  py-5">
            <div className="card p-3">
              <h3 className='text-warning text-center py-2'>New Registration</h3>
              <form action='' autoComplete='off' onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">User Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" onChange={handleFormChange} name='name' value={formValue.name} />
                  {
                    errors.name &&
                    <span className='text-danger'>{errors.name}</span>
                  }
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Your Email" onChange={handleFormChange} name='email' value={formValue.email} />
                  {
                    errors.email &&
                    <span className='text-danger'>{errors.email}</span>
                  }
                </div>
                <div className="mb-3">
                  <label className="form-label">Mobile</label>
                  <input type="tel" onChange={handleFormChange} value={formValue.mobile} name='mobile' className="form-control" placeholder="Your mobile number" />
                  {
                    errors.mobile &&
                    <span className='text-danger'>{errors.mobile}</span>
                  }
                </div>


                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea value={formValue.address} onChange={handleFormChange} name='address' type="text" className="form-control" rows={1} placeholder="Enter your address" />
                  {
                    errors.address &&
                    <span className='text-danger'>{errors.address}</span>
                  }
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <div className="input-group flex-nowrap">

                    <input onChange={handleFormChange} value={formValue.password} name='password' type={show === true ? 'text' : 'password'} className="form-control" placeholder="Create your password" aria-label="Password" aria-describedby="addon-wrapping" />

                    <span className="input-group-text" id="addon-wrapping" onClick={handleShow} >
                      {
                        show === true ?
                          <i className="bi bi-eye"></i>
                          :
                          <i className="bi bi-eye-slash-fill"></i>
                      }
                    </span>
                    {
                      errors.password &&
                      <span className='text-danger'>{errors.password}</span>
                    }
                  </div>


                </div>
                <div className="mb-2 text-center">
                  <button type='submit' className='btn btn-warning '>Register Now</button>
                </div>
                <p className='mb-2 text-center'>Already have an account? <Link to={'/sign-in'}>Sign in</Link></p>
              </form>
            </div>
          </div>
        </div >
      </div >

    </>
  )
}

export default Signup;