import './Whychooseus.css'
function whychooseus() {
  return (
    <div className='whychooseuscontainer'>
    <div className='whychooseustext'>
    <p>WHY CHOOSE US</p>
    <h3>Excellence is our priority   </h3>
    <h5>With professionalism our team are able to interprete your thoughts into finished products <br></br>that serves your business needs with propeerly researched data</h5>
    <button className='whychoosebutton'>Meet Our Team</button>
    </div>
    <div className='whychooseimage'>
    <img src={require('./image3.jpg')} alt='Why choose us' style={{height:'350px', width:'430px',borderRadius:'20px',}} />
    </div>
    </div>
  )
}

export default whychooseus