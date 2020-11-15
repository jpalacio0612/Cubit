import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, Modal } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import { useStyles } from './StyledHome'
import { UserCard } from '../UserCard'
import { UserDetails } from '../UserDetails'

export const Home = () => {
  const classes = useStyles()
  const [users, setUsers] = useState([])
  const [userId, setUserId] = useState('')
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)
  const [open, setOpen] = useState(false)

  axios.interceptors.request.use((req) => {
    req.headers = { 'cubit-test': 'Jonathan' }
    return req
  })

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://reqres.in/api/users?page=${page}`
    })
      .then((response) => {
        setUsers(response.data.data)
        setTotalPages(response.data.total_pages)
      })
      .catch((error) => console.log(error))
  }, [page])

  const handleChange = (event, value) => {
    setPage(value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleClick = (userId) => {
    setUserId(userId)
    setOpen(true)
  }

  return (
    <div className={classes.home}>
      <Grid container justify='center' alignItems='center' spacing={2}>
        {users.map((user) => (
          <Grid key={user.id} item>
            <UserCard user={user} handleClick={handleClick} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        className={classes.pagination}
        count={totalPages}
        page={page}
        onChange={handleChange}
        color='primary'
        size='large'
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <UserDetails userId={userId} />
      </Modal>
    </div>
  )
}
