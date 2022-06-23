import './Features.css'
import { AiTwotoneSetting } from 'react-icons/ai';
import { AiOutlineRadiusSetting } from 'react-icons/ai';


function Features(){
    return(
        <div>
        <h2 className='Features'>Provided Features</h2>

       <div className='cardcontainer'>
       <div className='card1'>
       <AiTwotoneSetting size={40} color='rgba(166, 118, 21)' style={{marginBottom:'10px',}}/>
       <h4 className='goalhead'>Set a goal</h4>
       <p className='goalbody'>Set a goal/achievement to create a focused workprocess and never leave a project unfinished</p>
       </div>

       <div className='card2'>
       <AiOutlineRadiusSetting size={40} color='rgba(166, 118, 21)' style={{marginBottom:'10px',}}/>
       <h4 className='trackhead'>Track Project</h4>
       <p className='trackbody'>Monitor the progress rate of your project with live report</p>
       </div>

       <div className='card1'>
       <AiTwotoneSetting size={40} color='rgba(166, 118, 21)' style={{marginBottom:'10px',}}/>
       <h4 className='goalhead'>Set a goal</h4>
       <p className='goalbody'>Set a goal/achievement to create a focused workprocess and never leave a project unfinished</p>
       </div>

       
       <div className='card1'>
       <AiTwotoneSetting size={40} color='rgba(166, 118, 21)' style={{marginBottom:'10px',}}/>
       <h4 className='goalhead'>Set a goal</h4>
       <p className='goalbody'>Set a goal/achievement to create a focused workprocess and never leave a project unfinished</p>
       </div>

        <div className='card1'>
       <AiTwotoneSetting size={40} color='rgba(166, 118, 21)' style={{marginBottom:'10px',}}/>
       <h4 className='goalhead'>Set a goal</h4>
       <p className='goalbody'>Set a goal/achievement to create a focused workprocess and never leave a project unfinished</p>
       </div>

       <div className='card1'>
       <AiTwotoneSetting size={40} color='rgba(166, 118, 21)' style={{marginBottom:'10px',}}/>
       <h4 className='goalhead'>Set a goal</h4>
       <p className='goalbody'>Set a goal/achievement to create a focused workprocess and never leave a project unfinished</p>
       </div>
       </div>

        

        </div>
    )
}
export default Features;