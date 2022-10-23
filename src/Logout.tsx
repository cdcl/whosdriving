
import React from 'react'
import { Avatar, Box, Tooltip } from '@mui/material'
import { googleLogout } from '@react-oauth/google'

const Logout = (props :any) => {
  const { AuthUser, loginAuthUser } = props

  const onLogout = () => {
    googleLogout()
    loginAuthUser('')
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', ml: 0 }}>
      { AuthUser !== undefined &&
      <Tooltip title={'Logout ' + AuthUser.name}>
        <Avatar alt={AuthUser.name} src={AuthUser.picture} onClick={() => { onLogout() }} />
      </Tooltip>
      }
    </Box>
  )
}

export default Logout
