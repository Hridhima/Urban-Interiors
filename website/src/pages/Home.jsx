import React from 'react'
import SimpleSlider from '../component/SimpleSlider'

const Home = () => {
    return (
        <>

            {/* <!-- Carousel Start --> */}
            <div className="container-fluid px-0 mb-5">
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="img/carousel-1.jpg" alt="" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-7 text-start">
                                            <p className="fs-4 text-white animated slideInRight">Welcome to
                                                <strong> Urban Interiors</strong>
                                            </p>
                                            <h1 className="display-1 text-white mb-4 animated slideInRight">Best Interior Architecture Design Services</h1>
                                            <a href=""
                                                className="btn btn-primary rounded-pill py-3 px-5 animated slideInRight">Explore
                                                More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="img/carousel-2.jpg" alt="" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-end">
                                        <div className="col-lg-7 text-end">
                                            <p className="fs-4 text-white animated slideInLeft">Welcome to <strong> Urban Interiors</strong>
                                            </p>
                                            <h1 className="display-1 text-white mb-5 animated slideInLeft">Best Architecture And Interior Design Services</h1>
                                            <a href=""
                                                className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Explore
                                                More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <!-- Carousel End --> */}



            {/* <!-- Facts Start --> */}
            <div className="container-xxl py-5">
                <div className="container pt-5">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                                <div className="fact-icon">
                                    <img src="/img/icons/icon-2.png" alt="Icon" />
                                </div>
                                <h3 className="mb-3">Design Approach</h3>
                                <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                                <div className="fact-icon">
                                    <img src="/img/icons/icon-3.png" alt="Icon" />
                                </div>
                                <h3 className="mb-3">Innovative Solutions</h3>
                                <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                                <div className="fact-icon">
                                    <img src="/img/icons/icon-4.png" alt="Icon" />
                                </div>
                                <h3 className="mb-3">Project Management</h3>
                                <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Facts End --> */}


            {/* <!-- About Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img">
                                <img className="img-fluid" src="/img/about-1.jpg" alt="" />
                                <img className="img-fluid" src="/img/about-2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h4 className="section-title">About Us</h4>
                            <h1 className="display-5 mb-4">A Creative Architecture Agency For Your Dream Home</h1>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                            <div className="d-flex align-items-center mb-5">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center border border-5 border-primary" style={{ width: "120px", height: "120px" }}>
                                    <h1 className="display-1 mb-n2" data-toggle="counter-up">25</h1>
                                </div>
                                <div className="ps-4">
                                    <h3>Years</h3>
                                    <h3>Working</h3>
                                    <h3 className="mb-0">Experience</h3>
                                </div>
                            </div>
                            <a className="btn btn-primary py-3 px-5" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}


            {/* <!-- Service Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h4 className="section-title">Our Services</h4>
                        <h1 className="display-5 mb-4">We Focused On Modern Architecture And Interior Design</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item d-flex position-relative text-center h-100">
                                <img className="bg-img" src="/img/service-1.jpg" alt="" />
                                <div className="service-text p-5">
                                    <img className="mb-4" src="/img/icons/icon-5.png" alt="Icon" />
                                    <h3 className="mb-3">Architecture</h3>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item d-flex position-relative text-center h-100">
                                <img className="bg-img" src="/img/service-2.jpg" alt="" />
                                <div className="service-text p-5">
                                    <img className="mb-4" src="/img/icons/icon-6.png" alt="Icon" />
                                    <h3 className="mb-3">3D Animation</h3>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item d-flex position-relative text-center h-100">
                                <img className="bg-img" src="/img/service-3.jpg" alt="" />
                                <div className="service-text p-5">
                                    <img className="mb-4" src="/img/icons/icon-7.png" alt="Icon" />
                                    <h3 className="mb-3">House Planning</h3>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item d-flex position-relative text-center h-100">
                                <img className="bg-img" src="/img/service-4.jpg" alt="" />
                                <div className="service-text p-5">
                                    <img className="mb-4" src="/img/icons/icon-8.png" alt="Icon" />
                                    <h3 className="mb-3">Interior Design</h3>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item d-flex position-relative text-center h-100">
                                <img className="bg-img" src="/img/service-5.jpg" alt="" />
                                <div className="service-text p-5">
                                    <img className="mb-4" src="/img/icons/icon-9.png" alt="Icon" />
                                    <h3 className="mb-3">Renovation</h3>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item d-flex position-relative text-center h-100">
                                <img className="bg-img" src="/img/service-6.jpg" alt="" />
                                <div className="service-text p-5">
                                    <img className="mb-4" src="/img/icons/icon-10.png" alt="Icon" />
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


            {/* <!-- Feature Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h4 className="section-title">Why Choose Us!</h4>
                            <h1 className="display-5 mb-4">Why You Should Trust Us? Learn More About Us!</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="d-flex align-items-start">
                                        <img className="flex-shrink-0" src="/img/icons/icon-2.png" alt="Icon" />
                                        <div className="ms-4">
                                            <h3>Design Approach</h3>
                                            <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex align-items-start">
                                        <img className="flex-shrink-0" src="/img/icons/icon-3.png" alt="Icon" />
                                        <div className="ms-4">
                                            <h3>Innovative Solutions</h3>
                                            <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex align-items-start">
                                        <img className="flex-shrink-0" src="/img/icons/icon-4.png" alt="Icon" />
                                        <div className="ms-4">
                                            <h3>Project Management</h3>
                                            <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="feature-img">
                                <img className="img-fluid" src="/img/about-2.jpg" alt="" />
                                <img className="img-fluid" src="/img/about-1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Feature End --> */}


            {/* <!-- Project Start --> */}
            <div className="container-xxl project py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h4 className="section-title">Our Projects</h4>
                        <h1 className="display-5 mb-4">Visit Our Latest Projects And Our Innovative Works</h1>
                    </div>
                    <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="col-lg-4">
                            <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
                                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                                    <h3 className="m-0">01. Modern Complex</h3>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                                    <h3 className="m-0">02. Royal Hotel</h3>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                                    <h3 className="m-0">03. Mexwel Buiding</h3>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                                    <h3 className="m-0">04. Shopping Complex</h3>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content w-100">
                                <div className="tab-pane fade show active" id="tab-pane-1">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{ minHeight: "350px" }}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute img-fluid w-100 h-100" src="/img/project-1.jpg"
                                                    style={{ objectFit: "cover" }} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h1 className="mb-3">25 Years Of Experience In Architecture Industry</h1>
                                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Design Approach</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Innovative Solutions</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Project Management</p>
                                            <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-2">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{ minHeight: "350px" }}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute img-fluid w-100 h-100" src="/img/project-2.jpg"
                                                    style={{ objectFit: "cover" }} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h1 className="mb-3">25 Years Of Experience In Architecture Industry</h1>
                                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Design Approach</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Innovative Solutions</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Project Management</p>
                                            <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-3">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{ minHeight: "350px" }}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute img-fluid w-100 h-100" src="/img/project-3.jpg"
                                                    style={{ objectFit: "cover" }} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h1 className="mb-3">25 Years Of Experience In Architecture Industry</h1>
                                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Design Approach</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Innovative Solutions</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Project Management</p>
                                            <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-4">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{ minHeight: "350px" }}>
                                            <div className="position-relative h-100">
                                                <img className="position-absolute img-fluid w-100 h-100" src="/img/project-4.jpg"
                                                    style={{ objectFit: "cover" }} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h1 className="mb-3">25 Years Of Experience In Architecture Industry</h1>
                                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Design Approach</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Innovative Solutions</p>
                                            <p><i className="fa fa-check text-primary me-3"></i>Project Management</p>
                                            <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Project End --> */}


            {/* <!-- Team Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h4 className="section-title">Team Members</h4>
                        <h1 className="display-5 mb-4">We Are Creative Architecture Team For Your Dream Home</h1>
                    </div>
                    <div className="row g-0 team-items">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item position-relative">
                                <div className="position-relative">
                                    <img className="img-fluid" src="/img/team-1.jpg" alt="" />
                                    <div className="team-social text-center">
                                        <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h3 className="mt-2">Architect Name</h3>
                                    <span className="text-primary">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item position-relative">
                                <div className="position-relative">
                                    <img className="img-fluid" src="/img/team-2.jpg" alt="" />
                                    <div className="team-social text-center">
                                        <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h3 className="mt-2">Architect Name</h3>
                                    <span className="text-primary">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item position-relative">
                                <div className="position-relative">
                                    <img className="img-fluid" src="/img/team-3.jpg" alt="" />
                                    <div className="team-social text-center">
                                        <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h3 className="mt-2">Architect Name</h3>
                                    <span className="text-primary">Designation</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item position-relative">
                                <div className="position-relative">
                                    <img className="img-fluid" src="/img/team-4.jpg" alt="" />
                                    <div className="team-social text-center">
                                        <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h3 className="mt-2">Architect Name</h3>
                                    <span className="text-primary">Designation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Team End --> */}


            {/* <!-- Appointment Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h4 className="section-title">Appointment</h4>
                            <h1 className="display-5 mb-4">Make An Appointment To Start Your Dream Project</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-light" style={{ width: "65px", height: "65px" }}>
                                            <i className="fa fa-2x fa-phone-alt text-primary"></i>
                                        </div>
                                        <div className="ms-4">
                                            <p className="mb-2">Call Us Now</p>
                                            <h3 className="mb-0">+012 345 6789</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-light" style={{ width: "65px", height: "65px" }}>
                                            <i className="fa fa-2x fa-envelope-open text-primary"></i>
                                        </div>
                                        <div className="ms-4">
                                            <p className="mb-2">Mail Us Now</p>
                                            <h3 className="mb-0">info@example.com</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control" placeholder="Your Name" style={{ height: "55px" }} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control" placeholder="Your Email" style={{ height: "55px" }} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control" placeholder="Your Mobile" style={{ height: "55px" }} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <select className="form-select" style={{ height: "55px" }}>
                                        <option selected>Choose Service</option>
                                        <option value="1">Service 1</option>
                                        <option value="2">Service 2</option>
                                        <option value="3">Service 3</option>
                                    </select>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="date" id="date" data-target-input="nearest">
                                        <input type="text"
                                            className="form-control datetimepicker-input"
                                            placeholder="Choose Date" data-target="#date" data-toggle="datetimepicker" style={{ height: "55px" }} />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="time" id="time" data-target-input="nearest">
                                        <input type="text"
                                            className="form-control datetimepicker-input"
                                            placeholder="Choose Date" data-target="#time" data-toggle="datetimepicker" style={{ height: "55px" }} />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Book Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Appointment End --> */}
            <SimpleSlider />
        </>
    )
}

export default Home
