import React, { useEffect, useState } from 'react'

function Api() {
    const [post,setPost]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp=>resp.json()))
        .then(json=>{
            setPost(json)
            console.log(json)
        })
    },[])
  return (
    <div>

    </div>
  )
}

export default Api