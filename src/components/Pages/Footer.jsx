import React from 'react'

function Footer() {
  return (
    <>

      <footer className="text-center text-lg-start bg-light text-muted">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div>
            <a href="/" className="me-4 text-reset ">
              <i className="fa fa-facebook fa-2x mr-3"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fa fa-twitter fa-2x mr-3"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fa fa-google fa-2x mr-3"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fa fa-instagram fa-2x mr-3"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fa fa-linkedin fa-2x mr-3"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fa fa-github fa-2x mr-3"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Usha Martin University
                </h6>
                <p>
                  Usha Martin University is a private university located in Ranchi,
                  Jharkhand, India. Usha Martin University was set up in 2012 vide Usha Martin University,
                  Jharkhand Act 2012 and is duly recognised by the University Grants Commission as a private
                  university.
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset">Angular</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">React</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Vue</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Laravel</a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fa fa-home me-3"></i> Angra Block, Jharkhand 835103, India</p>
                <p>
                  <i className="fa fa-envelope me-3 mr-1"></i>
                  Ushamartin@co.in
                </p>
                <p><i className="fas fa-phone me-3"></i> + 91 9876543210</p>
                <p><i className="fas fa-print me-3"></i> + 0651 567 89</p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-4">
          © 2021 Copyright:
          <a className="text-reset fw-bold mr-2" href="/">www.ushamartin.com</a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  )
}

export default Footer