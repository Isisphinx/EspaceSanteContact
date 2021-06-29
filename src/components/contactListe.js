import React from 'react'
//Pour les composants MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
//pour les icons
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ForumIcon from '@material-ui/icons/Forum';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <ForumIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Chat"
                        secondary="Essayer ça en premier ;-)"
                    />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <CallIcon />
                    </ListItemIcon>
                    <ListItemText primary="09 70 40 80 09" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="team@isis.care" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <LocationOnIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Isisphinx"
                        secondary="386 Avenue de Dunkerque 59130 Lambersart - France"
                    />
                </ListItem>
            </List>
        </div>
    );
}