import React from 'react'
import { NavLink } from 'react-router-dom';
import './App.css';
import pic1 from '../assets/icons8-java.svg'
import pic2 from '../assets/icons8-javascript.svg'
import pic3 from '../assets/icons8-python.svg'
import pic4 from '../assets/icons8-mongodb.svg'
import pic5 from '../assets/icons8-react.svg'
import pic6 from '../assets/icons8-my-sql.svg'
function Home() {
    return (
        <>
            <section id='home'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-border mb-4 text-center">Build the skill and Enhance Your Career</h1>
                            <p className="lead text-center fs-4 mb-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum molestiae
                                fugiat eum nulla placeat odio sed dignissimos voluptas ea sint adipisci rerum ab aperiam
                                vel neque eligendi, omnis recusandae!
                            </p>
                            <div className="buttons d-flex justify-content-center">
                                <NavLink to='/contact' className='btn btn-outline-dark me-4 rounded-pill px-4 py-2'>Get Quote</NavLink>
                                <NavLink to='/services' className='btn btn-outline-primary ml-3 rounded-pill px-4 py-2'>Our Services</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className='display-4 fw-border mb-4 text-center mt-3'> Trending Technology which influencing IT Sector</h4>
                <hr className='w-50 mx-auto' />
                {/* <div className="container my-5 py-5"> */}
                <div className="row">
                    <div className="col-12">
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card p-3">
                            <div className="card-body text-center">
                                <img src={pic1} alt="img" className='w-50' />
                                <h5 className="card-title mb-1 fs-4 fw-bold">Java Core + Advance </h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3">
                            <div className="card-body text-center">
                                <img src={pic2} alt="img" className='w-50' />
                                <h5 className="card-title mb-1 fs-4 fw-bold"> Java-Script </h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3">
                            <div className="card-body text-center">
                                <img src={pic3} alt="img" className='w-50' />
                                <h5 className="card-title fs-4 fw-bold">Python</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card p-3">
                            <div className="card-body text-center">
                                <img src={pic4} alt="img" className='w-50' />
                                <h5 className="card-title mb-1 fs-4 fw-bold">Mongo-DB </h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3">
                            <div className="card-body text-center">
                                <img src={pic5} alt="img" className='w-50' />
                                <h5 className="card-title mb-1 fs-4 fw-bold">React-js</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3">
                            <div className="card-body text-center">
                                <img src={pic6} alt="img" className='w-50' />
                                <h5 className="card-title  fs-4 fw-bold">MySql and Sql</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </section>
        </>
    )
}

export default Home