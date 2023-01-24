import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='Nav'>
      <img src="" alt="" />
      <h2>Brian Njoroge</h2>
      <ul className='SocialMediaPlatforms'>
        <li><Link to=''>Twitter</Link></li>
        <li><Link to=''>Facebook</Link></li>
        <li><Link to=''>Instagram</Link></li>
        <li><Link to=''>Skype</Link></li>
        <li><Link to=''>LinkedIn</Link></li>
      </ul>
      <ul className='Navigation'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='about'>About</Link></li>
          <li><Link to='services'>Services</Link></li>
          <li><Link to='portfolio'>Portfolio</Link></li>
          <li><Link to='contact'>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav