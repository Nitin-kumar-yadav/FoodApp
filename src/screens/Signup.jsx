import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [credentials, setCredentials] = useState({ user: "", email: "", password: "", location: "" })
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:8000/api/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: credentials.user,
                    email: credentials.email,
                    password: credentials.password,
                    location: credentials.location
                })

            })
            const json = await response.json();
            enqueueSnackbar('Account Created Successfully', { variant: 'success' });
            console.log(json)
            navigate('/login')

        } catch (error) {
            console.log(error)
        }

    }



    return (
        <div className='container ' style={{ marginTop: "120px" }}>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                    <input type="text" name='user' value={credentials.user} onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input type="email" name='email' value={credentials.email} onChange={onChange} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' value={credentials.password} onChange={onChange} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                    <input type="text" name='location' value={credentials.location} onChange={onChange} className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="m-3 btn btn-success">Submit</button>
                <Link to={'/login'} className='m-3 btn-danger' >Alreay a user</Link>
            </form>
        </div>
    )
}

export default Signup