import React from 'react'
import { useEffect } from 'react'
import pic1 from '../assets/about1.jpg'
function About() {

    const callAboutPage = async () => {
        try {
            await fetch('/about')
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        callAboutPage();
    }, []);


    return (
        <>

            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={pic1} alt="img" className='w-75 me-5 mt-5' />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5">About-us</h3>
                            <h1 className="display-6 mb-2">Who <b /> We <b />Are </h1>
                            <hr className='w-50' />
                            <p className="lead mb-4">Usha Martin University is dedicated 
                            to offer cost-effective quality education for sustainable inclusive 
                            development of society in the state of Jharkhand. Fire is the test of 
                            gold and courage is the conviction of brave. With firm faith in this dictum, 
                            Usha Martin University has set benchmarks for itself to take this society from 
                            stagnation and poverty to dynamism and prosperity, from marginalization and deprivation 
                            to empowerment and recognition and from ignorance and delusion to enlightenment and liberation 
                            through offer of education.
                            </p>
                            <button className='btn btn-primary rounded-pill px-4 py-2'>Get Started</button>
                            <button className='btn btn-primary rounded-pill px-4 py-2 ms-2 ml-3'>Contact-us</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About