import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Signup() {
    // /////////////////////////////////////////////////////////////////////////////////////////////////////////
    const history = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [profession, setProfession] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, profession, phone, password, cpassword)
        axios.post("http://localhost:8000/register",
            {
                name: name,
                email: email,
                profession: profession,
                phone: phone,
                password: password,
                cpassword: cpassword
            }
        ).then(res => {
            console.log(res.data)
            if (res.data.code !== 200) {
                alert("Error Found")
                return
            } else {
                alert('Register Successfully... Redirecting to Login..')
                history('/login')
            }
        }).catch(err => { console.log(err) })
    }

    // ////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <>
            <div className="container shadow my-5">
                <div className="row justify-content-center-">
                    <div className="ml-5 col-md-5 d-flex flex-column text-dark align-item-center justify-content-center form order-2">
                        <h1 className="display-4  text-center fw-bolder">Welcome </h1>
                        <p className="lead text-center ">Enter Your Credential To Sign-Up</p>
                        <h5 className='mb-3 text-center'>Or</h5>
                        <h5 className='mb-3 ml-3 text-center'>Already User❓ Just Go with it ⤵️</h5>
                        <div className="container justify-content-center">
                            <NavLink to='/login' className='btn text-center justify-content-center btn-outline-dark rounded-pill  mx-5  pb-2 w-100'>Login</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6 p-5">
                        <form method='POST'>
                            <div className="form-group" id='register-form'>
                                <label >Name</label>
                                <input type="text" name='name' value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label>profession</label>
                                <input type="text" name='profession' value={profession} onChange={(e) => { setProfession(e.target.value) }} className="form-control" id="profession" />
                            </div>
                            <div className="form-group">
                                <label >Phone</label>
                                <input type="text" name='phone' value={phone} onChange={(e) => { setPhone(e.target.value) }} className="form-control" id="phone" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" id="password" />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" name='cpassword' value={cpassword} onChange={(e) => { setCpassword(e.target.value) }} className="form-control" id="cpassword" />
                            </div>
                            <button type="submit" onClick={handelSubmit} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup