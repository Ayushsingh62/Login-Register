import React from 'react'

function Login() {
  return (
    <div>


<h1> login </h1>

<form action=""  >
<label htmlFor="name">Name</label>
<input type="text" placeholder='Enter name' id='name' />

<label htmlFor="email"> Email</label>
<input type="text" placeholder='Enter email address' id='email'  />

<label htmlFor="password">Password </label>
<input type="password" id='password' placeholder='Enter password' />

<button>Submit</button>

</form>

    </div>
  )
}

export default Login