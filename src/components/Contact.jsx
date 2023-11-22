import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='block max-w-[85%] mx-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form action={`${import.meta.env.VITE_FORM}`} method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase py-2 text-sm'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' />
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase py-2 text-sm'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' />
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase py-2 text-sm'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase py-2 text-sm'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase py-2 text-sm'>Message</label>
                <textarea className='border-2 rounded-lg p-3 flex border-gray-300' name="message" id="" cols="30" rows="10"></textarea>
            </div>
            <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg' type='submit'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact