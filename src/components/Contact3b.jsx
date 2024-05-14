import React, { useState, useEffect } from "react";

const Contact3b = () => {
  // Here I am using a single useState() object instead of several useState strings.
  const [formData, setFormData] = useState(() => {
    // The code below is to get the local value of the json object from the input fields.
    const localValue = localStorage.getItem('ITEMS');
    // If there is a local value then parse the string into JSON else return empty strings for the values of the keys.
    return localValue ? JSON.parse(localValue) : {
      Name: "",
      Phone: "",
      Email: "",
      Subject: "",
      Message: "",
    };
  });

  // This useEffect() performs the side effect of setting the form data as a string in local storage as 'ITEMS'
  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(formData))
  }, [formData])

  const [formSuccess, setFormSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // The form submission function is preventing the default page refresh and grabbing the inputs into a JSON that is recognizable by Airtable.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // The airData object is formatted for Airtable JSON format in that the data object key must be named records with an array value of the object fields being the column names as keys and user input as values.
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
    // Try to fetch the Airtable Api with headres and post the string of the JSON data.
    try {
      const res = await fetch(`${import.meta.env.VITE_AIRTABLE_API}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${import.meta.env.VITE_BEARER}`,
        },
        body: JSON.stringify(airData),
      })
      //If the post is successful, then set loading useState to false and form success to true.
      if (res.ok) {
        setIsLoading(false)
        setFormSuccess(!formSuccess)
        // If the response is not ok, log to the console the error status code and specific text with string interpolation.
      } else {
        console.error(`Error: ${res.status} - ${res.statusText}`)
      }
    } catch (error) {
      console.error(error)
    }
  };

  // This is the onChange function being called for each input field where the name and value is being destructured from the user input and setting the useState() object's key value pairs to the new user's name and value input fields.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div
      id="contact"
      className="block max-w-[85%] bg-black mx-auto p-4 py-16"
    >
      <h1 className="py-4 text-4xl block mx-auto text-center font_pacifico w-[50%] text-pink-500 md:w-[30%]">
        Contact
      </h1>
      <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
        <div>
          <div className="grid lg:grid-cols-3 lg:gap-4">
            {/* Name Form Field */}
            <div className="flex flex-col py-2">
              <label
                htmlFor="nameInput"
                className="py-2 m-2 text-lg text-pink-500 font_pacifico"
              >
                Name
              </label>
              <input
                onChange={handleChange}
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
                htmlFor="phoneInput"
                className="py-2 m-2 text-lg text-pink-500 font_pacifico"
              >
                Phone Number
              </label>
              <input
                onChange={handleChange}
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
                htmlFor="emailInput"
                className="py-2 m-2 text-lg text-pink-500 font_pacifico"
              >
                Email
              </label>
              <input
                onChange={handleChange}
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
              htmlFor="subjectInput"
              className="py-2 m-2 text-lg text-pink-500 font_pacifico"
            >
              Subject
            </label>
            <input
              onChange={handleChange}
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
              htmlFor="messageInput"
              className="py-2 m-2 text-lg text-pink-500 font_pacifico"
            >
              Message
            </label>
            <textarea
              onChange={handleChange}
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
            id="submitButton"
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

export default Contact3b;
