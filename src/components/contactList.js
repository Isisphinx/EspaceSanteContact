import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import CallIcon from '@material-ui/icons/Call'
import MailIcon from '@material-ui/icons/Mail'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import ForumIcon from '@material-ui/icons/Forum'

function btnChat(){
  window.$chatwoot.toggle();
}

export default function ContactList() {
  return (
    <List component='nav' aria-label='main mailbox folders'>
      <ListItem button component='a' href='#' onClick={btnChat}>
        <ListItemIcon>
          <ForumIcon color='primary' />
        </ListItemIcon>
        <ListItemText primary='Chat' secondary='Essayer ça en premier ;-)' />
      </ListItem>
      <Divider />
      <ListItem button component='a' href='tel:+33320920367'>
        <ListItemIcon>
          <CallIcon color='primary' />
        </ListItemIcon>
        <ListItemText primary='03 20 92 03 67' />
      </ListItem>
      <ListItem button component='a' href='mailto:contact@espacesante.fr'>
        <ListItemIcon>
          <MailIcon color='primary' />
        </ListItemIcon>
        <ListItemText primary='contact@espacesante.fr' />
      </ListItem>
      <ListItem button component='a' href='https://goo.gl/maps/xqZPLa28KxB2'>
        <ListItemIcon>
          <LocationOnIcon color='primary' />
        </ListItemIcon>
        <ListItemText primary='Espace Santé' secondary='386 Avenue de Dunkerque 59130 Lambersart - France' />
      </ListItem>
    </List>
  )
}
