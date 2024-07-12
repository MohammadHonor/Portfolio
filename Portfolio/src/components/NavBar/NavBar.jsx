import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav
            className={`z-50 p-10 font-roboto fixed top-0 flex justify-between items-center bg-gray-900 text-white  h-20  w-screen border-b border-sky-400 `}>
            <div
                className="flex gap-6 place-items-center">
                <img
                    src="./IMG_20240412_064140.jpg"
                    className=' rounded-full w-12 h-12' alt="coming..." />
                <h1
                >Mohammad Sharuf Ali</h1>

            </div>
            <ul
                className={`hidden lg:flex gap-6 items-center  `} >
                <li>
                    <NavLink
                        to="/" >Home</NavLink>
                </li>
                {/* <li>
                    <NavLink
                        to="/About" >About</NavLink>
                </li> */}
                <li>
                    <NavLink
                        to="/Education" >Education</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Skill" >Skill</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Projects" >Projects</NavLink>
                </li>
                <li>

                    <NavLink to="/Contact" >Contact </NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default NavBar