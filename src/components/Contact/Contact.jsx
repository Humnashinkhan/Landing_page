import React from 'react'
import "./Contact.css";
import { useState } from 'react';
const Contact = () => {
    const [message,setMessage] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)
    }
  return (
    <div className="Contact" id="Contact">
        <div className="center">
            <h2>Get in touch with us </h2>
            <h1>Let's Connect-Reach Out Today!</h1>
            <div className="left">
            <img src="assets/image3.jpg" alt=""/>
        </div>
        </div>
        <div className="right">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Mobile Number"/>
                <input type="text" placeholder="Enter your Subject"/>
                <textarea placeholder="Message"></textarea>
                 <div className="send">
                 <button type="submit">Send</button> 
                  {message && <span>Thanks, I will reply ASAP !!</span>}  
                 </div>
                 
            </form>
        </div>
    </div>
  )
}

export default Contact