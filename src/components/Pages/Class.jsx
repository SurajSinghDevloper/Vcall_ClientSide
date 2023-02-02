import React from 'react'
import { Link } from 'react-router-dom'



function Class() {
  return (
    <>
      {/* ///////////////////////////////////////////////////////// */}
      <nav className="bg-dark navbar-dark">
        <div className="container">
          <a href="/" className="navbar-brand"><i className="fas fa-tree mr-2"></i>Fast Join Now</a>
        </div>
      </nav>
      <section id="header" className="jumbotron text-center">
        <h1 className="display-3">Classes</h1>
        <p className="lead">Good Luck Mates Please select option from below</p>
        <Link to="/vroom" className="btn btn-primary">Wanna JOIN</Link>
        <Link to="/vhome" className="btn btn-secondary ml-2">Wanna Create</Link>
      </section>
      <section id="gallery">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card">
                {/* <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" className="card-img-top" /> */}
                
                {/* add video without autoplay */}
                {/* <video width="100%" height="100%" controls autoplay='false'>
                  <source src="https://res.cloudinary.com/dgnm20gs0/video/upload/v1674232453/UMU%20Project/Part_19_working_with_category_click_load_dynamic_data_using_Ajax_from_server_yy2knz.mp4" type="video/mp4" />
                  Your browser does not support HTML video.
                </video> */}

                
                

                <div className="card-body">
                  <h5 className="card-title">Window Programing</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
                  <a href="/" className="btn btn-outline-success btn-sm">Read More</a>
                  <a href="/" className="btn btn-outline-danger btn-sm"><i className="far fa-heart"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <video width="100%" height="100%" controls autoplay='false'>
                  <source src="https://res.cloudinary.com/dgnm20gs0/video/upload/v1674232498/UMU%20Project/Part_16_Display_categories_main_page_layout_explained_java_advance_project_ahe2tm.mp4" type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
                <div className="card-body">
                  <h5 className="card-title">Complier Design</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
                  <a href="/" className="btn btn-outline-success btn-sm">Read More</a>
                  <a href="/" className="btn btn-outline-danger btn-sm"><i className="far fa-heart"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <video width="100%" height="100%" controls autoplay='false'>
                  <source src="https://res.cloudinary.com/dgnm20gs0/video/upload/v1674232498/UMU%20Project/Part_16_Display_categories_main_page_layout_explained_java_advance_project_ahe2tm.mp4" type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
                <div className="card-body">
                  <h5 className="card-title">CryptoGraphy</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
                  <a href="/" className="btn btn-outline-success btn-sm">Read More</a>
                  <a href="/" className="btn btn-outline-danger btn-sm"><i className="far fa-heart"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Class