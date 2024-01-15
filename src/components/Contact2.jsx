import React, { useState } from "react";

// const base = new Airtable({ apiKey: `${import.meta.env.VITE_API}`}).base(`${import.meta.env.VITE_BASE}`);

const Contact2 = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Subject: "",
    Message: "",
  });

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
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      id="contact"
      className="block max-w-[85%] bg-black mx-auto md:pl-20 p-4 py-16"
    >
      <h1 className="py-4 text-4xl block mx-auto text-center font_pacifico w-[50%] text-pink-500 md:w-[30%]">
        Contact
      </h1>
      <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
        <div>
        <div className="grid sm:grid-cols-3 gap-4">
          

            {/* Name Form Field */}
            <div className="flex flex-col py-2">
              <label
                for="nameInput"
                className="py-2 m-2 text-lg text-pink-500 font_pacifico"
              >
                Name
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, Name: e.target.value })
                }
                value={formData.Name}
                className="border-2 rounded-lg p-3  border-gray-300 bg-black text-white"
                id="nameInput"
                type="text"
                name="Name"
                placeholder="Name"
                required
              />
            </div>

            {/* Phone Form Field */}
            <div className="flex flex-col py-2">
            <label
                for="phoneInput"
                className="py-2 m-2 text-lg text-pink-500 font_pacifico"
              >
                Phone Number
              </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, Phone: e.target.value })
              }
              value={formData.Phone}
              className="border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white"
              id='phoneInput'
              type="tel"
              name="Phone"
              placeholder="Phone Number"
              required
            />
          </div>

            {/* Email Form Field */}
            <div className="flex flex-col py-2">
                <label
                for="emailInput"
                className="py-2 m-2 text-lg text-pink-500 font_pacifico"
              >
                Email
              </label>
              <input
            onChange={(e) =>
              setFormData({ ...formData, Email: e.target.value })
            }
            value={formData.Email}
            className="border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white"
            id="emailInput"
            type="email"
            name="Email"
            placeholder="Email"
            required
          />
            </div>
        </div>
            {/* Subject Form Field */}
            <div className="flex flex-col py-2">
                <label
                    for="subjectInput"
                    className="py-2 m-2 text-lg text-pink-500 font_pacifico"
                >
                    Subject
                </label>
                <input
                    onChange={(e) =>
                      setFormData({ ...formData, Subject: e.target.value })
                    }
                    value={formData.Subject}
                    className="border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white"
                    id="subjectInput"
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                    required
                />
            </div>
            {/* Message Form Field */}
            <div className="flex flex-col py-2">
        <label
                for="messageInput"
                className="py-2 m-2 text-lg text-pink-500 font_pacifico"
              >
                Message
              </label>
          <textarea
            onChange={(e) =>
              setFormData({ ...formData, Message: e.target.value })
            }
            value={formData.Message}
            className="border-2 rounded-lg p-3 flex border-gray-300 bg-black text-white"
            id="messageInput"
            name="Message"
            cols="30"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
        </div>

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

export default Contact2;
