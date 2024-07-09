import React, { useEffect, useRef, useState } from 'react'
import { GoMail } from 'react-icons/go'
import { FaGithubSquare } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import { AiFillTwitterSquare } from 'react-icons/ai'

import axios from 'axios'

const Contact = () => {

  const [contact, setContact] = useState({
    name: '',
    email: '',
    massage: ''
  })

  const name=useRef('');
  const email=useRef('')
  const massage=useRef('');

  const inputEvent = (e) => {

    const name = e.target.name;
    const value = e.target.value;
  setContact((prev)=>{
       
    return{...prev,[name]:value}
  })}


 function setDetails(e){
  e.preventDefault();
  axios.post("http://localhost:8000/contact", {
    name:contact.name,
    email:contact.email,
    massage:contact.massage
  }).then((req,res)=>{
   name.current.value=''
   email.current.value=''
   massage.current.value=''
   window.alert(req.data)
  }).catch((err)=>{
    console.log("axios"+err)
  })
}

  return (
  <div
    className='bg-slate-900 p-10 pt-20 border-t border-green-500  '>
    <b className='text-2xl'>Contact</b>
    <div className='flex gap-20 h-[500px] justify-center items-center'>
      <form onSubmit={setDetails} className='flex flex-col gap-2 justify-stretch '>

        <input
          type="text"
          name="name"
          ref={name}
          onChange={inputEvent}
          id=""
          placeholder='Name:'
          className='outline-none bg-slate-900 border  border-green-500 p-1' />
        <input
          ref={email}
          name='email'
          type="email"
          onChange={inputEvent}
          placeholder='Email:'
          className='outline-none bg-slate-900 border  border-green-500 p-1' />
        <textarea
          name="massage"
          ref={massage}
          onChange={inputEvent}
          id=""
          cols="30"
          rows="5"
          placeholder='Massages:'
          className='outline-none 
          bg-slate-900 border  border-green-500 p-1'></textarea>
        <button type="submit"
          className='border border-blue-600 p-1 rounded w-32 text-white'
        >Send</button>
      </form>

      <div className='flex flex-col gap-6'>
        <p className='text-2xl'>DON'T BE SHY</p>
        <p>Feel free to reach out if you have any questions,<br />
          collaborations opportunities or just want to connect.<br /> I'm always open to new projects and discussion</p>
        <div className='flex gap-4  items-center'>
          <GoMail className='text-6xl text-green-400' />
          <span>Mail me <br />md.sharufali987@gmail.com</span>
        </div>

        <div className='flex gap-4 text-6xl text-green-500'>
          <FaGithubSquare />
          <AiFillLinkedin />
          <FaInstagramSquare />
          <AiFillTwitterSquare />
        </div>
      </div>
    </div>
    <hr className='border-green-500 ' />
    <p className='text-center'>Portfolio made in 2024</p>
  </div>
  )
}

export default Contact