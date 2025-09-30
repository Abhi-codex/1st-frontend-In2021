import React from 'react'
import './Videocard.css'
import logo from './images/logo-branding.png'


export default function Videocard() {
  return (
    <div>
        <div className="moviecard">
  <div className="left">
    <div className="movieimage">
      <img src="https://picsum.photos/400/225" alt="" className="image" />
    </div>
    <div className="btns">
      <a href="">
        <button className="btn-back btnall">Back</button>
      </a>
      <a href="">
        <button className="btn-play btnall">Play</button>
      </a>
    </div>
    <center>
    <div className="responsive">
      <b className="resp">NAME</b>
      <br />
      <b className="resp">1 JAN 2001</b>
      <br />
      <b className="resp">comidy</b>
      <br />
      <b className="resp">Delhi</b>
      <br />
      <b className="resp">5/10</b>
      <br />
    </div>
    </center>
    <div className="logovid">
      <img src={logo} alt="" className="logo1" />
    </div>
  </div>
  <div className="right">
    <h5 className="name">NAME</h5>
    <h5 className="name">1 JAN 2001</h5>
    <h5 className="name">comidy</h5>
    <h5 className="name">Delhi</h5>
    <h5 className="name">5/10</h5>
  </div>
</div>

    </div>
  )
}
