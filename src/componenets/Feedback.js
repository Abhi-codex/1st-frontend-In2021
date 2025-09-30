import React from 'react'
import './Feedback.css';

// image imports
import emotionangry from './images/emotionangry.png'
import emotionhappy from './images/emotionhappy.png'
import emotionsad from './images/emotionsad.png'
import emotionnormal from './images/emotionnormal.png'
import Navbar from './Navbar';












export default function Feedback() {

    function onclickmenu(){
        document.getElementById("menu").classList.toggle("icon")
        document.getElementById("nav").classList.toggle("change")

             }

    function clickangry(){
        document.getElementById("angry").classList.toggle("changeangry")
        document.getElementById("sad").classList.remove("changesad")
        document.getElementById("normal").classList.remove("changenormal")
        document.getElementById("happy").classList.remove("changehappy")
    }

    function clicksad(){
        document.getElementById("sad").classList.toggle("changesad")
        document.getElementById("angry").classList.remove("changeangry")
        document.getElementById("normal").classList.remove("changenormal")
        document.getElementById("happy").classList.remove("changehappy")
        }                   
    function clicknormal(){
        document.getElementById("normal").classList.toggle("changenormal")
        document.getElementById("sad").classList.remove("changesad")
        document.getElementById("angry").classList.remove("changeangry")
        document.getElementById("happy").classList.remove("changehappy")
    }        
    function clickhappy(){
        document.getElementById("happy").classList.toggle("changehappy")
        document.getElementById("sad").classList.remove("changesad")
        document.getElementById("normal").classList.remove("changenormal")
        document.getElementById("angry").classList.remove("changeangry")
    }


  return (
    <div>
   




        
  {/* emoji---------------------------------------------------------- */}
  <div className="how-much-you-like">
    <div className="head-feed">
      {" "}
      <h1 className="rateus">Rate us...</h1>
    </div>
    <div className="rateall">
      <button className="img-btn">
        <img
          src={emotionangry}
          alt=""
          className="rate"
          id="angry"
          onClick={clickangry}
        />
      </button>
      <button className="img-btn">
        <img
          src={emotionsad}
          alt=""
          className="rate"
          id="sad"
          onClick={clicksad}
        />
      </button>
      <button className="img-btn">
        <img
          src={emotionnormal}
          alt=""
          className="rate"
          id="normal"
          onClick={clicknormal}
        />
      </button>
      <button className="img-btn">
        <img
          src={emotionhappy}
          alt=""
          className="rate"
          id="happy"
          onClick={clickhappy}
        />
      </button>
    </div>
  </div>
  {/* emoji finsh ---------------------------------------------------------------- */}
  <div className="feedform">
    <div className="paddingall">
      <h1 className="feed-head">Feedback</h1>
      <h3 className="type">Feedback type</h3>
      <div className="switch">
        <div>
          <input type="radio" name="type" id="" className="radio" />
          <label htmlFor="" className="radio-label">
            Comments
          </label>
        </div>
        <div>
          <input type="radio" name="type" id="" className="radio" />
          <label htmlFor="" className="radio-label">
            Suggestions
          </label>
        </div>
        <div>
          <input type="radio" name="type" id="" className="radio" />
          <label htmlFor="" className="radio-label">
            Questions
          </label>
        </div>
      </div>
      <div className="write-feed">
        <h3 className="your-feed">Describe your feedback</h3>
        <textarea
          name=""
          id=""
          placeholder="type something......."
          defaultValue={""}
        />
      </div>
      <div className="nameid">
        <h3 htmlFor="">Fullname</h3>
        <input type="text" placeholder="Name" />
        <br />
        <h3 htmlFor="">Email</h3>
        <input type="email" name="" id="" placeholder="xyz123@gmal.com" />
      </div>
      <br />
      <br />
      <input type="submit" className="submit" />
    </div>
  </div>




    </div>
  )
}
