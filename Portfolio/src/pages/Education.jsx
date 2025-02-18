import React from 'react'

const Education = () => {
  return (
    <div className='  bg-slate-900  p-3 sm:text-xl'>
      <h1 className='text-md font-bold sm:text-2xl '>Education</h1> 
      <div className='flex flex-col md:flex md:flex-row justify-center items-center '>
        <span className='text-md sm:text-2xl'>Currently Enrolled in B.tech Course</span>
        <div className='flex'>
        <div className=' w-20  pt-0 pb-10 flex flex-col justify-center items-center'>
          <span className='relative bg-green-500 w-4 h-4 p-1 rounded-full text-green-500'></span>
          <span className='relative bottom-1 bg-green-500 h-28 sm:h-48 p-1  text-green-500'></span>
          <span className='relative bottom-2 bg-green-500 w-4 h-4 p-1 rounded-full text-green-500'></span>
          <span className='relative bottom-3 bg-green-500 h-32 sm:h-36 p-1  text-green-500'></span>
          <span className='relative bottom-4 bg-green-500 w-4 h-4 p-1 rounded-full text-green-500'></span>
          <span className='relative bottom-5 bg-green-500  h-32 sm:h-48 p-1  text-green-500'></span>
        </div>
        <div className='flex  flex-col gap-2 '>
          <ul className='flex flex-col gap-1 '>
            <li>2021-2025</li>
            <li className=' flex justify-between items-center'>
              <span className='text-md sm:text-2xl'>Engineering  -</span>
              <span className='text-md sm:text-2xl'>RD ENGINEERING COLLEGE</span>
            </li>
            <li className='sm:xl'>B.Tech CS(AI&ML)</li>
            <li className='sm:xl'>4th year,VIII semester</li>
            <li className='sm:xl'>Ghaziabad,U.P</li>
          </ul>


          <ul className='flex flex-col gap-1'>
            <li>2020-2021</li>
            <li className='flex justify-between items-center'>
              <span className='text-md sm:text-2xl'>12th Class  -</span>
              <span className='sm:text-md'>S.B.D SR SEC SCHOOL</span>
            </li>
            <li className='sm:text-xl'>Physics,Chemistry,Maths (PCM)</li>
            <li className='sm:text-xl'>76% in Board (CBSE)</li>
            <li className='sm:text-xl'>
              Padrauna,kushinagar,U.P</li>
          </ul>

          <ul className='flex flex-col gap-1'>
            <li className='sm:xl'>2018-2019</li>
            <li className='flex justify-between items-center'>
              <span className='text-md sm:text-2xl'>10th Class  -</span>
              <span className='sm:xl'>S.B.D SR SEC SCHOOl</span>
            </li>
            <li className='sm:xl'>Science ,Maths,Social Science ,English , Hindi,Info Technology</li>
            <li className='sm:xl'>72% in  Board (CBSE)</li>
            <li className='sm:xl'>Padrouna,kushinagar,U.P</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Education