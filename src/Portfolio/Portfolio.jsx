import React from 'react'
import './Portfolio.css';
import img_1 from '../assets/P1.png'
import img_2 from '../assets/P2.png'
import img_3 from '../assets/P3.png'




export default function Portfolio() {
  return (
    <div className='section-Portfolio-top'>
      <p className='fs-5 text-center text-black m-0 p-3 text-uppercase fs-2 fw-bolder title-portfolio '>portfolio component</p>
      <div className=" fs-2 fw-bolder text-center text-white p-2 star-About d-flex align-items-center justify-content-center">
        <div className='line-one-Protfolio'></div>
         <i className="fas fa-star text-white star-Protfolio"></i>
         <div className='line-two-Protfolio'></div>
        </div>
      <div className="container">
        <div className="row text-center my-3">
          <div className="col-md-4 item my-3">
            <div className='background-green d-flex align-items-center justify-content-center'>
              <i className=" icon fas fa-plus"></i>
              <img className="w-100 d-block rounded-2 item-image" src={img_1} alt="boy image" />
            </div>
          </div>
          <div className="col-md-4 item my-3">
            <div className='background-green d-flex align-items-center justify-content-center'>
              <i className=" icon fas fa-plus"></i>
              <img className="w-100 d-block rounded-2 item-image" src={img_2} alt="boy image" />
            </div>
          </div>
          <div className="col-md-4 item my-3">
            <div className='background-green d-flex align-items-center justify-content-center'>
              <i className=" icon fas fa-plus"></i>
              <img className="w-100 d-block rounded-2 item-image" src={img_3} alt="boy image" />
            </div>
          </div>
          <div className="col-md-4 item my-3">
            <div className='background-green d-flex align-items-center justify-content-center'>
              <i className=" icon fas fa-plus"></i>
              <img className="w-100 d-block rounded-2 item-image" src={img_1} alt="boy image" />
            </div>
          </div>
          <div className="col-md-4 item my-3">
            <div className='background-green d-flex align-items-center justify-content-center'>
              <i className=" icon fas fa-plus"></i>
              <img className="w-100 d-block rounded-2 item-image" src={img_2} alt="boy image" />
            </div>
          </div>
          <div className="col-md-4 item my-3">
            <div className='background-green d-flex align-items-center justify-content-center'>
              <i className=" icon fas fa-plus"></i>
              <img className="w-100 d-block rounded-2 item-image" src={img_3} alt="boy image" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
