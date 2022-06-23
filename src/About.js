// import React from 'react'
// import img from './image2.jpeg'
import './About.css'


function About() {
  return (
    <div className='aboutussection'>
    <div className='aboutus'>
    <img src={require('./image2.jpg')} alt='Aboutus' style={{height:'350px', width:'420px',borderRadius:'20px',}} />
    </div>
    <div className='aboutustext'>
    <p>ABOUT US</p>
    <h3>We prioritize project timeline </h3>
    <h5>Fastland is known for its excellence,speed and productivity when it comes to task tracking<br></br> and completion with its professional and it's well protocoled process</h5>
    <button className='aboutbutton'>Learn More</button>
    </div>
    </div>
  )
}

export default About
