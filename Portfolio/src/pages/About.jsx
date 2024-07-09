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
  return (<div className='h-screen w-screen p-10 pt-20'>
    <div className='flex justify-between pr-40 '>
      <div className='flex flex-col gap-6'>
        <span>Welcome to my portfolio</span>
        <span className='text-3xl font-bold text-green-500'> HELLO I AM MOHAMMAD <br />SHARUF ALI</span>
        <span>MERN Stack Developer, Blockchain Enthusiast</span>
        <span className='border w-40 items-center pl-7 p-2 rounded border-green-500'><NavLink to='/Contact'>CONTACT ME</NavLink></span>
      </div >
      <div className=' border-green-500 flex justify-center items-center
       bg-sky-500 shadow-lg
        shadow-cyan-700 '>
        <img className=" w-[300px] h-[300px] rounded-full bg-black" src="./IMG_20240412_064140.jpg" alt="hi..." />
      </div>
    </div>
    <div className='flex flex-col pb-5'>
      <b
        className='text-2xl'
      >About Me</b>
      <span
        className='text-xl'
      >Personal Information
      </span>
    </div>
    <div
      className='grid grid-cols-3 gap-20 '
    >
      <div className='grid grid-cols-3 gap-4 justify-items-start  '>
        <span
        >First name
        </span>
        <span
        >:
        </span>
        <span
        >Mohammad Sharuf
        </span>
        <span
        >Age
        </span>
        <span
        >:
        </span>
        <span
        >24
        </span>
        <span
        >Freelance
        </span>
        <span
        >:
        </span>
        <span
        >Available
        </span>
        <span
        >Phone
        </span>
        <span
        >:
        </span>
        <span
        >+91 **********
        </span>
      </div>

      <div className='grid grid-cols-3 gap-4 '>
        <span
        >Last name
        </span>
        <span
        >:
        </span>
        <span
        >Ali
        </span>
        <span
        >Nationality
        </span>
        <span
        >:
        </span>
        <span
        >Indian
        </span>
        <span
        >Address
        </span>
        <span
        >:
        </span>
        <span
        >padrouna,Kushinagar,UP
        </span>
        <span
        >Email
        </span>
        <span
        >:
        </span>
        <span
        >md.sharufali987@gmail.com
        </span>
      </div>

      <div className='flex flex-col gap-6'>
        <p>Dive into my portfolio and explore me</p>
        <div className=' p-2  border-green-500 border rounded-lg flex justify-evenly w-48 items-center'>
          <button onClick={(e)=>{downloadPdf()}}>DOWNLOAD CV</button>
          <MdDownloadForOffline className='text-xl text-green-500' />
        </div>
      </div>

    </div>
  </div>

  )
}

export default About
