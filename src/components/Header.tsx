
import React from 'react'
import { googleLogout } from '@react-oauth/google'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Avatar,
  Box,
  Tooltip
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { SwitchModeButton } from './SwitchModeButton'

const Logout = (props :any) => {
  const { AuthUser, loginAuthUser } = props

  const onLogout = () => {
    googleLogout()
    loginAuthUser('')
  }

  return (
    <Box sx={{ m: 0, p: 0 }}>
      { AuthUser === undefined && <Avatar alt='nobody' /> }
      { AuthUser !== undefined &&
      <Tooltip title={'Logout ' + AuthUser.name}>
        <Avatar alt={AuthUser.name} src={AuthUser.picture} onClick={() => { onLogout() }} />
      </Tooltip>
      }
    </Box>
  )
}

const Header = (props :any) => {
  const { AuthUser, loginAuthUser } = props

  return (
    <Container component="main" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Whosdriving
          </Typography>
          <SwitchModeButton />
          <Logout AuthUser={AuthUser} loginAuthUser={loginAuthUser} />
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default Header
