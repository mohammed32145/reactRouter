import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer-container ">
      <section className='p-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center my-3">
              <h5>LOCATION</h5>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            <div className="col-md-4 text-center my-3">
              <h5 className='fs-4'>AROUND THE WEB</h5>
              <ul className="text-center social-icons d-flex align-items-center list-unstyled justify-content-center">
                <li className='circle'>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="m-2 fs-4 fab fa-facebook"></i>
                  </a>
                </li>
                <li className='circle'>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="m-2 fs-4 fab fa-twitter"></i>
                  </a>
                </li>
                <li className='circle'>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="m-2 fs-4 fab fa-linkedin"></i>
                  </a>
                </li>
                <li className='circle'>
                  <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                    <i className="m-2 fs-4 fas fa-globe"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 text-center my-3">
              <h5 className='text-center'>ABOUT FREELANCER </h5>
              <p className='text-center'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </section>
      <div className='section-down'>
        <p className='text-center p-3'>Copyright © Your Website 2021</p>
      </div>
    </div>
  );
}
