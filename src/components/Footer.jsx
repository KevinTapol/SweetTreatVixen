import React from 'react'
import favicon from '/imgs/profileFavicon1.png'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-black'>
        <div className=''>
          <a target='_blank' href="https://kevintapolcsanyi.netlify.app/" className='flex text-gray-400 scale-[80%] hover:scale-[100%] ease-in duration-200 cursor-pointer'><img className='scale-[60%]' src={favicon} alt="" /><h3 className='m-auto text-lg' >  &copy; 2023 Kevin Tapolcsanyi</h3></a>
          
        </div>
    </div>
  )
}

export default Footer