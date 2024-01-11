import React, { useState } from 'react'

// const base = new Airtable({ apiKey: `${import.meta.env.VITE_API}`}).base(`${import.meta.env.VITE_BASE}`);

const Contact = () => {

    const [Name, setName] = useState('')
    const [Phone, setPhone] = useState('')
    const [Email, setEmail] = useState('')
    const [Subject, setSubject] = useState('')
    const [Message, setMessage] = useState('')
    const [formSuccess, setformSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        const airData = {
            "records": [
              {
                "fields": {
                    "Name": Name,
                    "Phone": Phone,
                    "Email": Email,
                    "Subject": Subject,
                    "Message": Message
                }
              }
            ]
          }
          fetch(`${import.meta.env.VITE_AIRTABLE_API}`, {
                method: 'POST',
                headers: {
                     'Content-Type': 'application/json',
                     'Authorization': `${import.meta.env.VITE_BEARER}`
                },
                body: JSON.stringify(airData)
            }).then(() => {
                setIsLoading(false)
                setformSuccess(!formSuccess)
                // alert('Success! Order sent to Sweet Treat Vixen!')
            }).catch(error => console.log(error))
    }



  return (
    <div id='contact' className='block max-w-[85%] bg-black mx-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl block mx-auto text-center font_pacifico w-[50%] text-pink-500 md:w-[30%]'>Contact</h1>
        {/* <form onSubmit={onSubmit} action={`${import.meta.env.VITE_FORM}`} method='POST' encType='multipart/form-data'> */}
        <form onSubmit={handleSubmit} method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    {/* <label className='uppercase py-2 text-sm'>Name</label> */}
                    <input onChange={(e) => setName(e.target.value)} value={Name} className='border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white' type="text" name='Name' placeholder='Name' required/>
                </div>
                <div className='flex flex-col'>
                    {/* <label className='uppercase py-2 text-sm'>Phone Number</label> */}
                    <input onChange={(e) => setPhone(e.target.value)} value={Phone} className='border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white' type="tel" name='Phone' placeholder='Phone Number' required />
                </div>
            </div>
            <div className='flex flex-col py-2'>
                {/* <label className='uppercase py-2 text-sm'>Email</label> */}
                <input onChange={(e) => setEmail(e.target.value)} value={Email} className='border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white' type="email" name='Email' placeholder='Email' required/>
            </div>
            <div className='flex flex-col py-2'>
                {/* <label className='uppercase py-2 text-sm'>Subject</label> */}
                <input onChange={(e) => setSubject(e.target.value)} value={Subject} className='border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white' type="text" name='Subject' placeholder='Subject' required/>
            </div>
            <div className='flex flex-col py-2'>
                {/* <label className='uppercase py-2 text-sm'>Message</label> */}
                <textarea onChange={(e) => setMessage(e.target.value)} value={Message} className='border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white' name="Message" cols="30" rows="10" placeholder='Message' required></textarea>
            </div>
            {!isLoading &&<button className='block mx-auto font_pacifico bg-pink-500 text-black mt-4 w-[50%] p-4 rounded-lg md:w-[25%] hover:scale-[110%] ease-in duration-200' type='submit'>Send Message</button>}
            {isLoading && <button className='block mx-auto font_pacifico bg-gray-500 text-black mt-4 w-[50%] p-4 rounded-lg md:w-[25%]' type='submit' disabled>Submitting Message...</button>}
        </form>
        <div className='flex justify-center m-4'>
           {formSuccess && <h1 className=' text-green-500 border-2 border-green-500 p-4 rounded-xl'>Message Sent! to {Email}</h1>}           
        </div>
    </div>
  )
}

export default Contact