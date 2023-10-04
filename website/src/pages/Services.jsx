import React from 'react'
import SimpleSlider from '../component/SimpleSlider'

const Services = () => {
  return (
   <>
       {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <h1 className="display-1 text-white animated slideInDown">Services</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb text-uppercase mb-0">
                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-primary active" aria-current="page">Services</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Facts Start --> */}
    <div className="container-xxl py-5">
        <div className="container pt-5">
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                        <div className="fact-icon">
                            <img src="/img/icons/icon-2.png" alt="Icon"/>
                        </div>
                        <h3 className="mb-3">Design Approach</h3>
                        <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                        <div className="fact-icon">
                            <img src="/img/icons/icon-3.png" alt="Icon"/>
                        </div>
                        <h3 className="mb-3">Innovative Solutions</h3>
                        <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                        <div className="fact-icon">
                            <img src="/img/icons/icon-4.png" alt="Icon"/>
                        </div>
                        <h3 className="mb-3">Project Management</h3>
                        <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Facts End --> */}


    {/* <!-- Service Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h4 className="section-title">Our Services</h4>
                <h1 className="display-5 mb-4">We Focused On Modern Architecture And Interior Design</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item d-flex position-relative text-center h-100">
                        <img className="bg-img" src="/img/service-1.jpg" alt=""/>
                        <div className="service-text p-5">
                            <img className="mb-4" src="/img/icons/icon-5.png" alt="Icon"/>
                            <h3 className="mb-3">Architecture</h3>
                            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item d-flex position-relative text-center h-100">
                        <img className="bg-img" src="/img/service-2.jpg" alt=""/>
                        <div className="service-text p-5">
                            <img className="mb-4" src="/img/icons/icon-6.png" alt="Icon"/>
                            <h3 className="mb-3">3D Animation</h3>
                            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item d-flex position-relative text-center h-100">
                        <img className="bg-img" src="/img/service-3.jpg" alt=""/>
                        <div className="service-text p-5">
                            <img className="mb-4" src="/img/icons/icon-7.png" alt="Icon"/>
                            <h3 className="mb-3">House Planning</h3>
                            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item d-flex position-relative text-center h-100">
                        <img className="bg-img" src="/img/service-4.jpg" alt=""/>
                        <div className="service-text p-5">
                            <img className="mb-4" src="/img/icons/icon-8.png" alt="Icon"/>
                            <h3 className="mb-3">Interior Design</h3>
                            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item d-flex position-relative text-center h-100">
                        <img className="bg-img" src="/img/service-5.jpg" alt=""/>
                        <div className="service-text p-5">
                            <img className="mb-4" src="/img/icons/icon-9.png" alt="Icon"/>
                            <h3 className="mb-3">Renovation</h3>
                            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item d-flex position-relative text-center h-100">
                        <img className="bg-img" src="/img/service-6.jpg" alt=""/>
                        <div className="service-text p-5">
                            <img className="mb-4" src="/img/icons/icon-10.png" alt="Icon"/>
                            <h3 className="mb-3">Construction</h3>
                            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Service End --> */}
    <SimpleSlider/>
   </>
  )
}

export default Services
