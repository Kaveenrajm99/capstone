import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';


function Login() {

    let formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            try {
                let loginData = await axios.post('http://localhost:3001/login', values);
                window.localStorage.setItem('myapptoken', loginData.data.token);

            } catch (error) {
                console.log(error);
                alert('Something went wrong');
            }
        },
    });
    return (
        <div className="container mt-5 fw-bold  ">
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-12 ">
                        <label>Email</label>
                        <input
                            type={'email'}
                            className="form-control"
                            name="email"
                            id="email"
                            style={{ width: 500 }}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>
                    <div className="col-lg-12">
                        <label>Password</label>
                        <input
                            type={'password'}
                            className="form-control"
                            name="password"
                            id="password"
                            style={{ width: 500 }}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div>
                    <div className="col-lg-12 mt-2">
                        <NavLink to='/home' type="button" class="btn btn-primary">Submit</NavLink>
                    </div>
                    <div className="col-lg-12 mt-2">
                        <NavLink to='/register' type="button" class="btn btn-primary">New Register</NavLink>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
