import React from 'react'
import "./Home.css";
const Home = () => {
  return (
    <div className="Home" id="Home">
        <div className="containtBox"> 
            <h2> Great <span>Product</span> is</h2>
            <h1>built by great <span>teams</span></h1>
             <h3> You imagine. <span> we create </span></h3>
             <h4>Web Design</h4>
             <p>Our agency web design studio creates marketing websites and landing pages that help to
                tell brand stories, increase  conversion and build trust. 
             </p>
             <div className="btn">
             <button className="nav-btn">Request a Proposal</button>
             <a href="#Contact"> Contact Us </a>
         </div>
        </div>
        <div className="imgContainer">
        <img src="assets/image2.png" alt=""/>
        
        </div>
        </div>
        
            
  )

}

export default Home