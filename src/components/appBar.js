import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    widht: '100%',
    height: 100,

  },
  title: {
    flexGrow: 1,
    paddingLeft: 30,
    paddingTop: 15,
    color: '#FFFFFF',
    height: 65,
  },
}))

export default function EspaceSanteAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
          <Typography variant='h6' fontWeight="fontWeightLight" fontFamily="fontFamily" className={classes.title}>
            Espace Santé
          </Typography>
      </AppBar>
    </div>
  )
}
