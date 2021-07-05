import React from 'react'

/**
 * Weather forecast copmponent for 7days
 * @returns {JSX.Element}
 * @author petar.todorovski
 */
export default function WeeklyWeather(props) {
  return (
    <ul style={{textAlign: 'left'}}>
        {props.data.daily.map((day, index)=>(
        <li key={index}>
          <div>{day.clouds}</div>
          {index == 0 ?
            <div>Today</div>: 
            <div>{props.getDay(day.dt)}</div>
          }
          <div>
            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}/>
          </div>
        </li>
      ))}
    </ul>
  )
}
