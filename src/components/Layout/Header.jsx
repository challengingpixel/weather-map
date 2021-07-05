import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import {styles} from '../../styles/HeaderStyle'

export default function Header() {
    const classes = styles()
    return (
      <AppBar className={classes.rootHeader} position="static">
        <Toolbar>
          <Typography variant="h6">
            Welcome to Bulgaria weather map
          </Typography>
        </Toolbar>
      </AppBar>
    )
}
