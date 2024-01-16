import React, { useState } from "react";

// const base = new Airtable({ apiKey: `${import.meta.env.VITE_API}`}).base(`${import.meta.env.VITE_BASE}`);

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  // const [Name, setName] = useState('')
  // const [Phone, setPhone] = useState('')
  // const [Email, setEmail] = useState('')
  // const [Subject, setSubject] = useState('')
  // const [Message, setMessage] = useState('')

  const [formSuccess, setformSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const airData = {
      records: [
        {
          fields: {
            Name: formData.Name,
            Phone: formData.Phone,
            Email: formData.Email,
            Subject: formData.Subject,
            Message: formData.Message,
            // "Name": Name,
            // "Phone": Phone,
            // "Email": Email,
            // "Subject": Subject,
            // "Message": Message
          },
        },
      ],
    };
    fetch(`${import.meta.env.VITE_AIRTABLE_API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${import.meta.env.VITE_BEARER}`,
      },
      body: JSON.stringify(airData),
    })
      .then(() => {
        setIsLoading(false);
        setformSuccess(!formSuccess);
        // alert('Success! Order sent to Sweet Treat Vixen!')
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      id="contact"
      // removed md:pl-20 from className
      className="block max-w-[85%] bg-black mx-auto  p-4 py-16"
    >
      <h1 className="py-4 text-4xl block mx-auto text-center font_pacifico w-[50%] text-pink-500 md:w-[30%]">
        Contact
      </h1>
      {/* <form onSubmit={onSubmit} action={`${import.meta.env.VITE_FORM}`} method='POST' encType='multipart/form-data'> */}
      <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            {/* <div className="flex items-center">
              <label
                for="nameInput"
                className="uppercase py-2 m-2 text-sm text-white"
              >
                Name
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, Name: e.target.value })
                }
                value={formData.Name}
                className="border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white"
                id="nameInput"
                type="text"
                name="Name"
                placeholder="Name"
                required
              />
            </div> */}
            <input
              onChange={(e) =>
                setFormData({ ...formData, Name: e.target.value })
              }
              value={formData.Name}
              className="border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white"
              id="nameInput"
              type="text"
              name="Name"
              placeholder="Name"
              required
            />

            {/* <input onChange={(e) => setName(e.target.value)} value={Name} className='border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white' type="text" name='Name' placeholder='Name' required/> */}
          </div>
          <div className="flex flex-col">
            {/* <label className='uppercase py-2 text-sm'>Phone Number</label> */}
            <input
              onChange={(e) =>
                setFormData({ ...formData, Phone: e.target.value })
              }
              value={formData.Phone}
              className="border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white"
              type="tel"
              name="Phone"
              placeholder="Phone Number"
              required
            />

            {/* <input onChange={(e) => setPhone(e.target.value)} value={Phone} className='border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white' type="tel" name='Phone' placeholder='Phone Number' required /> */}
          </div>
        </div>
        <div className="flex flex-col py-2">
          {/* <label className='uppercase py-2 text-sm'>Email</label> */}
          <input
            onChange={(e) =>
              setFormData({ ...formData, Email: e.target.value })
            }
            value={formData.Email}
            className="border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white"
            type="email"
            name="Email"
            placeholder="Email"
            required
          />
          {/* <input onChange={(e) => setEmail(e.target.value)} value={Email} className='border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white' type="email" name='Email' placeholder='Email' required/> */}
        </div>
        <div className="flex flex-col py-2">
          {/* <label className='uppercase py-2 text-sm'>Subject</label> */}
          <input
            onChange={(e) =>
              setFormData({ ...formData, Subject: e.target.value })
            }
            value={formData.Subject}
            className="border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white"
            type="text"
            name="Subject"
            placeholder="Subject"
            required
          />
          {/* <input onChange={(e) => setSubject(e.target.value)} value={Subject} className='border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white' type="text" name='Subject' placeholder='Subject' required/> */}
        </div>
        <div className="flex flex-col py-2">
          {/* <label className='uppercase py-2 text-sm'>Message</label> */}
          <textarea
            onChange={(e) =>
              setFormData({ ...formData, Message: e.target.value })
            }
            value={formData.Message}
            className="border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white"
            name="Message"
            cols="30"
            rows="10"
            placeholder="Message"
            required
          ></textarea>

          {/* <textarea onChange={(e) => setMessage(e.target.value)} value={Message} className='border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white' name="Message" cols="30" rows="10" placeholder='Message' required></textarea> */}
        </div>
        {!isLoading && (
          <button
            className="block mx-auto font_pacifico bg-pink-500 text-black mt-4 w-[50%] p-4 rounded-lg md:w-[25%] hover:scale-[110%] ease-in duration-200"
            type="submit"
          >
            Send Message
          </button>
        )}
        {isLoading && (
          <button
            className="block mx-auto font_pacifico bg-gray-500 text-black mt-4 w-[50%] p-4 rounded-lg md:w-[25%]"
            type="submit"
            disabled
          >
            Submitting Message...
          </button>
        )}
      </form>
      <div className="flex justify-center m-4">
        {formSuccess && (
          <h1 className="text-pink-500 border-2 border-pink-500 p-4 rounded-xl">
            Thank you {formData.Name} for your order!
          </h1>
        )}
      </div>
    </div>
  );
};

export default Contact;
