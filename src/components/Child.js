import axios from 'axios'
import React, { useState } from 'react'

const Child = () => {
  const [data,setData]=useState([])
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then(resp=>{
    console.log(resp)
    setData(resp.data)
  }).catch((err)=>{
    console.log(err)
  },[])
  return (
    <div>



    </div>
  )
}

export default Child