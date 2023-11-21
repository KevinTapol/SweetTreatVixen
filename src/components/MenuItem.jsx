import React, { useState } from 'react'
import Modal from './Modal'

const MenuItem = ({id, imgUrl ,name ,bread , ingredients, directions, instructions}) => {
  const [openModal, setOpenModal] = useState(false)
  return (

    // creating a template component for an item in the data.json 
    <div id={id} className='relative max-w-[450px] h-[450px] w-full mx-auto my-3 py-16 px-4 ' >
        <img className='object-cover w-full h-full rounded-2xl bg-center bg-cover duration-500' src={imgUrl} alt="" />
        <Modal open={openModal} name={name} imgUrl={imgUrl} bread={bread} ingredients={ingredients} directions={directions}  id={id} onClose={() => setOpenModal(false)}/>
        <div className='bg-white/90 rounded-lg my-1' >
            <h2 className='text-xl text-center pr-2 font-bold border-b border-gray-600 cursor-pointer' >
                {name}
            </h2>
            <div>
              <button className='block mx-auto' onClick={() => {setOpenModal(!openModal)}}>Click Here!</button>
            </div>
            {/* <h2 className='text-sm border-b border-gray-600' >{bread}</h2>
            <h2>{ingredients}</h2> */}
        </div>
    </div>
  )
}

export default MenuItem