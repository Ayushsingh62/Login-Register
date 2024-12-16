import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

  const navigate = useNavigate()


const userDetails ={

  name:'',
  email:'',
  password:''
}

const [data , setData] = useState(userDetails)

const handlechange =(e)=>{
  const value = e.target.value
 const name= e.target.id

 setData({...data , [name]: value})
// console.log(e.target.id)

}

const handleSubmit=(e)=>{
e.preventDefault()

if(name.value == "" || email.value == "" || password.value == ""){
  alert('Enter all the details ')
}
else{
  
const getdata = JSON.parse(localStorage.getItem ("user")|| "[]")
let arr = []
arr = [...getdata]
arr.push(data)

localStorage.setItem("user", JSON.stringify(arr))
alert("user sucessfully register")
navigate("/login")

}
}

  return (
    <div className="Register">

<h1> Registration</h1>

<form action="" onSubmit={handleSubmit}  >
<label htmlFor="name">Name</label>
<input type="text" placeholder='Enter name' id='name' onChange={handlechange} />

<label htmlFor="email"> Email</label>
<input type="text" placeholder='Enter email address' id='email' onChange={handlechange}  />

<label htmlFor="password">Password </label>
<input type="password" id='password' placeholder='Enter password'onChange={handlechange}  />

<button>Register</button>

</form>


</div>
  )
}

export default Register