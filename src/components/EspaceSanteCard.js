import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import Logo from '../images/logo_esc.png'
import ContactList from './contactList'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
    borderRadius:5,
    borderWidth: 0,
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {},
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
  },
}))

export default function EspaceSanteCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader avatar={<Avatar alt='EspaceSante' src={Logo} className={classes.large} />} h1='Contactez notre équipe' />
      <ContactList />
    </Card> 
  )
}
