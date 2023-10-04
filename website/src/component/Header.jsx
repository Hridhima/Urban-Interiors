import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { AuthContext } from '../Context/AuthContext'
const Header = () => {
    const {Logout}=useContext(AuthContext)
  return (
    <>
         {/* <!-- Topbar Start --> */}
    <div className="container-fluid bg-dark p-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center py-3 me-3">
                    <a className="text-body px-2" href="tel:+0123456789"><i className="fa fa-phone-alt text-primary me-2"></i>+012 345 6789</a>
                    <a className="text-body px-2" href="mailto:info@example.com"><i className="fa fa-envelope-open text-primary me-2"></i>info@example.com</a>
                </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center py-3 me-2">
                    <a className="text-body px-2" href="">Terms</a>
                    <a className="text-body px-2" href="">Privacy</a>
                </div>
                <div className="h-100 d-inline-flex align-items-center">
                    <a className="btn btn-sm-square btn-outline-body me-1" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-sm-square btn-outline-body me-1" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-sm-square btn-outline-body me-1" href=""><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-sm-square btn-outline-body me-0" href=""><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End --> */}


    {/* <!-- Navbar Start --> */}
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <Link to="/" className="navbar-brand ms-4 ms-lg-0">
            <h1 className="text-primary m-0"><img className="me-3" src="/img/icons/icon-1.png" alt="Icon"/>Urban Interiors</h1>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/about/" className="nav-item nav-link">About</Link>
                <Link to="/services/" className="nav-item nav-link">Services</Link>
               
                {/* <Link to="/contact/" className="nav-item nav-link">Contact</Link> */}

                {sessionStorage.getItem("token") ?
                <>
                <Link to="/register/" className="nav-item nav-link">Myaccount</Link>
                <Link onClick={Logout} className="nav-item nav-link">Logout</Link>
                </>:
                <>
                <Link to="/register/" className="nav-item nav-link">Register</Link>
                <Link to="/login/" className="nav-item nav-link">Login</Link>
                </>}

            </div>
            <Link to="/contact/" className="btn btn-primary py-2 px-4 d-none d-lg-block">Appointment</Link>
        </div>
    </nav>
    {/* <!-- Navbar End --> */}
    </>
  )
}

export default Header
