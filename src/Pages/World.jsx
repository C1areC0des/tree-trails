import React from 'react'
import Map from '../Components/Map'
import geoJson from "./world-markers.json"

function World() {

  const lng = -0.0468347
  const lat = 51.5343671
  const zoom = 16

  return (
    <>
      <h1>World</h1>
      <Map longitude={lng} latitude={lat} zoom={zoom} geoJson={geoJson}/>
    </>
  )
}

export default World