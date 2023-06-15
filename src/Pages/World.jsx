import React, { useState } from 'react'
import Map from '../Components/Map'
import MenuButton from '../Components/MenuButton'
import FullPageMenu from '../Components/FullPageMenu'

function World() {
  const mapStyle = 'mapbox://styles/flare222/cliptd4p400q801r17p0r8vym'
  const layer = 'world-markers'
  const width = window.innerWidth

  let lng = -0.047
  let lat = 51.534
  let zoom = 16.13
  
  if (width <= 500) {
    lng = -0.047
    lat = 51.533
    zoom = 14.40
  }

  const maxBounds = [
    [-0.06690482208617254,
      51.5257601687876],
    [-0.0306663703949539,
      51.54541492559309]
  ]

  const [isMenuOpen, setMenuOpen] = useState(false)
  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <h1><MenuButton toggleMenu={toggleMenu} />World Tree Trail</h1>
      <FullPageMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Map longitude={lng} latitude={lat} zoom={zoom} mapStyle={mapStyle} layer={layer} maxBounds={maxBounds}/>
    </>
  )
}

export default World