import React from 'react'

const Education = () => {
  return (
    <div className='p-10 pt-20 h-screen border-t border-green-500 w-screen bg-slate-900 '>
      <h1
        className='text-2xl font-bold  '
      >Education</h1>
      <div
        className='flex justify-center items-center '
      >
          <span className='text-2xl'>Currently Enrolled in B.tech Course</span>
        <div className=' w-20 pt-10 pb-10 flex flex-col justify-center items-center'>
          <span className='relative bg-green-500 w-4 h-4 p-1 rounded-full text-green-500'></span>
          <span className='relative bottom-1 bg-green-500 h-32 p-1  text-green-500'></span>
          <span className='relative bottom-2 bg-green-500 w-4 h-4 p-1 rounded-full text-green-500'></span>
          <span className='relative bottom-3 bg-green-500  h-48 p-1  text-green-500'></span>
          <span className='relative bottom-4 bg-green-500 w-4 h-4 p-1 rounded-full text-green-500'></span>
          <span className='relative bottom-5 bg-green-500  h-32 p-1  text-green-500'></span>

        </div>
       

        <div className='flex  flex-col gap-4'>
          <ul className='flex flex-col gap-1'>
            <li>2021-2025</li>
            <li className='flex justify-between items-center'>
              <span className='text-2xl'>Engineering  -</span>
              <span>RD Engineering College</span>
            </li>
            <li>B.Tech CS(AI&ML)</li>
            <li>3rd year,VI semester</li>
            <li>Ghaziabad,U.P</li>
          </ul>


          <ul className='flex flex-col gap-1'>
            <li>2020-2021</li>
            <li className='flex justify-between items-center'>
              <span className='text-2xl'>12th Class  -</span>
              <span>S.B.D SR SEC SCHOOL</span>
            </li>
            <li>Physics,Chemistry,Maths (PCM)</li>
            <li>76% in Board (CBSE)</li>
            <li>
              Padrauna,kushinagar,U.P</li>
          </ul>

          <ul className='flex flex-col gap-1'>
            <li>2018-2019</li>
            <li className='flex justify-between items-center'>
              <span className='text-2xl'>10th Class  -</span>
              <span>S.B.D SR SEC SCHOOl</span>
            </li>
            <li>Science ,Maths,Social Science ,English , Hindi,Info Technology</li>
            <li>72% in  Board (CBSE)</li>
            <li>Padrouna,kushinagar,U.P</li>
          </ul>
        </div>

      </div>



    </div>

  )
}

export default Education