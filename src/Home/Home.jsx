import React from 'react';
import boyImg from '../assets/boy.svg';
import './Home.css';

export default function Home() {
  return (
    <>
      <div className='section-home'>
        <div className="d-flex justify-content-center align-items-center">
          <img className="w-25" src={boyImg} alt="boy image" />
        </div>
        <p className='text-uppercase fs-2 fw-bolder text-center text-white p-2'>
          start Framework
        </p>
        <div className=" fs-2 fw-bolder text-center text-white p-2 star-About d-flex align-items-center justify-content-center">
        <div className='line-one-Home'></div>
         <i className="fas fa-star text-white star-Home"></i>
         <div className='line-two-Home'></div>
        </div> 
       <p className='fs-5 text-center text-white m-0 p-3'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}
