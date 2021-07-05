import React from 'react'
import { Card, CardContent, CardMedia, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import {styles} from '../styles/WeatherCardStyle'

/**
 * Weather card used to display weather informations
 * @returns {JSX.Element}
 * @author petar.todorovski
 */

export default function WeatherCard(props) {
  const classes = styles()
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Weather icon"
        height="140"
        image={`http://openweathermap.org/img/wn/${props.day ? props.day.weather[0].icon: props.data.icon}@2x.png`}
        title="Weather icon"
      />
      <CardContent>
        {props.getDay && <Typography variant="h5" component="h2">
          {props.getDay}
        </Typography>}
        <List className={classes.rootInfoList}>
          <ListItem disableGutters dense={false}>
            <ListItemText
              primary={
                <Typography variant="body2" color="textSecondary" component="span">
                  Temperature: {props.day ? props.day.temp.day: props.data.temperature}&deg;
                </Typography>
              }
            />
          </ListItem>

          {props.day && <ListItem disableGutters>
            <ListItemText
              primary={
                <Typography variant="body2" color="textSecondary" component="span">
                  Evening temp: {props.day.temp.eve}&deg;
                </Typography>
              }
            />
          </ListItem>}
          
          <ListItem disableGutters>
            <ListItemText
              primary={
                <Typography variant="body2" color="textSecondary" component="span">
                  Clouds: {props.day ? props.day.clouds: props.data.clouds}%
                </Typography>
              }
            />
          </ListItem>

          <ListItem disableGutters>
            <ListItemText
              primary={
                <Typography variant="body2" color="textSecondary" component="span">
                  Pressure: {props.day ? props.day.pressure: props.data.pressure} hPa
                </Typography>
              }
            />
          </ListItem>

          <ListItem disableGutters>
            <ListItemText
              primary={
                <Typography variant="body2" color="textSecondary" component="span">
                  Humidity: {props.day ? props.day.humidity: props.data.humidity}%
                </Typography>
              }
            />
          </ListItem>

          <ListItem disableGutters>
            <ListItemText
              primary={
                <Typography variant="body2" color="textSecondary" component="span">
                  Wind speed: {props.day ? props.day.wind_speed: props.data.windSpeed}%
                </Typography>
              }
            />
          </ListItem>

          {props.day && <ListItem disableGutters>
            <ListItemText
              primary={
                <Typography variant="body2" color="textSecondary" component="span">
                  Rain: {props.day.rain ? props.day.rain: 0}%
                </Typography>
              }
            />
          </ListItem>}
          
        </List>
      </CardContent>
    </Card>
  )
}
