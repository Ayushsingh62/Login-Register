import React from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <div className="Navbar">

<ul>
<li> <Link to='/'>Register</Link></li>
<li> <Link to='/home'>Home</Link></li>
<li> <Link to='/login'>Login</Link></li>



</ul>


</div>
  )
}

export default Navbar