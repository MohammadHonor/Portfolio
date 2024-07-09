import React from 'react'

function Skill() {
  return (
    <div className='border-t border-green-500 p-10 pt-20 bg-slate-900 flex flex-col h-screen gap-10'>
      <b className='text-2xl'>Skills</b>
    <div className='gap-10 grid grid-cols-4 h-screen '>
       <div className=' flex flex-col justify-center items-center'>
      <p className='w-28 h-28 border-b-8 border-r-8 rounded-full border-blue-600  text-center p-10'>70%</p>
      <span>React</span>
      </div>

      <div className='flex flex-col justify-center items-center'>
      <p className='w-28 h-28 border-r-8 rounded-full border-blue-600 text-center p-10'>40%</p>
      <span>Express</span>
      </div>

      <div className='flex flex-col justify-center items-center'>
      <p className='w-28 h-28 border-r-8 rounded-full border-blue-600  text-center p-10'>30%</p>
      <span>Mongodb</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <p className='w-28 h-28 border-l-8 border-b-8 rounded-full border-blue-600  text-center p-10'>75%</p>
      <span>JavaScript</span>
      </div>

      <div className='flex flex-col justify-center items-center'>
      <p className='w-28 h-28 border-r-8 rounded-full border-blue-600  text-center p-10'>30%</p>
      <span>Html</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <p className='w-28 h-28 border-8 rounded-full border-blue-600  text-center p-10'>45%</p>
      <span>Tailwind</span>
      </div>

      <div className='flex flex-col justify-center items-center'>
      <p className='w-28 h-28 border-8 rounded-full border-blue-600  text-center p-10'>45%</p>
      <span>CSS</span>
      </div>

      <div className='flex flex-col justify-center items-center'>
      <p className='w-28 h-28 border-8 rounded-full border-blue-600  text-center p-10'>45%</p>
      <span>Java</span>
      </div>

      
    </div>
    </div>
  )
}

export default Skill