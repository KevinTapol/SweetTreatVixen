import React from 'react'
import shop from '/imgs/shop.jpg'
import { useInView } from 'react-intersection-observer'
import chef from '/imgs/Marlet.jpg'

const Main2 = () => {
    const { ref:myRef, inView: myElementIsVisible } = useInView();
  return (
    <div id='home'>
        <img className='w-full h-screen object-cover opacity-70' src={shop} alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-black/10 flex justify-center items-center'>
            <div ref={myRef} className={`${myElementIsVisible ? 'absolute main_img' : 'absolute  opacity-0' }`}>
                <h1 className='text-[5vw] font-bold text-pink-500 text-center font_pacifico'>Sweet Treat Vixen</h1>
                <img src={chef} className='block m-auto w-2/5 opacity-90 rounded-[50%] max-w-[1000px]' alt="" />
            </div>
        </div>
    </div>
  )
}
export default Main2