import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/icons8-redux.svg'
function Navbar() {
    return (
        <>

            {/* //////////////////////////////////////////// */}
            <nav className="navbar navbar-expand-lg navbar-light shadow">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/lecture">Lecture</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/class">Class</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/services">Services</NavLink>
                        </li>
                    </ul>
                    <NavLink className="navbar-brand fw-border fs-4 max-auto" to="/"><img src={Logo} alt="" />Skill-Up</NavLink>
                    <NavLink to='login' className="btn btn-outline-primary mr-2 px-4 rounded-pill">
                        <i className='fa fa-sign-in me-2'></i>Login</NavLink>
                    <NavLink to='/signup' className="btn btn-outline-primary ms-2 px-4 rounded-pill">
                        <i className='fa fa-user-plus me-2'></i>Register</NavLink>
                </div>
            </nav>

            {/* ///////////////////////////////////////////// */}

        </>
    )
}

export default Navbar