import React, { useState } from 'react'
import Modal from './Modal'

const MenuItem = ({id, imgUrl ,name ,emoji , ingredients, directions, instructions, small, medium, large}) => {
  const props = {id, imgUrl ,name ,emoji , ingredients, directions, instructions, small, medium, large}
  const [openModal, setOpenModal] = useState(false)
  return (

    // creating a template component for an item in the data.json 
    <div id={id} className='relative max-w-[450px] h-[450px] w-full mx-auto my-3 py-16 px-4' >
        <img className='object-cover w-full h-full rounded-2xl bg-center bg-cover duration-500 ' src={imgUrl} alt="" />
        <Modal open={openModal} small={small} medium={medium} large={large} name={name} imgUrl={imgUrl} emoji={emoji} ingredients={ingredients} directions={directions} instructions={instructions} id={id} onClose={() => setOpenModal(false)}/>
        <div className='' >
            <h2 className='text-xl text-center font_pacifico text-pink-500 pr-2 font-bold' >
                {name}
            </h2>
            <button className='block mx-auto mt-2 border-2 font_pacifico bg-pink-500 rounded-xl p-1 hover:scale-[110%] ease-in duration-200 cursor-pointer ' onClick={() => {setOpenModal(!openModal)}}>
              Click Here for Description!
            </button>
        </div>
    </div>
  )
}

export default MenuItem