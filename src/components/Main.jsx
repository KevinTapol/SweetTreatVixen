// no animations
/*
import shop from '/imgs/shop.jpg'
import chef from '/imgs/chef.jpg'

const Main = () => {



  return (
    <div id='home'>
        <img className='w-full h-screen object-cover' src={shop} alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-black/10 flex justify-center items-center'>
            <div className='absolute'>
                <h1 className='text-[4vw] font-bold text-purple-800 text-center banner'>Sweet Treat Vixen</h1>
                <img src={chef} className='block m-auto w-[40%] opacity-90 rounded-[15%]' alt="" />
            </div>
        </div>
    </div>
  )
}
export default Main
*/


// useState useEffect useRef instead of useInView
/*
import React, { useState, useRef, useEffect } from 'react'
import shop from '/imgs/shop.jpg'
import chef from '/imgs/chef.jpg'

const Main = () => {

  const myRef = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries)=> {
    const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting)      
    },{
      root:null,
      rootMargin:'0px',
      threshold:0.9
    })
    observer.observe(myRef.current)
  }, [])

  return (
    <div id='home'>
        <img className='w-full h-screen object-cover' src={shop} alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-black/10 flex justify-center items-center'>
            <div ref={myRef} className={`${myElementIsVisible ? 'absolute hero_text' : 'absolute  opacity-0' }`}>
                <h1 className='text-[4vw] font-bold text-pink-400 text-center banner'>Sweet Treat Vixen</h1>
                <img src={chef} className='block m-auto w-[40%] opacity-90 rounded-[15%]' alt="" />
            </div>
        </div>
    </div>
  )
}
export default Main
*/


// useInView hook

import React from 'react'
import shop from '/imgs/shop.jpg'
import { useInView } from 'react-intersection-observer'
import chef from '/imgs/pastry_chef.jpg'

const Main = () => {
    const { ref:myRef, inView: myElementIsVisible } = useInView();
  return (
    <div id='home'>
        <img className='w-full h-screen object-cover opacity-70' src={shop} alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-black/10 flex justify-center items-center'>
            <div ref={myRef} className={`${myElementIsVisible ? 'absolute main_img w-3/4' : 'absolute  opacity-0 ' }`}>
                <h1 className='text-[6vw] font-bold text-pink-500 text-center font_pacifico'>Sweet Treat Vixen</h1>
                <img src={chef} className='block m-auto opacity-90 rounded-[100%]' alt="" />
            </div>
        </div>
    </div>
  )
}
export default Main
