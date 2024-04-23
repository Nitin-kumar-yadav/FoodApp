import React, { useState } from 'react'
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Login = () => {

    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password
                })

            })
            const json = await response.json();
            if (!json.success) {
                enqueueSnackbar('Password not Matched', { variant: 'error' });
            }
            if (json.success) {
                localStorage.setItem("userEmail", credentials.email);
                enqueueSnackbar('Login Successfully', { variant: 'success' });
                localStorage.setItem("authToken", json.authToken);
                navigate('/')
                console.log(localStorage.setItem("token", json.token));
            }


        } catch (error) {
            console.log(error)
            enqueueSnackbar('Login faild', { variant: 'error' });
        }

    }

    return (
        <div className='container ' style={{ marginTop: "120px" }}>
            <form onSubmit={handleSubmit} >

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input type="email" name='email' value={credentials.email} onChange={onChange} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' value={credentials.password} onChange={onChange} className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="m-3 btn btn-success">Submit</button>
                <Link to={'/signup'} className='m-3 btn-danger' >Create a user</Link>
            </form>
        </div>
    )
}

export default Login