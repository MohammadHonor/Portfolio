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

  const technology = [
    { icon: <GrReactjs className=' animate-trans-top text-8xl' />, name: "React" },
    { icon: <SiExpress className=' text-yellow-400 animate-trans-top text-8xl' />, name: "Express" },
    { icon: <BiLogoMongodb  className=' animate-trans-top  text-8xl'/>, name: "Mongodb" },
    { icon: <TbBrandJavascript  className=' text-green-600 animate-trans-top text-8xl'/>, name: "JavaScript" },
    { icon: <IoLogoHtml5 className=' text-red-700 animate-trans-top text-8xl'/>, name: "Html" },
    { icon: <SiTailwindcss  className=' text-blue-500 animate-trans-top text-8xl'/>, name: "Tailwind" },
    { icon:<IoLogoCss3  className=' animate-trans-top text-8xl'/>, name: "Css" },
    { icon: <FaJava  className=' animate-trans-top text-orange-300 text-8xl'/>, name: "Java" },
    { icon: <FaPython  className=' animate-trans-to text-pink-600 text-8xl'/>, name: "Python" },
    { icon: <FaGithub className=' animate-trans-top text-white text-8xl' />, name: "Github" },
    { icon:  <FaSquareGit  className=' animate-trans-top text-green-600 text-8xl'/>, name: "git" },
  ]
  return (
    <div className=' bg-slate-900 flex flex-col  p-3 '>
      <b className='text-xl sm:text-3xl'>Skills</b>
      <div className='grid grid-cols-1 sm:grid-cols-6 gap-4 sm:gap-4 overflow-x-hidden mt-10 p-3 '>
        {
          technology.map((tech,idx) => {
            return (
              <div className=' flex flex-col justify-center items-center shrink-0 border border-blue-900 rounded shadow-md shadow-white' key={idx}>
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            
            )
          })
        }
      {/* <div className='flex flex-col justify-center items-center '>
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
      <span>Java</span>
      </div>
            <FaJava  className='text-3xl animate-trans-top text-orange-300 sm:text-8xl'/>

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
       */}
    </div>
    </div>
  )
}

export default Skill