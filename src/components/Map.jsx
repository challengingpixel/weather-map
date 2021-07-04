import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import citiesData from '../data/bg.json'

// Map
function Map() {
  const API_KEY = '6f287b6d54bee8794a41d7776558222c'
  // Selected city state
  const [selectedCity, setSelectedCity] = useState(null)
  const [data, setData] = useState({
    temperature: '',
    humidity: '',
    pressure: '',
    feelsLike: '',
    // icon: ''
  })
  const [icon, setIcon] = useState({})
  
  const fetchCurrentWeather =(city)=> {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${(city.lat)}&lon=${(city.lng)}&appid=${API_KEY}&units=metric`)
    .then(res=> {
      console.log(res.data, 'dataaaaa')
      setData({...data, 
        temperature: res.data.main.temp,
        humidity: res.data.main.humidity,
        pressure: res.data.main.pressure,
        feelsLike: res.data.main.feels_like
      })
    })
    console.log(data.temperature, 'tamparatumparaaaaaaa')
  }

  useEffect(() => {
    citiesData.map((city)=> {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${(city.lat)}&lon=${(city.lng)}&appid=6f287b6d54bee8794a41d7776558222c&units=metric`)
      .then(res=> {
        // setData({...data, icon: res.data.weather[0].icon})
        setIcon(res.data.weather[0].icon)
      })
    })
  }, [])

  console.log(icon, 'iconnnnnnnnn nadvorrrr skrosss')

  return <GoogleMap
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