import React from 'react'
import './About.css';
import logo2 from './images/logo-branding.png';
import man from './images/man-png-30117.png';
import insta from './images/instagram-line.png';
import linkdin from './images/linkedin-fill.png';
import git from './images/github-fill.png';
import mail from './images/mail-line.png';





export default function About() {
  return (
    

      <div>
        {/* cards start-------------------------------------------------------------------------------- */}
        <div className="logowith-details">
          <img src={logo2} alt="" className="logo" />
        </div>
        <div className="about">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt culpa facilis ea explicabo quasi repellat nulla, dolores mollitia necessitatibus labore nobis, quis repudiandae placeat, excepturi veritatis est minus hic quod. Officiis iure cumque, qui laboriosam animi obcaecati eaque dolore reprehenderit natus, adipisci at minima fugiat! Accusantium quisquam magnam alias reprehenderit quos corporis quod minima delectus atque necessitatibus quaerat, autem ipsa in tempora dolores. Labore laborum neque consequuntur vitae expedita sapiente eaque exercitationem fuga explicabo dignissimos voluptatem a, aut tempore ratione id dolore possimus quaerat nisi nihil laboriosam. Voluptatibus, tempora quos! Aliquid blanditiis dicta aut quis soluta obcaecati atque inventore ipsum?
          </p>
        </div><br />
        <div className="cards">
          <div className="card1">
            <div className="upper">
              <div className="picdiv">
                <img src={man} alt="" className="pic" />
                <b>Abhey tyagi</b>
              </div>
              <div className="logolinks">
                <a href><img src={insta} alt="" className="insta" /></a>
                <a href> <img src={linkdin} alt="" className="linkdin" /></a>
                <a href> <img src={git} alt="" className="git" /></a>
                <a href> <img src={mail} alt="" className="mail" /></a>
              </div>
            </div>
            <div className="lower">
              <h3>About</h3> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa repellat quisquam iusto quas! Quae earum, quam nesciunt expedita excepturi amet!</p>
              <h3>Portfolio link</h3>
              <a href>Lorem ipsum dolor sit amet.</a>
            </div>
          </div>
          <div className="card2">
            <div className="upper">
              <div className="picdiv">
                <img src={man} alt="" className="pic" />
                <b>Abhey tyagi</b>
              </div>
              <div className="logolinks">
                <a href><img src={insta} alt="" className="insta" /></a>
                <a href> <img src={linkdin} alt="" className="linkdin" /></a>
                <a href> <img src={git} alt="" className="git" /></a>
                <a href> <img src={mail} alt="" className="mail" /></a>
              </div>
            </div>
            <div className="lower">
              <h3>About</h3> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa repellat quisquam iusto quas! Quae earum, quam nesciunt expedita excepturi amet!</p>
              <h3>Portfolio link</h3>
              <a href>Lorem ipsum dolor sit amet.</a>
            </div>
          </div>
          <div className="card3">
            <div className="upper">
              <div className="picdiv">
                <img src={man} alt="" className="pic" />
                <b>Abhey tyagi</b>
              </div>
              <div className="logolinks">
                <a href><img src={insta} alt="" className="insta" /></a>
                <a href> <img src={linkdin} alt="" className="linkdin" /></a>
                <a href> <img src={git} alt="" className="git" /></a>
                <a href> <img src={mail} alt="" className="mail" /></a>
              </div>
            </div>
            <div className="lower">
              <h3>About</h3> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa repellat quisquam iusto quas! Quae earum, quam nesciunt expedita excepturi amet!</p>
              <h3>Portfolio link</h3>
              <a href>Lorem ipsum dolor sit amet.</a>
            </div>
          </div>
        </div>
    



    </div>
  )
}
