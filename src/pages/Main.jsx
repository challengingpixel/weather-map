import React from 'react'
import Header from '../components/Layout/Header';
import MainMap from '../components/Map'
import {styles} from "../styles/MainViewStyle";

/**
 * Main screen page
 * @returns {JSX.Element}
 * @author petar.todorovski
 */
export default function Main() {
    const classes = styles()

    return (
        <div className={classes.root}>
            <div className="root-map-wrap">
                <Header/>
                <MainMap/>
            </div>
        </div>
    )
}
