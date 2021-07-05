import React from 'react'
import { Card, CardContent, CardMedia, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import {styles} from '../styles/WeatherCardStyle'

export default function WeatherCard(props) {
  const classes = styles()
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Weather icon"
        height="140"
        image={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`}
        title="Weather icon"
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.getDay}
        </Typography>
        <List className={classes.rootInfoList}>
          <ListItem disableGutters dense={false}>
            <ListItemText
              primary={
                <Typography variant="body2" color="textSecondary" component="span">
                  Day temp: {props.day.temp.day}&deg;
                </Typography>
              }
            />
          </ListItem>

          <ListItem disableGutters>
            <ListItemText
              primary={
                <Typography variant="body2" color="textSecondary" component="span">
                  Evening temp: {props.day.temp.eve}&deg;
                </Typography>
              }
            />
          </ListItem>
          
          <ListItem disableGutters>
            <ListItemText
              primary={
                <Typography variant="body2" color="textSecondary" component="span">
                  Clouds: {props.day.clouds}%
                </Typography>
              }
            />
          </ListItem>

          <ListItem disableGutters>
            <ListItemText
              primary={
                <Typography variant="body2" color="textSecondary" component="span">
                  Pressure: {props.day.pressure} hPa
                </Typography>
              }
            />
          </ListItem>

          <ListItem disableGutters>
            <ListItemText
              primary={
                <Typography variant="body2" color="textSecondary" component="span">
                  Humidity: {props.day.humidity}%
                </Typography>
              }
            />
          </ListItem>

          <ListItem disableGutters>
            <ListItemText
              primary={
                <Typography variant="body2" color="textSecondary" component="span">
                  Rain: {props.day.rain ? props.day.rain: 0}%
                </Typography>
              }
            />
          </ListItem>
          
        </List>
      </CardContent>
    </Card>
  )
}
