import React, { useRef, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN 

const Marker = ({ onClick, children, feature }) => {
  const _onClick = () => {
    onClick(feature.properties.message)
  }

  return (
    <button onClick={_onClick} className="marker">
      {children}
      {feature.properties.title}
    </button>
  )
}

function Map({ longitude, latitude, zoom, geoJson }) {
  const mapContainer = useRef(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [longitude, latitude],
      zoom: zoom
    })

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true,
      })
    )

    // Render custom marker components
    geoJson.features.forEach((feature) => {
      // Create a React ref
      const ref = React.createRef()
      // Create a new DOM node and save it to the React ref
      ref.current = document.createElement("div")
      // Render a Marker Component on our new DOM node
      createRoot(ref.current).render(
        <Marker onClick={markerClicked} feature={feature} />
      )

      // Create a Mapbox Marker at our new DOM node
      new mapboxgl.Marker(ref.current)
        .setLngLat(feature.geometry.coordinates)
        .addTo(map)
    })

    // Clean up on unmount
    return () => map.remove()

  }, [longitude, latitude, zoom, geoJson.features])

const markerClicked = (title) => {
  window.alert(title)
}


    return (
      <div>
        <div ref={mapContainer} className="map-container" />
      </div>
      )
}

export default Map