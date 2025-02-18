import React from 'react'

import About from '../../pages/About'
import Contact from '../../pages/Contact'
import Education from '../../pages/Education'
import Projects from '../../pages/Projects'
import Skill from '../../pages/Skill'
import NavBar from '../NavBar/NavBar'

const Home = () => {
    return (<div className='h-[100%]'>
        <About />
         <Education/>
        <Skill />
        <Projects />
        <Contact />
    </div>
    )
}

export default Home