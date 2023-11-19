import React from 'react'

const MenuItem = ({id, imgUrl ,name ,bread , ingredients}) => {
  return (

    // creating a template component for an item in the data.json 
    <div id={id} className='max-w-[450px] h-[450px] w-full mx-auto my-3 py-16 px-4 relative' >
        <img className='object-cover w-full h-full rounded-2xl bg-center bg-cover duration-500' src={imgUrl} alt="" />
        <div className='bg-white/90 rounded-lg my-1' >
            <h2 className='text-xl text-center pr-2 font-bold border-b border-gray-600' >
                {name}
            </h2>
            {/* <h2 className='text-sm border-b border-gray-600' >{bread}</h2>
            <h2>{ingredients}</h2> */}
        </div>
    </div>
  )
}

export default MenuItem