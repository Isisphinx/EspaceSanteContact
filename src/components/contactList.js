import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import CallIcon from '@material-ui/icons/Call'
import MailIcon from '@material-ui/icons/Mail'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import ForumIcon from '@material-ui/icons/Forum'
import RecipeReviewCard from './avatar'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function ContactList() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List component='nav' aria-label='main mailbox folders'>
        <RecipeReviewCard />
        <ListItem button>
          <ListItemIcon>
            <ForumIcon />
          </ListItemIcon>
          <ListItemText primary='Chat' secondary='Essayer ça en premier ;-)' />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <CallIcon />
          </ListItemIcon>
          <ListItemText primary='03 20 92 03 67' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary='contact@espacesante.fr' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText primary='Espace Santé' secondary='386 Avenue de Dunkerque 59130 Lambersart - France' />
        </ListItem>
      </List>
    </div>
  )
}
