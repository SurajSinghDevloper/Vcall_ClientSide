import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login() {
    // /////////////////////////////////////////////////////////////////////////////////////
    const history = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const loginUser = (e) => {
        e.preventDefault();
        console.log(email, password,)
        axios.post("http://localhost:8000/signin",
            {
                email: email,
                password: password
            }
        ).then(res => {
            console.log(res.data)
            if (res.data.code === 500) {
                alert("User Not Found redirecting to Sign-up")
                history('/register')
            }
            if (res.data.code === 404) {
                alert("Password is Wrong")
            }
            if (res.data.code === 200) {
                alert("User Login Successful...")
                history('/dashbord')
                localStorage.setItem('TOKEN', res.data.token)
            }
        }).catch(err => { console.log(err) })
    }
    // ///////////////////////////////////////////////////////////////////////////////////////
    return (
        <>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="ml-5 col-md-5 d-flex flex-column text-dark align-item-center justify-content-center form">
                        <h1 className="display-4 ml-5 fw-bolder">Welcome Back</h1>
                        <p className="lead text-center">Enter Your Credential To Login</p>
                        <h5 className='mb-4 ml-3'>Are You New to This❓ Just Go with it ⤵️</h5>
                        <div className="container justify-content-center">
                            <NavLink to='/signup' className='btn btn-outline-dark rounded-pill   pb-2 w-100'>Register</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6 p-5">
                        <div className="display-6 fw-bolder mb-5 text-align-center">Login</div>
                        <form method='POST'>
                            <div className="form-group">
                                <label >Email address</label>
                                <input type="email" name='email' className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="email" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label >Password</label>
                                <input type="password" name='password' className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="password" />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" >Remember Me</label>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={loginUser}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login