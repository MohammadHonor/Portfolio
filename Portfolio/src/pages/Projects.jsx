import React from 'react'

const Projects = () => {
  return (
    <div className='  bg-slate-900 p-10 pt-20 border-t w-screen h-screen border-green-500  '>
      <b className='text-2xl'>Project</b>

      <div className='grid gap-12 grid-cols-2 items-center justify-items-center '>
        <div className=' gap-2'>
          <img src="./src/assets/porfolio.webp"
          className='h-48 w-48'
          alt="" />
          <p>Portfolio</p>
        </div>
        <div className='flex flex-col  gap-2'>
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