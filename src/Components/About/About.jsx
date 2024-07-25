import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/aboutprofile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt=""/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Currently a fullstack developer intern at LuDay AB</p>
            <p>Hands-on experience in frontend development and implementing CI/CD pipelines to streamline deployment processes</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>Javascript</p><hr style={{width:"90%"}}/></div>
            <div className="about-skill"><p>Next JS</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>Python</p><hr style={{width:"90%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5</h1>
          <p>PROJECT COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About