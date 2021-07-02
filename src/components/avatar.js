import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import faceSmall from '../images/face-small.jpg'
import ContactList from './contactList'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    borderRadius:0,
    borderWidth: 0,
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {},
}))

export default function RecipeReviewCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader avatar={<Avatar alt='Team' src={faceSmall} />} title='Team' subheader='Contactez notre équipe' />
      <ContactList />
    </Card> 
  )
}
