import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Typography
} from '@material-ui/core'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../utils/baseUrl'
import { useStyles } from './StyledUserDetails'

export const UserDetails = ({ userId }) => {
  const classes = useStyles()
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    Axios({
      method: 'get',
      url: `${BASE_URL}users/${userId}`
    })
      .then((response) => {
        setUserInfo(response.data.data)
      })
      .catch((error) => console.log(error))
  }, [userId])

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.cardActionArea}>
        <Avatar alt='User Avatar' src={userInfo.avatar} />
        <CardContent>
          <Typography variant='h5' component='h2'>
            {userInfo.first_name} {userInfo.last_name}
          </Typography>
          <Typography variant='subtitle1' component='h2'>
            {userInfo.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
