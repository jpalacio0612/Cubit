import React from 'react'
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Typography
} from '@material-ui/core'
import { useStyles } from './StyledUserCard'

export const UserCard = ({ user, handleClick }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} onClick={() => handleClick(user.id)}>
      <CardActionArea className={classes.cardActionArea}>
        <Avatar alt='User Avatar' src={user.avatar} />
        <CardContent>
          <Typography variant='h5' component='h2'>
            {user.first_name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
