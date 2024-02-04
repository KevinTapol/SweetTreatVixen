import React, { useState, useEffect } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import dataArray from '../data/items.json'
import { BsCart3 } from "react-icons/bs";
import cake from '/imgs/chocolate_cake.jpg'
import ItemCartModal from './ItemCartModal';
import dataArray from '../data/items.json'

const NavbarItems = () => {

    // the goal of this block is to set up a stateful value for an order with useEffect to update to localStorage when the state changes
    const [shoppingCart, setShoppingCart] = useState(() => {
        const localValue = localStorage.getItem('CART');
        return localValue ? JSON.parse(localValue) : {
            DonutsNum: "",
            CakesNum: "",
            CupcakesNum: "",
            CookiesNum: "",
            PieNum: "",
            BrownieNum: "",
        };
      });
    
      useEffect(() => {
        localStorage.setItem('CART', JSON.stringify(shoppingCart))
      }, [shoppingCart])

    const [nav, setNav] = useState(false)

    const [cart, setCart] = useState(false) 

    const handleNav = () => {
        setNav(!nav)
    }

    const handleCart = () => {
        setCart(!cart)
    }
  return (
    <div id='navbar' className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white absolute'>
    {/* make this mobile nav hidden at screen sizes medium and above then create a new nav for medium and above named Catering Menu instead of icon. Maybe just changed the icon to be an h2 Catering Icon and get rid of the icon entirely? */}
        {/* hamburger menu useState logic for open close to display hamburger or X */}
        <div onClick={() => {setNav(true); setCart(false)}} className='flex flex-end text-pink-500 top-2 left-2 z-[999] fixed hover:scale-[120%] ease-in duration-200 cursor-pointer'  >
            {/* mobile navbar */}
            {nav ? <AiOutlineClose className='hidden text-pink-500' size={30} /> : <AiOutlineMenu size={30} className='md:hidden'/> }
            {/* screen size 786px and above navbar */}
            {nav ? <AiOutlineClose className='hidden text-pink-500 m-4' size={30} /> : <h2 className='md:block hidden border-2 border-pink-500 p-2 text-sm rounded-lg bg-black/60 font_pacifico m-4'>Catering Menu</h2>}
        </div>
        {/* menu is off the page by 100% to the left and pulled on by 80% when hamburger clicked */}
        <div className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300]/80 ease-in-out duration-500 z-[999] md:w-[35%]' : 'fixed left-[-100%] z-[999]'} >
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
            <div className={cart ? 'fixed right-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300]/80 ease-in-out duration-500 z-[999] md:w-[35%]' : 'fixed right-[-100%] z-[999]'}>
            <div className='flex justify-end'>
                <AiOutlineClose onClick={handleCart} size={30} className='text-pink-500 border-2 border-pink-500 rounded-lg m-4 hover:scale-[120%] ease-in duration-200'/>
            </div>

            {/* creating a static display of a soon to be dynamically generated object component shopping list Considering creating dynamic array pull from the data.json file by size per checkbox */}
                <h2 className='w-full text-3xl font-bold text-pink-500 font_pacifico text-center my-4'>Items in Cart</h2>
                {dataArray.map((item, index) => (
                    <img className='max-w-[200px] block mx-auto' src={cake} alt="" />
                ))}
                {/* <img className='max-w-[200px] block mx-auto' src={cake} alt="" /> */}
                <input type="checkbox" />
            </div>
        </div>
        <div onClick={() => {setNav(false);setCart(true)}} className='flex flex-end text-pink-500 top-2 right-2 z-[999] fixed hover:scale-[120%] ease-in duration-200 cursor-pointer '  >
            {/* mobile navbar */}
            {cart ? <AiOutlineClose className='hidden text-pink-500' size={30} /> : <BsCart3 size={30} className='md:hidden'/> }
            {/* screen size 786px and above navbar */}
            {cart ? <AiOutlineClose className='hidden text-pink-500 m-4' size={30} /> : <h2 className='md:block hidden border-2 border-pink-500 p-2 text-sm rounded-lg bg-black/60 font_pacifico m-4'>Items Selected</h2>}
        </div>
    </div>
  )
}

export default NavbarItems