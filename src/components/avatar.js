import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import faceSmall from '../images/face-small.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '40ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function AlignItemsList() {
    const classes = useStyles()

    return (
        <List className={classes.root}>
            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar
                        alt='Isisphinx'
                        src={faceSmall}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary='Team'
                    secondary={
                        <React.Fragment>
                            <Typography
                                component='span'
                                variant='body2'
                                className={classes.inline}
                                color='textPrimary'
                            >
                            </Typography>
                            {'Contactez notre équipe'}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    )
}