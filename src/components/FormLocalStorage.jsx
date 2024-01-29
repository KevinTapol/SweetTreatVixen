import React, { useState, useEffect } from 'react';

function FormLocalStorage() {
  const [formData, setFormData] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    return localValue ? JSON.parse(localValue) : {
      Name: "",
      Phone: "",
      Email: "",
      Subject: "",
      Message: "",
    };
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div>
      <input type="text" name="Name" value={formData.Name} onChange={handleChange} />
      <input type="text" name="Phone" value={formData.Phone} onChange={handleChange} />
      <input type="text" name="Email" value={formData.Email} onChange={handleChange} />
      <input type="text" name="Subject" value={formData.Subject} onChange={handleChange} />
      <input type="text" name="Message" value={formData.Message} onChange={handleChange} />
    </div>
  );
}

export default FormLocalStorage;
