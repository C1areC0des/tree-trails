import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const MenuButton = ({ toggleMenu }) => (
  <button onClick={toggleMenu} aria-label="Menu Button" className='icon-btn'>
    <FontAwesomeIcon icon={faBars} />
  </button>
)

export default MenuButton
