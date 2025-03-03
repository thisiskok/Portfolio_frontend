import React from 'react'
import './Hero.css'
import updated_profile_img from '../../assets/updated_profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      {/* <img src={updated_profile_img} alt="" /> */}
      <h1><span>I'm Ivy Hao,</span> based in Sweden.</h1>
      <p>I hold a Master's in Information Security from Stockholm University and have experience in full-stack development. Now, I’m Seeking a Test Automation role to apply my technical skills.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        {/* <div className="hero-resume">My resume</div> */}
      </div>
    </div>
  )
}

export default Hero