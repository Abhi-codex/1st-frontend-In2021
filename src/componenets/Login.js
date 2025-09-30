import React from 'react'
import './Login.css';
import logo from './images/logo10_19_143030.png'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      
    
    
    <div className="all-login">
    <div className="reg-login"><img src={logo} alt="img-1" className="logo-image-login" /></div>   
    <div className="footer-login">
      <form className="form-loginpage">
        <h1 className='loginh1'>Login</h1><br />
        <label htmlFor="name">Email ID</label><br />
        <input type="email" className="likho-login" placeholder="abcd123@gmail.com" /><br /><br />
        <label htmlFor="name">Password</label><br />
        <input type="password" className="likho-login" placeholder="*****" /><br /><br />
       <Link to='/main'> <input type="button" className="btn-login" defaultValue="Go" /></Link><br /><br />
        <Link to="/" className="form-Register">
          <b> Register</b></Link>
      </form>
    </div>
  </div>
    
  </div>
  )
}
