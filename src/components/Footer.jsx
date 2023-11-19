/*
import React from 'react'
import Links from './Links'
import favicon from '/imgs/profileFavicon1.png'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Links />
        <div className='flex'>
          <img className='scale-[60%]' src={favicon} alt="" />
          <h3 className='m-auto pt-2 text-xl' >  &copy; 2023 Kevin Tapolcsanyi</h3>
        </div>
    </div>
  )
}

export default Footer
*/
import React from 'react'
import Links from './Links'
import favicon from '/imgs/profileFavicon1.png'

const Footer = () => {
  return (
    // using flex column to have my portfolio site above the div containing my favicon and copyright
    <div className='flex flex-col justify-center items-center bg-black'>
        <a target='_blank' href="https://kevintapolcsanyi.netlify.app/" className='text-[#00df9a] border-2 rounded-full border-[#00df9a] scale-[80%] hover:scale-[100%] ease-in duration-200 mt-3 p-3 cursor-pointer'>Click here for a link to my Portfolio
        </a>
        <Links />
        {/* using flex to display the favicon and copyright as a row */}
        <div className='flex'>
          <img className='scale-[60%]' src={favicon} alt="" />
          <h3 className='m-auto pt-2 text-md text-[#00df9a]' >  &copy; 2023 Kevin Tapolcsanyi</h3>
        </div>
    </div>
  )
}

export default Footer