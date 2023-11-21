import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { PiBookOpenTextLight } from 'react-icons/pi'

const Modal = ({name, imgUrl, bread, ingredients, directions, open, onClose, instructions}) => {
    if (!open) return null
  return (
    <div className='fixed bg-black/60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
        {/* <div onClick={(e) => e.stopPropagation()} className='w-[600px] maw-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'> */}
        <div onClick={(e) => e.stopPropagation()} className='w-[90%] h-[80%] bg-white rounded-xl p-4 flex flex-col relative'>
            <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer' onClick={onClose}/>
            <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>{name}</h2>
            <div className='flex justify-center items-center gap-x-2'>
                <PiBookOpenTextLight className='text-red-300 text-2xl'/>
                <h2 className='my-1'>{directions}</h2>
            </div>
            {/* <div className='flex justify-start items-center gap-x-2'>
                <h2 className='my-1'>{ingredients}</h2>
            </div> */}
            <img className='block mx-auto w-[30%] h-[30%] object-cover' src={imgUrl} alt="" />
            <h2 className='m-2'>{instructions}</h2>
            {/* <p className='my-2'>{instructions}</p> */}
        </div>  
    </div>
  )
}

export default Modal

// original
/*
<div onClick={onClose} className='absolute bg-white/90 block w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl' >
        <div onClick={(e) => e.stopPropagation()} className='flex flex-col'>
            <div className='flex justify-end pr-2 pt-2'>
                <button className='text-[#df0030]' onClick={onClose}><AiOutlineClose size={30}/></button>
            </div>
            <h2 className='flex justify-center'>{name}</h2>
            <img className='block mx-auto w-[30%]' src={imgUrl} alt="" />
            
            <h2 className='flex justify-center'>{bread}</h2>
            <p className='flex justify-center'>{ingredients}</p>  
            
        </div>
    </div>
*/