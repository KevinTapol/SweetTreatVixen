import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({name, imgUrl, bread, ingredients, open, onClose}) => {
    if (!open) return null
  return (
    // <div className='absolute bg-white/90 w-[94%] h-[72%] top-[15%] left-[3%] rounded-2xl' >
    <div className='absolute bg-white/90 block w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl' >
        <div className='flex flex-col'>
            <div className='flex justify-end pr-2 pt-2'>
                <button className='text-[#df0030]' onClick={onClose}><AiOutlineClose size={30}/></button>
            </div>
            <h2 className='flex justify-center'>{name}</h2>
            <img className='block mx-auto w-[30%]' src={imgUrl} alt="" />
            
            <h2 className='flex justify-center'>{bread}</h2>
            <p className='flex justify-center'>{ingredients}</p>  
            
        </div>
    </div>

  )
}

export default Modal