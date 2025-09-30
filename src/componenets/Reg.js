import React from 'react'
import { Link } from 'react-router-dom';
import logo from './images/logo10_19_143030.png';
import './Reg.css';

export default function Reg() {
  return (
    <div>
      
 <div className="all">
    <div className="reg"><img src={logo} alt="img-1" className="logo-image" /></div>   
    <div className="footer">
      <form className="form">
        <h1 className='regh1'>Registration</h1><br />
        <label htmlFor="name">Name</label>
        <input type="text" className="likho" placeholder="Full Name" /><br />
        <label htmlFor="name">Email ID</label>
        <input type="email" className="likho" placeholder="abcd123@gmail.com" /><br />
        <label htmlFor="name">Creat Password</label>
        <input type="password" className="likho" placeholder="*****" /><br />
       <Link to="/main"> <input type="button" className="btn-reg" defaultValue="Go" /></Link> <br/>
        <Link to="/Login" className="form-login"><b style={{"color":"rgb(1,2,38)"}}>LOGIN</b></Link>
      </form>
    </div>
  </div><br /><br /><br /><br />
</div>
    
  )
}
