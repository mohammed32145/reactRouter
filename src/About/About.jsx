import React from 'react'
import './About.css'
import '../Portfolio/Portfolio.css'


export default function About() {
  return (
    <>
      <div className="section-contact">
        <p className='fs-5 text-center text-black m-0 p-3 text-uppercase fs-2 fw-bolder title-About text-white'>about component</p>
        <div className=" fs-2 fw-bolder text-center text-white p-2 star-About d-flex align-items-center justify-content-center">
        <div className='line-one'></div>
         <i className="fas fa-star text-white "></i>
         <div className='line-two'></div>
</div>


        <div className="container">
          <div className="row d-flex align-items-center justify-content-center p-5">
            <div className="col-md-5 text-white">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
            <div className="col-md-5 text-white">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>

          </div>
        </div>
      </div>
    </>

  )
}
