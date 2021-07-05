import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import citiesData from '../data/bg.json'

// Map
function Map() {
  const API_KEY = 'f20381ae1fbc84fffcd2a4865eeab471'
  // Selected city state
  const [selectedCity, setSelectedCity] = useState(null)
  const [data, setData] = useState({
    temperature: '',
    humidity: '',
    pressure: '',
    feelsLike: '',
    daily: ''
  })
  const [icon, setIcon] = useState({})
  
  const fetchCurrentWeather =(city)=> {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${(city.lat)}&lon=${(city.lng)}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
    .then(res=> {
      setData({...data, 
        temperature: res.data.current.temp,
        humidity: res.data.current.humidity,
        pressure: res.data.current.pressure,
        feelsLike: res.data.current.feels_like,
        daily: res.data.daily
      })
    })
  }

  useEffect(() => {
    citiesData.map((city)=> {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${(city.lat)}&lon=${(city.lng)}&appid=6f287b6d54bee8794a41d7776558222c&units=metric`)
      .then(res=> {
        setIcon(res.data.weather[0].icon)
      })
    })
  }, [])

  return (
    <div>
      <GoogleMap
      defaultZoom={7}
      defaultCenter={{ lat: 42.733883, lng: 25.485830 }}>
      {citiesData.map((city) => (
        <Marker
          key={city.id}
          position={{ lat: parseFloat(city.lat), lng: parseFloat(city.lng) }}
          onClick={()=> {
            setSelectedCity(city);
            fetchCurrentWeather(city);
          }}
          // icon={{url: `http://openweathermap.org/img/wn/${icon}@2x.png` }}
        />
      ))}
      {selectedCity && (
        <InfoWindow 
          position={{ lat: parseFloat(selectedCity.lat), lng: parseFloat(selectedCity.lng) }}
          onCloseClick={()=> {
            setSelectedCity(null)
          }}
        >
          <ul style={{textAlign: 'left'}}>
            <li>Temperature: {data.temperature}&deg;</li>
            <li>Humidity: {data.humidity}%</li>
            <li>pressure: {data.pressure}hPa</li> 
            <li>Feels like: {data.feelsLike}&deg;</li>
            <li>Icon: {icon}</li>
          </ul>
        </InfoWindow>
      )}
    </GoogleMap>
  </div>
  )
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