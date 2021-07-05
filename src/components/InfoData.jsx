import React from 'react'

export default function InfoData(props) {
    return (
        <ul style={{textAlign: 'left'}}>
            <li>Temperature: {props.data.temperature}&deg;</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>pressure: {props.data.pressure}hPa</li> 
            <li>Feels like: {props.data.feelsLike}&deg;</li>
        </ul>
    )
}
