import React, { useState } from 'react'
import './Home.css';
import logo from './images/logo-branding.png'
import left from './images/arrow-left-s-line.png'
import right from './images/arrow-right-s-line.png'
import { Link } from 'react-router-dom';


export default function Home() {



const [Scroll, setScroll] = useState("scrollLeft += 500")




  // const buttonRight = document.getElementById('right');
  // const buttonLeft = document.getElementById('left');

  // buttonRight.onclick = function () {
  //   document.getElementById('carouselbox').scrollLeft += 500;
  // };
  // buttonLeft.onclick = function () {
  //   document.getElementById('carouselbox').scrollLeft -= 500;
  // };
  


  return (
    <div>







<>

  {/* logo */}
  <div className="logo">
    <img src={logo} alt="logo" className="logo" />
  </div>
  {/* carousr start -------------------------------------------*/}
  <div className="carousel" id="carousel">
    <div className="carouselbox" id="carouselbox">
      {/* data inside  */}
      <img
        src="https://picsum.photos/id/237/400/220"
        alt=""
        className="dataslide"
      />
      <img
        src="https://picsum.photos/id/238/400/220"
        alt=""
        className="dataslide"
      />
      <img
        src="https://picsum.photos/id/239/400/220"
        alt=""
        className="dataslide"
      />
      <img
        src="https://picsum.photos/id/231/400/220"
        alt=""
        className="dataslide"
      />
      <img
        src="https://picsum.photos/id/232/400/220"
        alt=""
        className="dataslide"
      />
      <img
        src="https://picsum.photos/id/233/400/220"
        alt=""
        className="dataslide"
      />
      <img
        src="https://picsum.photos/id/234/400/220"
        alt=""
        className="dataslide"
      />
      <img
        src="https://picsum.photos/id/235/400/220"
        alt=""
        className="dataslide"
      />
      <img
        src="https://picsum.photos/id/236/400/220"
        alt=""
        className="dataslide"
      />
    </div>
    <img
      src={right}
      alt=""
      className="slideright sliderbutton"
      id="right"
      onclick={''}
    />
    <img
      src={left}
      alt=""
      className="slideleft sliderbutton"
      id="left"
      // onclick={scrollleft}
    />
  </div>
  {/* carouser end -------------------------------------*/}
  {/* footer start -----------------------------------------*/}
  <footer className="category">
    <Link to="bollywood" className=' footeroption'>
      <div className="bollywood ">
        <h1>Bollywood</h1>
      </div>
    </Link>
    <Link to="hollywood" className=' footeroption'>
      <div className="hollywood">
        <h1>Hollywood</h1>
      </div>
    </Link>
    <Link to="web" className=' footeroption'>
      <div className="webseries">
        <h1>Webseries</h1>
      </div>
    </Link>
    <Link to="local" className=' footeroption'>
      <div className="local">
        <h1>Local</h1>
      </div>
    </Link>
    <Link to="upload" className=' footeroption'>
      <div className="uploads">
        <h1>Uploads</h1>
      </div>
    </Link>
  </footer>
</>






    </div>
  )
}
