import React from 'react'
import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';




export default function Navbar(
    
) {
  const onclickmenu = () => {
    document.getElementById("menu").classList.toggle("icon");
        document.getElementById("nav").classList.toggle("change");
        
  };

    
  return (

    <>
    {/*hamburger start-------------------------------------------------*/}
    <div id="navigation">
      <div id="menu"  onClick={onclickmenu} >
        <div id="bar1" className="bar" />
        <div id="bar2" className="bar" />
        <div id="bar3" className="bar" />
      </div>
      
      <ul className="nav" id="nav">
        <li className="ham-res">
          <Link to='/main/' className='aofham'>Home</Link>
        </li>
        <li className="ham-res">
          {" "}
          <Link to='about' className='aofham'>About Us</Link>
        </li>
        <li className="ham-res">
          <Link to='feedback' className='aofham'>Feedback</Link>
        </li>
        <li className="ham-res">
          <Link to='contact' className='aofham'>Contact Us</Link>
        </li>
      </ul>
    </div>
    {/*      end   ----------------------------------------------------------*/}
    {/* navbar start ------------------------------------------------------------------*/}
    <div className="nav-non-resp">
      <nav className="">
        <ul className="not-resp">
          
            <Link to="/main/" className='aofnav'><li className="not-resp-li">Home  </li></Link>
        
        
            {" "}
            <Link to="feedback" className='aofnav'>  <li className="not-resp-li">Feedback</li></Link>
          
          
            <Link to='about' className='aofnav'><li className="not-resp-li">About Us</li></Link>
          
          
            <Link to="contact" className="aofnav">
            <li className="not-resp-li">Contact Us</li>
            </Link>
          
        </ul>
        
      </nav>
    </div>
    
             
             
   
    {/* navbarend --------------------------------------------------------------*/}
  </>
  
  )
  }