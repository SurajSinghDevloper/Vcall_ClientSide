import React from 'react'
import pic1 from '../assets/contact1.jpg'
function Contact() {
    return (
        <>

            <section id="contact">
                <div className="container my-5 py-2">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className='fs-5 text-center mb-0'>Contact Us</h3>
                            <h1 className='display-6 text-center mb-4'>Have Some <b>Question</b></h1>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={pic1} alt="imgs" className='w-75' />
                        </div>
                        <div className="col-md-6">
                            <form action="">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Name </label>
                                    <input type="email" className="form-control" id="name" placeholder="your name" />
                                </div>

                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="your email" />
                                </div>

                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Mention Your Query in Brief.</label>
                                    <textarea className="form-control" id="message" rows="3"></textarea>
                                </div>
                                <button type="submit" className='btn btn-outline-primary'>Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Contact