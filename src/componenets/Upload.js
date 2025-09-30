import React from 'react'
import { Link } from 'react-router-dom';
import './Up.css';
import back from './images/back.png';


export default function Upload() {
  return (
    <div>
       <div id="navsticky1">
      <div className="nav-boll1">
        <Link to='/main/'>
          <img src={back} alt="" className="navimg" />
          </Link>
          <Link to='/main/' className='back'>
          <b> Back</b>
          
        </Link>
      </div>
    </div><div className="all-upload">
    <div className="footer-upload">
      <form className="form-upload1">
        <h1>Upload</h1>
        <br />
        <label htmlFor="name">Video title</label><br />
        <input type="text" className="likho-upload" placeholder="Pls mention parts after title" /><br /><br />
        <label htmlFor="name">Email ID</label><br />
        <input type="email" className="likho-upload" placeholder="abcd123@gmail.com" /><br /><br />
        <label htmlFor="videoup">Video Upload</label><br />
        <input type="file" name id="uploadbtn" /><br /><br />
        <label htmlFor="videoup">Thumbnail Upload</label><br />
        <input type="file" name id="uploadbtn" /><br /><br />
        <input type="checkbox" name="agree" id="check" />
        <span className="agreeterm">Agree with <a href className="agreeterm">term and conditions</a></span>
        <br /><br />
        <input type="button" className="btn-upload" defaultValue="Go" /><br /><br />
        <Link to='../contact' className="form-upload"><b>Contact Us</b></Link>
      </form>
    </div>
  </div></div>
  )
}
