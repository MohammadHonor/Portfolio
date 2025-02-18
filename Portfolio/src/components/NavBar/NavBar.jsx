import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className={`flex justify-between items-center h-[6%] sm:h-[10%] bg-slate-900 w-[100%] fixed p-4 z-50 border-b-2`}>
            <div className="flex gap-6 place-items-center">
                {/* <img src="../public/p.jpg" className=' rounded-full w-12 h-12 ' alt="coming..." /> */}
                <h1>Mohammad Sharuf Ali</h1>
            </div>
            <div className='sm:flex hidden'>
                <ul className={`flex gap-3`} >
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/Education" >Education</NavLink></li>
                <li><NavLink to="/Skill" >Skill</NavLink></li>
                <li><NavLink to="/Projects" >Projects</NavLink></li>
                <li><NavLink to="/Contact" >Contact </NavLink></li>

            </ul>
            </div>
        </nav>
    )
}

export default NavBar