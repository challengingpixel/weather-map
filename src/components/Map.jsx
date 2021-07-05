import moment from 'moment'
import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import citiesData from '../data/bg.json'
import { weatherService } from '../services/WeatherService'
import InfoData from './InfoData'
import WeeklyWeather from './WeeklyWeather'
import {styles} from "../styles/MapViewStyles";

/**
 * Google Map component
 * @returns {JSX.Element}
 * @author petar.todorovski
 */
function Map() {
  // Selected city state
  const [selectedCity, setSelectedCity] = useState(null)

  // Weather state
  const [data, setData] = useState({
    temperature: '',
    humidity: '',
    pressure: '',
    feelsLike: '',
    daily: '',
  })

  // Weather data on click
  const fetchCurrentWeather =(city)=> {
    weatherService(city)
    .then(res=> {
      setData({...data,
        temperature: res.data.current.temp,
        humidity: res.data.current.humidity,
        pressure: res.data.current.pressure,
        feelsLike: res.data.current.feels_like,
        daily: res.data.daily,
      })
      console.log(res.data, 'cela data')
    })
  }

  // Get week day
  const getDay =(dt)=> {
    return moment(dt*1000).format('ddd')
  }

  return (
    <>
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
          // icon={{url: `http://openweathermap.org/img/wn/${getIconbyCity(city)}@2x.png` }}
        />
      ))}

      {/* Map Popup component info weather details  */}
      {selectedCity && (
        <InfoWindow 
          position={{ lat: parseFloat(selectedCity.lat), lng: parseFloat(selectedCity.lng) }}
          onCloseClick={()=> {
            setSelectedCity(null)
          }}
        >
          <InfoData data={data}/>
        </InfoWindow>
      )}
    </GoogleMap>

    {/* Weather component for the next 7 days */}
    {data.daily &&
      <WeeklyWeather data={data} getDay={getDay}/>
    }
  </>
  )
}
// HOF WrappedMap
const WrappedMap = withScriptjs(withGoogleMap(Map))

/**
 * Main map that returns map
 * @returns {JSX.Element}
 */
export default function MainMap() {
  const classes = styles()
  return (
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDxSOukAxfevdUOkNuBbN5LtK0AFi0drBM"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div className={classes.rootContainer} />}
        mapElement={<div className={classes.rootMapElement} />}
      />
  );
}