import axios from "axios"

const WEATHER_API_KEY = 'f20381ae1fbc84fffcd2a4865eeab471'

export const weatherService=(city)=>{
  return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${(city.lat)}&lon=${(city.lng)}&exclude=hourly,minutely&units=metric&appid=${WEATHER_API_KEY}`)
} 