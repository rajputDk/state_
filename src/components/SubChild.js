
import React, { useState } from 'react';
function SubChild() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address:'',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, such as sending it to a server
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      Address:
      <input
      type='address'
      name='address'
      value={formData.address}
      onChange={handleChange}

      />
      </label>
      <br/> 
      <button type="submit">Submit</button>
    </form>
  );
}
export default SubChild;