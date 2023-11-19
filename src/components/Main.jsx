import React from 'react'
import shop from '/imgs/shop.jpg'
import { useInView } from 'react-intersection-observer'
import chef from '/imgs/chef.jpg'

const Main = () => {
    const { ref:myRef, inView: myElementIsVisible } = useInView();
  return (
    <div>
        <img className='w-full h-screen object-cover' src={shop} alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-black/10 flex justify-center items-center'>
            <div ref={myRef} className={`${myElementIsVisible ? 'absolute hero_text' : 'absolute  opacity-0' }`}>
                <h1 className='text-[4vw] font-bold text-black/50 text-center font-sans'>Sweet Treat Vixen</h1>
                <img src={chef} className='block m-auto w-[40%] opacity-90' alt="" />
            </div>
        </div>
    </div>
  )
}
export default Main