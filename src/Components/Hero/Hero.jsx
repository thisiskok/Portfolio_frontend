import React from 'react'
import './Hero.css'
import updated_profile_img from '../../assets/updated_profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={updated_profile_img} alt="" />
      <h1><span>I'm Ivy Hao,</span> full stack developer based in Sweden.</h1>
      <p>I'm a student diving into InfoSec and a full-stack developer who loves coding in Python and creating front-end magic with React, JavaScript and HTML etc.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero