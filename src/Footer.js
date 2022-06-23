import './Footer.css'

function Footer() {
  return (
    <div>
   <div className="footer">
   <ul>
   <li><strong>ABOUT</strong></li>
   <li className='footersubtext'>Company</li>
   <li className='footersubtext'>Commmunity</li>
   <li className='footersubtext'>Careers</li>
   </ul>

   <ul>
   <li><strong>BLOG</strong></li>
   <li className='footersubtext'>Tech</li>
   <li className='footersubtext'>Data</li>
   <li className='footersubtext'>Trends</li>
   </ul>

   <ul>
   <li><strong>PROJECT</strong></li>
   <li className='footersubtext'>Products</li>
   <li className='footersubtext'>Workflow</li>
   </ul>
   <div className='newsletter'>
   <h5>SUBCRIBE</h5>
   <p>Enter your email address to get newsletter on our updated workflow </p>
   <form className='input'>
  <label>
    <input type="text" name="name" placeholder="Email address" style={{marginLeft:'0px'}} />
  </label>
  <input type="submit" value="Submit" style={{backgroundColor:'rgba(133, 116, 84, 0.49)', color:'white', border:'2px solid white'}} className='submit' />
</form>
   </div>
   <p>copyright@adeleyedaniel</p>
  </div>
    </div>
  )
}

export default Footer;