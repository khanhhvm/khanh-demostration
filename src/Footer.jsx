import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {

    return (
    <>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"> 
            <div className="col-md-4 d-flex align-items-center"> 
                <span className="mb-3 ms-5 mb-md-0 text-body-secondary">2025 &copy; Khanh Hoang</span> 
            </div> 
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex"> 
                <li className="ms-3">
                    <a className="text-body-secondary" href="mailto:khanhhvm@gmail.com" aria-label="Email">
                        <i className="bi bi-envelope h4"></i>
                    </a>
                </li> 
                <li className="ms-3">
                    <a className="text-body-secondary me-5" href="https://www.linkedin.com/in/khanh-hoang/" target="_blank" aria-label="LinkedIn">
                        <i className="bi bi-linkedin h4"></i>
                    </a>
                </li> 
            </ul> 
        </footer>
    </>
    );
};

export default Footer;