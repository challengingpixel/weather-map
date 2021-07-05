import { GridList, GridListTile, Typography } from '@material-ui/core'
import React from 'react'
import WeatherCard from './WeatherCard'
import {styles} from '../styles/WeeklyWeatherStyle'
/**
 * Weather forecast copmponent for 7days
 * @returns {JSX.Element}
 * @author petar.todorovski
 */
export default function WeeklyWeather(props) {
  const classes = styles()
  return (
    <div className={classes.rootWrap}>
      <GridList className={classes.gridList} cols={2.5}>
        {props.data.daily.map((day, index)=>(
          <GridListTile key={index} style={{width: '200px', height: '100%'}}>
            <WeatherCard getDay={props.getDay(day.dt)} day={day} index={index}/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
