import React from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import FileDownload from "js-file-download"

import { MdDownloadForOffline } from "react-icons/md";

const About = () => {

  function downloadPdf(){
    
    axios({
      method:'get',
      url:'https://portfolio-ebhc.onrender.com',
      responseType:"blob"
    }).then((res)=>FileDownload(res.data,"resume.pdf"))
  }
  return (<div className='h-[55%] sm:h-[70%] bg-slate-900 p-3'>
    <div className='flex justify-between gap-1  '>
      <div className='flex flex-col gap-6'>
        <span>Welcome to my portfolio</span>
        <span className='text-lg font-bold text-white sm:text-3xl'> HELLO <br />I AM <br />MOHAMMAD SHARUF ALI</span>
        <span>Computer Science Engineer</span>
        <span className='border w-40 items-center pl-7 p-2 rounded border-blue-900'><NavLink to='/Contact'>CONTACT ME</NavLink></span>
      </div>
        <img className="sm:h-[24rem] h-[16rem] w-[16rem] mr-[12rem] rounded-sm shadow-md shadow-white"
        src="./p.jpg" alt="hi..." />
    </div>
    {/* <div className='flex flex-col pb-5'>
      <b className='text-md sm:text-2xl'>About Me</b>
      <span className='text-sm' >Personal Information</span>
    </div> */}
    <div className='flex justify-start sm:justify-end relative'>
      {/* <div className='grid grid-cols-3 gap-2  justify-items-start  '>
              <span>First name</span>
              <span>:</span>
              <span>Mohammad Sharuf</span>
              <span>Age</span>
              <span>:</span>
              <span>23</span>
              <span>Freelance</span>
              <span>:</span>
              <span>Available</span>
              <span>Phone</span>
              <span>:</span>
              <span>+91 **********</span>
      </div> */}

      {/* <div className='grid grid-cols-3 gap-4 '>
        <span>Last name</span>
        <span>:</span>
        <span>Ali</span>
        <span>Nationality</span>
        <span>:</span>
        <span>Indian</span>
        <span>Address</span>
        <span>:</span>
        <span>padrouna,Kushinagar,UP</span>
        <span>Email</span>
        <span>:</span>
        <span>md.sharufali987@gmail.com</span>
    </div> */}

      <div className='flex flex-col gap-6 relative sm:right-48'>
        <p>Dive into my portfolio and explore me</p>
        <div className=' p-2  border-blue-900 border rounded-lg flex justify-evenly w-48 items-center'>
          <button onClick={(e)=>{downloadPdf()}}>DOWNLOAD CV</button>
          <MdDownloadForOffline className='text-xl text-green-500' />
        </div>
      </div>
    </div>
  </div>

  )
}

export default About
