import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const FullPageMenu = ({ isOpen, toggleMenu }) => {
  if (!isOpen) return null

  return (
    <div className='full-page-menu'
    >
      <button onClick={toggleMenu} aria-label='close button' className='icon-btn close'>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <nav className='links-list'>
        <Link to='/'>Home</Link>
        <Link to='/heritage-trees'>Heritage Trail</Link>
        <Link to='/world-trees'>World Trail</Link>
        <a href="https://www.buymeacoffee.com/C1areC0des">Buy me a coffee</a>
        <a href="https://www.towerhamlets.gov.uk/lgnl/leisure_and_culture/parks_and_open_spaces/victoria_park/park_trails.aspx">Source Material</a>
      </nav>
    </div>
  )
}

export default FullPageMenu
