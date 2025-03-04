import React from 'react'

const Education = () => {
  return (
    <div className=' flex flex-col gap-2 bg-slate-900  p-3 sm:text-sm mt-10 sm:mt-0 '>
      <h1 className='text-md font-bold sm:text-2xl'>Education</h1> 
      <div className='flex flex-col md:flex md:flex-row justify-center items-center gap-2 '>
        <span className='text-md sm:text-2xl'>Currently Enrolled in B.tech Course</span>
        <div className='flex'>
        <div className=' w-20  pt-0 pb-10 flex flex-col justify-center items-center'>
          <span className='relative bg-blue-900 w-2 h-2 p-1 rounded-full text-green-500'></span>
          <span className='relative bottom-1 bg-blue-900 h-32 sm:h-48 p-[2px]  text-green-500'></span>
          <span className='relative bottom-2 bg-blue-900 w-2 h-2 p-[2px] rounded-full text-green-500'></span>
          <span className='relative bottom-3 bg-blue-900 h-48 sm:h-36 p-[2px]  text-green-500'></span>
          <span className='relative bottom-4 bg-blue-900 w-2 h-2 p-[2px] rounded-full text-green-500'></span>
          <span className='relative bottom-5 bg-blue-900  h-48 sm:h-48 p-[2px]  text-green-500'></span>
        </div>
        <div className='flex  flex-col gap-8 sm:text-sm'>
          <ul className='flex flex-col gap-1 '>
            <li>2021-2025</li>
            <li className=' flex justify-between items-center'>
              <span className='text-sm sm:text-2xl'>Engineering  -</span>
              <span className='sm:text-sm text-[8px] '>RD ENGINEERING COLLEGE</span>
            </li>
            <li className='sm:sm'>B.Tech CS(AI&ML)</li>
            <li className='sm:sm'>4th year,VIII semester</li>
            <li className='sm:sm'>Ghaziabad,U.P</li>
          </ul>


          <ul className='flex flex-col gap-1'>
            <li>2020-2021</li>
            <li className='flex justify-between items-center'>
              <span className='text-sm sm:text-2xl'>12th Class  -</span>
              <span className='sm:text-sm text-[8px] '>S.B.D SR SEC SCHOOL</span>
            </li>
            <li className='sm:text-sm'>Physics,Chemistry,Maths (PCM)</li>
            <li className='sm:text-sm'>76% in Board (CBSE)</li>
            <li className='sm:text-sm'>
              Padrauna,kushinagar,U.P</li>
          </ul>

          <ul className='flex flex-col gap-1'>
            <li className='sm:text-sm'>2018-2019</li>
            <li className='flex justify-between items-center'>
              <span className='text-sm sm:text-2xl'>10th Class  -</span>
              <span className='sm:text-sm text-[8px]'>S.B.D SR SEC SCHOOl</span>
            </li>
            <li className='sm:text-sm'>Science ,Maths,Social Science ,English , Hindi,Info Technology</li>
            <li className='sm:text-sm'>72% in  Board (CBSE)</li>
            <li className='sm:text-sm'>Padrouna,kushinagar,U.P</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Education