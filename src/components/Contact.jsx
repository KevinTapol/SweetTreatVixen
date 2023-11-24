import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='block max-w-[85%] bg-black mx-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold block mx-auto text-center  w-[50%] text-gray-100 md:w-[30%]'>Contact</h1>
        <form action={`${import.meta.env.VITE_FORM}`} method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    {/* <label className='uppercase py-2 text-sm'>Name</label> */}
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' placeholder='Name' required/>
                </div>
                <div className='flex flex-col'>
                    {/* <label className='uppercase py-2 text-sm'>Phone Number</label> */}
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' placeholder='Phone Number' required />
                </div>
            </div>
            <div className='flex flex-col py-2'>
                {/* <label className='uppercase py-2 text-sm'>Email</label> */}
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' placeholder='Email' required/>
            </div>
            <div className='flex flex-col py-2'>
                {/* <label className='uppercase py-2 text-sm'>Subject</label> */}
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' placeholder='Subject' required/>
            </div>
            <div className='flex flex-col py-2'>
                {/* <label className='uppercase py-2 text-sm'>Message</label> */}
                <textarea className='border-2 rounded-lg p-3 flex border-gray-300' name="message" id="" cols="30" rows="10" placeholder='Message' required></textarea>
            </div>
            <button className='block mx-auto bg-[#00df9a] text-gray-100 mt-4 w-[50%] p-4 rounded-lg md:w-[25%] hover:scale-[110%] ease-in duration-200' type='submit'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact