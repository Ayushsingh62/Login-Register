import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

const [email , setEmail] =useState()

const [password, setPassword] = useState()
const [msg , setMsg]= useState()

const handlechange= (e)=>{

const value = e.target.value
// console.log(value)
const name = e.target.id


if('email' == name ){
  setEmail (value)
  // console.log(email)
} if('password' == name){
setPassword(value)
// console.log(password)

}

}

const handlesubmit =(e)=>{
e.preventDefault()

const userData = JSON.parse(localStorage.getItem("user"))
// console.log(userData)

userData.map((currentValue)=> {

  
const storeEmail = currentValue.email
const storePassword = currentValue.password

console.log(storeEmail, storePassword)
console.log(email,password)
if(storeEmail == email && storePassword == password ){
alert("Login successfully")
navigate("/home")

}
else{
  return setMsg("Invalid email or password")
}
 }
) 



}


  return (
    <div>


<h1> login </h1>

<p>{msg}</p>

<form action="" onSubmit={handlesubmit}  >


<label htmlFor="email"> Email</label>
<input type="text" placeholder='Enter email address' id='email' onChange={handlechange}  />

<label htmlFor="password">Password </label>
<input type="password" id='password' placeholder='Enter password'  onChange={handlechange} />

<button>Submit</button>

</form>

    </div>
  )
}

export default Login