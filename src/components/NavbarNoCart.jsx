import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import dataArray from '../data/items.json'
import { BsCart3 } from "react-icons/bs";

const NavbarNoCart = () => {
    const [nav, setNav] = useState(false)
    
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div id='navbar' className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white absolute'>
    {/* make this mobile nav hidden at screen sizes medium and above then create a new nav for medium and above named Catering Menu instead of icon. Maybe just changed the icon to be an h2 Catering Icon and get rid of the icon entirely? */}
        {/* hamburger menu useState logic for open close to display hamburger or X */}
        <div onClick={() => {setNav(true)}} className='flex flex-end text-pink-500 top-2 right-2 z-[999] fixed hover:scale-[120%] ease-in duration-200 cursor-pointer'  >
            {/* mobile navbar */}
            {nav ? <AiOutlineClose className='hidden text-pink-500' size={30} /> : <AiOutlineMenu size={30} className='md:hidden'/> }
            {/* screen size 786px and above navbar */}
            {nav ? <AiOutlineClose className='hidden text-pink-500 m-4' size={30} /> : <h2 className='md:block hidden border-2 border-pink-500 p-2 text-sm rounded-lg bg-black/60 font_pacifico m-4'>Catering Menu</h2>}
        </div>
        {/* menu is off the page by 100% to the right and pulled on by 80% when hamburger clicked */}
        <div className={nav ? 'fixed right-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300]/80 ease-in-out duration-500 z-[999] md:w-[35%]' : 'fixed right-[-100%] z-[999]'} >
            <div className='flex justify-end'>
                <AiOutlineClose onClick={handleNav} size={30} className='text-pink-500 border-2 border-pink-500 rounded-lg m-4 hover:scale-[120%] ease-in duration-200'/>
            </div>
            <h1 className='w-full text-3xl font-bold text-pink-500 font_pacifico text-center mb-4'>Catering Menu</h1>
            {/* create a template for array of items in the json as anchor tags adding href by item id */}
            <div className='flex flex-col'>
                <div className='block m-auto'>
                {dataArray.map((item, index) => (
                    <a onClick={handleNav} className='text-pink-500 font_pacifico flex justify-start my-1 hover:scale-[120%] ease-in duration-200' key={index} href={`#${item.id}`}>{item.name}</a>
                ))}
                </div>
                <a onClick={handleNav} href="#home" className='text-pink-500 font_pacifico mx-auto mt-4 hover:scale-[120%] ease-in duration-200'>Home</a>
                <a onClick={handleNav} href="#contact" className='text-pink-500 font_pacifico mx-auto my-2 hover:scale-[120%] ease-in duration-200'>Contact</a>
            </div>
        </div>
    </div>
  )
}

export default NavbarNoCart