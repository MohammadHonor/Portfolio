import React from 'react'
import { GrReactjs } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandJavascript} from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJava } from "react-icons/fa";



function Skill() {
  return (
    <div className='border-t h-auto border-green-500 p-10 pt-20 bg-slate-900 flex flex-col  gap-10 w-screen '>
      <b className='text-2xl'>Skills</b>
    <div className='gap-10 grid grid-cols-2 h-screen md:max-h-screen  md:max-[320px] md:grid-cols-3'>
       <div className=' flex flex-col justify-center items-center'>
      <GrReactjs className='text-8xl animate-trans-top'/>
      <span>React</span>
      </div>

      <div className='flex flex-col justify-center items-center '>
      <SiExpress  className='text-8xl text-yellow-400 animate-trans-top'/>   
       <span>Express</span>
      </div>

      <div className='flex flex-col justify-center items-center'>
      <BiLogoMongodb  className='text-8xl animate-trans-top '/>     
       <span>Mongodb</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <TbBrandJavascript  className='text-8xl text-green-600 animate-trans-top'/>
      <span>JavaScript</span>
      </div>

      <div className='flex flex-col justify-center items-center'>
      <IoLogoHtml5 className='text-8xl text-red-700 animate-trans-top'/>   
         <span>Html</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <SiTailwindcss  className='text-8xl text-blue-500 animate-trans-top'/>
      <span>Tailwind</span>
      </div>

      <div className='flex flex-col justify-center items-center'>
      <IoLogoCss3  className='text-8xl animate-trans-top'/>
      <span>CSS</span>
      </div>

      <div className='flex flex-col justify-center items-center'>
      <FaJava  className='text-8xl animate-trans-top text-orange-300'/>
      <span>Java</span>
      </div>

      
    </div>
    </div>
  )
}

export default Skill