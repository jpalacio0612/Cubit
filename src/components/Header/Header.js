import React, { useState } from 'react'
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useHistory } from 'react-router-dom'
import { useStyles } from './StyledHeader'

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const history = useHistory()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (param) => {
    history.push(param)
    setAnchorEl(null)
  }

  const classes = useStyles()
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            className={classes.title}
            onClick={() => history.push('/')}
          >
            Cubit
          </Typography>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose('/')}>Home</MenuItem>
        <MenuItem onClick={() => handleClose('/questions')}>Preguntas</MenuItem>
      </Menu>
    </div>
  )
}
