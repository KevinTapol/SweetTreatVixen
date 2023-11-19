import React from 'react'
import pizza from '/imgs/pizza_splash.jpg'
import { useInView } from 'react-intersection-observer'
import chef from '/imgs/chef.jpg'

const Main = () => {
    const { ref:myRef, inView: myElementIsVisible } = useInView();
  return (
    <div>
        <img className='w-full h-screen object-cover' src={pizza} alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-black/10 flex justify-center items-center'>
            <div ref={myRef} className={`${myElementIsVisible ? 'absolute hero_text' : 'absolute  opacity-0' }`}>
                <h1 className='md:text-4xl text-xl font-bold text-black/50 text-center'>Sweet Treat Vixen</h1>
                <img src={chef} className='w-[450px] opacity-90' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Main