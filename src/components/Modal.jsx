import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({name, imgUrl, bread, ingredients, directions, open, onClose, instructions, small, medium, large}) => {
    if (!open) return null
  return (
    <div className='fixed bg-black/60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
        <div onClick={(e) => e.stopPropagation()} className='w-[90%] h-[80%] bg-black/60 border-2 border-pink-500 rounded-xl p-4 flex flex-col relative'>
            <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer hover:scale-[120%] ease-in duration-200' onClick={onClose}/>
            <h2 className='w-fit px-4 py-1 bg-pink-500 rounded-lg font_pacifico'>{name}</h2>
            <div className='flex justify-center items-center gap-x-2'>
                <h2 className='my-1 font_pacifico text-pink-500'>{bread}{directions}</h2>
            </div>
            <img className='block mx-auto w-[30%] h-[30%] object-cover' src={imgUrl} alt="" />
            <h2 className='flex justify-center m-2 font_pacifico text-pink-500'>{instructions}</h2>
            {/* <div className='flex justify-center'>
                <h2 className='flex justify-center m-2 font_pacifico text-pink-500'>Size</h2>
                <h2 className='flex justify-center m-2 font_pacifico text-pink-500'>Price</h2>
            </div> */}
            <div className='flex justify-center'>
                {/* <h2 className='flex justify-center m-2 font_pacifico text-pink-500'>Small (feeds 6-8)</h2> */}
                <h2 className='flex justify-center m-2 font_pacifico text-pink-500'>{small}</h2>
            </div>
            <div className='flex justify-center'>
                {/* <h2 className='flex justify-center m-2 font_pacifico text-pink-500'>Medium (feeds 8-10)</h2> */}
                <h2 className='flex justify-center m-2 font_pacifico text-pink-500'>{medium}</h2>
            </div>
            <div className='flex justify-center'>
                {/* <h2 className='flex justify-center m-2 font_pacifico text-pink-500'>Large (feeds 10-12)</h2> */}
                <h2 className='flex justify-center m-2 font_pacifico text-pink-500'>{large}</h2>
            </div>
        </div>  
    </div>
  )
}

export default Modal