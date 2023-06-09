import React, { useRef, useEffect } from 'react'
import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN 

function Map({ longitude, latitude, zoom, mapStyle, layer, maxBounds }) {
  const mapContainer = useRef(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyle,
      center: [longitude, latitude],
      zoom: zoom,
      minZoom: 13.5,
      maxBounds: maxBounds
    })

    map.on('click', (event) => {
      console.log(event.point)
      // If the user clicked on one of your markers, get its information.
      const features = map.queryRenderedFeatures(event.point, {
        layers: [layer]
      })
      if (!features.length) {
        return
      }
      console.log(features.length)
      const feature = features[0]

      const popup = new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(feature.geometry.coordinates)
      .setHTML(
        `<h2>${feature.properties.treeName}</h2>
        <i><h2>${feature.properties.latinTreeName}</h2></i>
        <p>${feature.properties.description}</p>
        ${feature.properties.activity ? '<h3>Activity</h3><p>' + feature.properties.activity + '</p>' : ''}
        ${feature.properties.directions ? `<h3>Directions</h3><p>${feature.properties.directions}</p>` : ''}`
      )
      .addTo(map)
    })

    // Add the icon to center the map on the users's location
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

    // Clean up on unmount
    return () => {
      map.off('click') // Remove the event listener
      map.remove() // Clean up the map instance
    }

  }, [longitude, latitude, zoom, layer, mapStyle, maxBounds])

    return (
      <>
        <div ref={mapContainer} className="map-container" />
      </>
      )
}

export default Map