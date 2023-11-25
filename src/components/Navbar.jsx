import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import dataArray from '../data/items.json'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div id='navbar' className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white absolute'>
    
        {/* hamburger menu useState logic for open close to display hamburger or X */}
        <div onClick={handleNav} className='flex flex-end text-pink-500 top-2 right-2 z-[999] fixed hover:scale-[120%] ease-in duration-200 cursor-pointer '  >
            {nav ? <AiOutlineClose className='text-red-500' size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        {/* menu is off the page by 100% to the left and pulled on by 80% when hamburger cliked */}
        <div className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300]/60 ease-in-out duration-500 z-[999] md:w-[35%]' : 'fixed left-[-100%] z-[999]'} >
            <h1 className='w-full text-3xl font-bold text-pink-500 font_pacifico text-center mt-4'>Catering Menu</h1>
            {/* create a template for array of items in the json as anchor tags adding href by item id */}
            <div className='flex flex-col'>
                <div className='block m-auto'>
                {dataArray.map((item, index) => (
                    <a onClick={handleNav} className='text-pink-500 font_pacifico flex justify-start hover:scale-[120%] ease-in duration-200' key={index} href={`#${item.id}`}>{item.name}</a>
                ))}
                </div>
                <a onClick={handleNav} href="#home" className='text-pink-500 font_pacifico mx-auto mt-4 hover:scale-[120%] ease-in duration-200'>Home</a>
                <a onClick={handleNav} href="#contact" className='text-pink-500 font_pacifico mx-auto hover:scale-[120%] ease-in duration-200'>Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar