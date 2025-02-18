import React from 'react'

const Projects = () => {
  return (
    <div className=' h-[100%] bg-slate-900 p-3 '>
      <b className='text-2xl'>Project</b>

      <div className='flex flex-col gap-6 items-center justify-items-center sm:w-[360px] md:flex-row '>
        <div className=' gap-2'>
          <img src="./src/assets/porfolio.jpg"
          className='h-48 w-48'
          alt="" />
          <p>Portfolio</p>
        </div>
        <div className='gap-2'>
          <img src="./src/assets/voting-vector.jpg" 
          className='h-48 w-48'
          alt="" />
          <p>voting system</p>
        </div>

        <div className='flex flex-col gap-2'>
        
        </div>

        <div className='flex flex-col  '>
          
        </div>
      </div>
    </div>
    
  )
}

export default Projects