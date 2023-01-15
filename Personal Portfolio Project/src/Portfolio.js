import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <main className='Main'>
      <article className='Portfolio'>
        <h2 className='PageTitle'>Portfolio</h2>
        <p>The following is a collection of some of my work overtime:</p>
        <ul className='MyPortfolio'>
          <li><Link to='https://randompasswordgeneratorkn.netlify.app'><img src="" alt="" /></Link><br />Random Password Generator</li>
          <li><Link to='https://digitalwatchkn.netlify.app'><img src="" alt="" /></Link><br />Digital Watch</li>
          <li><Link to='https://dynamiccalendar.netlify.app'><img src="" alt="" /></Link><br />Dynamic Calendar</li>
        </ul>
      </article>
    </main>
  )
}

export default Portfolio