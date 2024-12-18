import React from 'react'
import './About.css'
const About = () => {
  return (
    <>
    <div id='about' className='about-section' >
      <h1>About Me  </h1>
      <div className='row'></div>
      <div className='row1'></div>
      <h3>I'm Muskan Irfan, <span>A Frontend Developer</span></h3>
      <p>I am a passionate frontend developer with expertise in HTML, CSS, JavaScript, and frameworks like React. I specialize in building responsive, user-friendly interfaces and crafting seamless UI/UX designs. With a focus on performance and cross-platform compatibility, I enjoy turning ideas into interactive, engaging web experiences.</p>
    </div>
    <div className='about-infoSection'>
                  {/* ******About-Info Start****** */}
        <div className='about-info'>
            <div className='about-infoData'>
                <ul>
                    <li><span>Birthday:</span> 10 March 2003</li>
                    <li><span>Degree:</span>   Software Engineering</li>
                    <li><span>City:</span>     Peshawar</li>
                </ul>
            </div>
            <div className='about-infoData'>
                <ul>
                    <li><span>Age:</span>   21</li>
                    <li><span>Email:</span> muskanirfan1374@gmail.com</li>
                    <li><span>Phone:</span> 0316-0957417</li>
                </ul>
                 <div className='Action-btn'>
            <button className='about-btn1'>Hire Me</button>
            <button className='about-btn'>My Resume</button>
            </div>
            </div> 
        </div>
                   {/* ******About-Info End****** */}
           
                    {/* ******About-skills Start****** */}
        <div className='about-skills'>
             <div className='about-skill'> <p>HTML</p>        <hr style={{width:"90%"}}/> </div>            
             <div className='about-skill'> <p>CSS</p>         <hr style={{width:"80%"}}/> </div>
             <div className='about-skill'> <p>JavaScript</p>  <hr style={{width:"50%"}}/> </div>
             <div className='about-skill'> <p>React</p>       <hr style={{width:"50%"}}/> </div>
             <div className='about-skill'> <p>C++</p>         <hr style={{width:"90%"}}/> </div>
        </div>
                 {/* ******About-skills End****** */}
    </div>
    </>
  )
}

export default About
