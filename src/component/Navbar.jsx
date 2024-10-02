import React, { useState } from 'react';
import { MdLanguage } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";



function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
     const navItems = [
        {link:"Overview", path:"home" },
        {link:"Feature", path:"feature" },
        {link:"About", path:"about" },
        {link:"Pricing", path:"pricing" }
     ]
    return (
        <>
        <nav className='bg-white md:px-14 p-4 max-w-screen-2xl text-primary fixed top-0 right-0 left-0 '>
            <div className='text-lg container mx-auto flex justify-between items-center font font-medium'>
                <div className='flex space-x-14 items-center'> 
                    <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                       <span>XYZ</span>
                    </a>

                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({link,path})=> <a className='block hover:text-gray-300' key={link} href=' {path} '> {link} </a>)
                        }
                    </ul>
                </div>

                <div className='space-x-12 hidden md:flex items-center'>
                    <a href="/" className='flex items-center justify-center'><MdLanguage className='hidden lg:flex items-center hover:text-secondary' /><span>Language</span></a>
                    <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded
                    hover:text-white hover:bg-indigo-600' >Sign up</button>
                </div>

                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                        {
                            isMenuOpen ? (<IoClose className='w-6 h-6 text-primary' />) : (<FiMenu className='w-6 h-6 text-primary' />) 
                        }
                    </button>
                </div>
            </div>
        </nav>

        <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden" } `}>
            {
                navItems.map(({link,path}) => <a key={link} href={path} className='block hover:text-gray-300'> {link} </a>)
            }
        </div>

        </>
    );
}

export default Navbar;