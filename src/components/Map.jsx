import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import citiesData from '../data/bg.json'

// Map
function Map() {
  // Selected city state
  const [selectedCity, setSelectedCity] = useState(null)

  return <GoogleMap
    defaultZoom={7}
    defaultCenter={{ lat: 42.733883, lng: 25.485830 }}>
    {citiesData.map((city) => (
      <Marker
        key={city.city}
        position={{ lat: parseFloat(city.lat), lng: parseFloat(city.lng) }}
        onClick={()=> {
          setSelectedCity(city)
        }}
      />
    ))}
    {selectedCity && (
      <InfoWindow 
        position={{ lat: parseFloat(selectedCity.lat), lng: parseFloat(selectedCity.lng) }}
        onCloseClick={()=> {
          setSelectedCity(null)
        }}
      >
        <span>city details</span>
      </InfoWindow>
    )}
  </GoogleMap>
}

// HOF WrappedMap
const WrappedMap = withScriptjs(withGoogleMap(Map))

// Main map
export default function MainMap() {
  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDxSOukAxfevdUOkNuBbN5LtK0AFi0drBM"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}