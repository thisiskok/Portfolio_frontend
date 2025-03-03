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
            <p>Currently a Junior Java Developer at Portebel Health</p>
            <p>Hands-on experience in test automation, full-stack development and infosecurity</p>
          </div>
          <div className="about-skills">
            <h3>Tech Stack</h3>
            <div className="tech-category">
              <h4>Frontend</h4>
              <p>React.js · Next.js · Angular · JavaScript/TypeScript</p>
            </div>
            <div className="tech-category">
              <h4>Backend</h4>
              <p>Node.js · Python · Java</p>
            </div>
            <div className="tech-category">
              <h4>Databases</h4>
              <p>PostgreSQL · MySQL</p>
            </div>
            <div className="tech-category">
              <h4>Testing & QA</h4>
              <p>Jest · Playwright · Postman · Pytest</p>
            </div>
            <div className="tech-category">
              <h4>DevOps & Security</h4>
              <p>Docker · Azure · Bitbucket CI/CD · Nmap · Burp Suite</p>
            </div>
            {/* <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div> */}
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
          <h1>4</h1>
          <p>PROJECT COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About