import React from 'react'
import './Contact.css';
import mail from './images/mail-line.png';





export default function Contact() {
  return (
    <div className='supbox'>
    

    <div className="box">
     <div className="text">
        you can contact us on our mail we will reply you as soon as possible
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, doloremque!
        <br /><br />
        pls refer email link below
     
     </div>
     <div className="mail-me">
      <img src={mail} alt="" className='mail-image'/><h5 className='h5tag'>  <a href="mailto:abheyschool123@gmail.com" target="blank" className='clickme'>Click Me</a></h5>
     </div>
    </div>

    



    </div>
  )
}
