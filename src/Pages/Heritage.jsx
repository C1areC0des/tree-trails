import React from 'react'
import Map from '../Components/Map'


function Heritage() {

  const mapStyle = "mapbox://styles/flare222/clin8nr9k00mq01pg5ein7xe0"
  const layer = 'heritage-markers'
  const width = window.innerWidth

  let lng = -0.03563
  let lat = 51.53903
  let zoom = 14.78
  
  if (width <= 500) {
    lng = -0.03407
    lat = 51.53895
    zoom = 14.2
  }
  

  return (
    <>
      <h1>Heritage Tree Trail</h1>
      <Map longitude={lng} latitude={lat} zoom={zoom} mapStyle={mapStyle} layer={layer}/>
    </>
  )
}

export default Heritage;