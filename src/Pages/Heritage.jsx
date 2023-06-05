import React from 'react'
import Map from '../Components/Map'
import geoJson from "./heritage-markers"

function Heritage() {

  const lng = -0.0360992
  const lat = 51.5383404
  const zoom = 14.8

  return (
    <>
      <h1>Heritage</h1>
      <Map longitude={lng} latitude={lat} zoom={zoom} geoJson={geoJson}/>
    </>
  )
}

export default Heritage;