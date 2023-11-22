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
        <div onClick={handleNav} className='flex flex-end text-[#00df9a] top-2 right-2 z-[999] fixed cursor-pointer '  >
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        {/* menu is off the page by 100% to the left and pulled on by 80% when hamburger cliked */}
        <div className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300]/60 ease-in-out duration-500 z-[999] md:w-[35%]' : 'fixed left-[-100%] z-[999]'} >
            <h1 className='w-full text-3xl font-bold text-[#00df9a] text-center mt-4'>Catering Menu</h1>
            {/* create a template for array of items in the json as anchor tags adding href by item id */}
            <div className='flex flex-col'>
                <div className='block m-auto'>
                {dataArray.map((item, index) => (
                    <a onClick={handleNav} className='text-[#00df9a] flex justify-start' key={index} href={`#${item.id}`}>{item.name}</a>
                ))}
                </div>
                <a onClick={handleNav} href="#contact" className='text-[#00df9a] mx-auto m-4'>Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar