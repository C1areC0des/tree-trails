import React, { useState } from 'react'
import Map from '../Components/Map'
import MenuButton from '../Components/MenuButton'
import FullPageMenu from '../Components/FullPageMenu'


function Heritage() {

  const mapStyle = "mapbox://styles/flare222/clin8nr9k00mq01pg5ein7xe0"
  const layer = 'heritage-markers'
  const width = window.innerWidth

  let lng = -0.03563
  let lat = 51.53903
  let zoom = 14.78
  
  if (width <= 500) {
    lng = -0.036
    lat = 51.532
    zoom = 13.68
  }

  const maxBounds = [
    [-0.05897928865135782,
      51.529231178567045],
    [-0.020133754104108448,
      51.550375921775924]
  ]

  const [isMenuOpen, setMenuOpen] = useState(false)
  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }
  

  return (
    <>
       
      <h1><MenuButton toggleMenu={toggleMenu} />
      Heritage Tree Trail</h1>
      <FullPageMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} /> 
      <Map longitude={lng} latitude={lat} zoom={zoom} mapStyle={mapStyle} layer={layer} maxBounds={maxBounds}/>
    </>
  )
}

export default Heritage;