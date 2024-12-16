import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

const navigate = useNavigate()
const [name, setName]=useState()
const [email , setEmail]=useState()


const handleclick =()=>{
localStorage.removeItem("user")
 navigate("/")
}
 
useEffect (()=>{
  
    {const userdata = JSON.parse(localStorage.getItem("user"))

    // SetName(userdata)
    console.log(userdata)
    
    // console.log(userdata)
     userdata.map((current)=>{
    const value= current.name
    const valuetwo= current.email
    // console.log(names)
    // console.log(emails)
    setName(value)
    setEmail(valuetwo)
    
     }
    )}
  
}
)


  return (
    <div> 
<h1>Welcome to home page</h1>
<p>Name:{name}</p>
<p>Email:{email}</p>


<button onClick={handleclick} >Logout</button>
    </div>
  )
}

export default Home