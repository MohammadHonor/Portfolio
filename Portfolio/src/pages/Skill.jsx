import React from 'react'
import { GrReactjs } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandJavascript} from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareGit } from "react-icons/fa6";


function Skill() {
  return (
    <div className=' bg-slate-900 flex flex-col  p-3 h-[100%] '>
      <b className='text-xl sm:text-3xl'>Skills</b>
    <div className='gap-10 grid grid-cols-2 md:max-h-screen  md:max-[320px] md:grid-cols-3'>
       <div className=' flex flex-col justify-center items-center'>
      <GrReactjs className='text-3xl animate-trans-top sm:text-8xl'/>
      <span>React</span>
      </div>

      <div className='flex flex-col justify-center items-center '>
      <SiExpress  className='text-3xl text-yellow-400 animate-trans-top sm:text-8xl'/>   
       <span>Express</span>
      </div>

      <div className='flex flex-col justify-center items-center'>
      <BiLogoMongodb  className='text-3xl animate-trans-top  sm:text-8xl'/>     
       <span>Mongodb</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <TbBrandJavascript  className='text-3xl text-green-600 animate-trans-top sm:text-8xl'/>
      <span>JavaScript</span>
      </div>

      <div className='flex flex-col justify-center items-center'>
      <IoLogoHtml5 className='text-3xl text-red-700 animate-trans-top sm:text-8xl'/>   
         <span>Html</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <SiTailwindcss  className='text-3xl text-blue-500 animate-trans-top sm:text-8xl'/>
      <span>Tailwind</span>
      </div>

      <div className='flex flex-col justify-center items-center'>
      <IoLogoCss3  className='text-3xl animate-trans-top sm:text-8xl'/>
      <span>CSS</span>
      </div>

      <div className='flex flex-col justify-center items-center'>
      <FaJava  className='text-3xl animate-trans-top text-orange-300 sm:text-8xl'/>
      <span>Java</span>
      </div>
      
        <div className='flex flex-col justify-center items-center'>
      <FaPython  className='text-3xl animate-trans-top text-orange-300 sm:text-8xl'/>
      <span>Python</span>
      </div>
        <div className='flex flex-col justify-center items-center'>
      <FaGithub  className='text-3xl animate-trans-top text-white sm:text-8xl'/>
      <span>Github</span>
      </div>
        <div className='flex flex-col justify-center items-center'>
      <FaSquareGit  className='text-3xl animate-trans-top text-white sm:text-8xl'/>
      <span>Git</span>
      </div>
      
    </div>
    </div>
  )
}

export default Skill