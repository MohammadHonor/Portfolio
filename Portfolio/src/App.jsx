import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import About from './pages/About'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Skill from './pages/Skill'



function App() {
  const [count, setCount] = useState(0)

  return (<div className='bg-slate-900 w-screen h-screen text-white '>
     <NavBar/>
     <div className="mt-10">
   <Routes >
  
    <Route path='/' element={<Home/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Education' element={<Education/>} />
    <Route path='/Skill' element={<Skill/>} />
    <Route path='/Projects' element={<Projects/>} />
    <Route path='/Contact' element={<Contact/>} />
   </Routes>
   </div>
  
   </div>
  )
}

export default App
