import React,{useState} from 'react'
import axios from "axios"
const Contact = () => {
    const [formdata,setFormdata]=useState({
        username:"",
        email:"",
        phone:"",
        subject:"",
        message:"",
    })
// ................................
const OnchangeData=(e)=>{
    setFormdata({
        ...formdata,
        [e.target.name]: e.target.value
    })
}
// ...................................

const Onhandleform=(e)=>{
    e.preventDefault();

    axios({
        method:"post",
        url:"http://localhost:3001/contactdata",
        data:formdata
    }).then((res)=>{
        alert(res.data)
    })
}
  return (
   <>
    {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <h1 className="display-1 text-white animated slideInDown">Contact Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb text-uppercase mb-0">
                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-primary active" aria-current="page">Contact Us</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Contact Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h4 className="section-title">Contact Us</h4>
                <h1 className="display-5 mb-4">If You Have Any Query, Please Feel Free Contact Us</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-flex flex-column justify-content-between h-100">
                        <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{width: "55px", height: "55px"}}>
                                <i className="fa fa-map-marker-alt text-primary"></i>
                            </div>
                            <div className="ms-4">
                                <p className="mb-2">Address</p>
                                <h3 className="mb-0">123 Street, New York, USA</h3>
                            </div>
                        </div>
                        <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{width: "55px", height: "55px"}}>
                                <i className="fa fa-phone-alt text-primary"></i>
                            </div>
                            <div className="ms-4">
                                <p className="mb-2">Call Us Now</p>
                                <h3 className="mb-0">+012 345 6789</h3>
                            </div>
                        </div>
                        <div className="bg-light d-flex align-items-center w-100 p-4">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" style={{width: "55px", height: "55px"}}>
                                <i className="fa fa-envelope-open text-primary"></i>
                            </div>
                            <div className="ms-4">
                                <p className="mb-2">Mail Us Now</p>
                                <h3 className="mb-0">info@example.com</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                    <form onSubmit={Onhandleform} method="post">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" 
                                    name="username"
                                    value={formdata.username}
                                    onChange={OnchangeData}/>
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                <input type="email" className="form-control" id="email" placeholder="Your Email" 
                                    name="email"
                                    value={formdata.email}
                                    onChange={OnchangeData}/>
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                <input type="text" className="form-control" id="phone" placeholder="Your Number" 
                                    name="phone"
                                    value={formdata.phone}
                                    onChange={OnchangeData}/>
                                    <label for="email">Your Number</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                <input type="text" className="form-control" id="subject" placeholder="subject" 
                                    name='subject'
                                    value={formdata.subject}
                                    onChange={OnchangeData}/>
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "200px;"}}
                                    name="message"
                                    value={formdata.message}
                                    onChange={OnchangeData}
                                    ></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact End --> */}


    {/* <!-- Google Map Start --> */}
    <div className="container-xxl pt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
        <iframe className="w-100 mb-n2" style={{height: "450px"}}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
            frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
    {/* <!-- Google Map End --> */}

   </>
  )
}

export default Contact
