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
    maxWidth: 360,
    borderRadius:5,
    borderWidth: 0,
    backgroundColor: theme.palette.background.paper,
    marginLeft: '37%',
  },
  avatar: {},
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
  },
}))

export default function IsisCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader avatar={<Avatar alt='Team' src={Logo} className={classes.large} />} title='Team' subheader='Contactez notre équipe' />
      <ContactList />
    </Card> 
  )
}
