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

    return (
        <div className='flex flex-col h-[100%] w-[100%] text-sm text-white absolute bg-slate-900'>
            <NavBar/>
            <div className="z-0 h-[90%] relative mt-[16%] sm:mt-[4.5%]">
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
