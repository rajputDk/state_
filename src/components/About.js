import React, { useState } from 'react'

const About = () => {
    const[data,setData]=useState({
        name:"",
        lname:"",
        email:""
    })
    const Handlechange=(e)=>{
        setData({
            ...data,[e.target.name]:e.target.value
        })
    }
    const getdata=(e)=>{
    e.preventDefault()
    console.log(data)
    }
  return (
    <div>
    <form onSubmit={getdata}>
    <label>
        Name:
        <input
        type='text'
        placeholder='enter the name'
        name="name"
        value={data.name}
        onChange={Handlechange}
        />
    </label>
    <label>
        Name:
        <input
        type='text'
        placeholder='enter the name'
        name="lname"
        value={data.lname}
        onChange={Handlechange}
        />
    </label>
    <label>
        Name:
        <input
        type='text'
        placeholder='enter the name'
        name="email"
        value={data.email}
        onChange={Handlechange}
        /><br/>
    </label>
    <button type='submit'>submit</button>
    </form>


    </div>
  )
}

export default About