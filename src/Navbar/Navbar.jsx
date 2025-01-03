import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState('Home'); 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); 

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);  


  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsNavExpanded(false);

  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed ">
        <div className="container">
          <div className={`container-fluid ${windowWidth > 991 ? 'd-flex align-items-center justify-content-center ' : 'p-3'}`}>
            <Link 
             onClick={() => handleLinkClick('Home')}
            className="navbar-brand text-uppercase fw-bolder text-white" to="/Home">start framework</Link>
            <button
              className="navbar-toggler my-1"
              type="button"
              onClick={toggleNav}
              aria-controls="navbarSupportedContent"
              aria-expanded={isNavExpanded ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isNavExpanded ? "show" : ""}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 my-3 m-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link p-3 my-1 text-uppercase fw-bolder text-white ${activeLink === 'About' ? 'active' : ''}`}
                    aria-current="page"
                    to="/About"
                    onClick={() => handleLinkClick('About')}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link p-3 my-1 text-uppercase fw-bolder text-white ${activeLink === 'Portfolio' ? 'active' : ''}`}
                    to="/portfolio"
                    onClick={() => handleLinkClick('Portfolio')}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link p-3 my-1 text-uppercase fw-bolder text-white ${activeLink === 'Contact' ? 'active' : ''}`}
                    to="/contact"
                    onClick={() => handleLinkClick('Contact')}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
