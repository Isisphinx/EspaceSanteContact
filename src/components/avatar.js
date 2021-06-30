import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import faceSmall from '../images/face-small.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '40ch',
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {},
}))

export default function RecipeReviewCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader avatar={<Avatar alt='Isisphinx' src={faceSmall} />} title='Isisphinx' subheader='Contactez notre équipe' />
    </Card>
  )
}
