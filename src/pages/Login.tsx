
import React from 'react'
import { GoogleLogin, CredentialResponse } from '@react-oauth/google'
import {
  Box, Avatar, Paper,
  Typography, Container, CssBaseline, Grid, Stack, useTheme
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import logo from './whosdriving-low-resolution-logo-color-on-transparent-background.png'

const Login = (props :any) => {
  const { loginAuthUser } = props
  const theme = useTheme()

  const onSuccessLogin = (credentialResponse : CredentialResponse) => {
    loginAuthUser(credentialResponse?.credential ? credentialResponse.credential : '')
  }

  const onErrorLogin = () => {
    loginAuthUser('')
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper sx={{
        m: 3,
        minWidth: 330
      }}>
        <Grid container>
          <Grid item xs={2}>
            <Avatar sx={{ m: 1.5, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography variant="h6" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
              Sign in
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box component="img"
                sx={{
                  width: 230,
                  m: 0,
                  p: 0,
                  ml: 5
                }}
                src={logo}
                alt='whosdriving' />
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={2} sx={{ alignItems: 'center' }}>
              <GoogleLogin
                onSuccess={onSuccessLogin}
                onError={onErrorLogin}
                size="large"
                text="signin_with"
                shape="pill"
                width="230"
                theme={ theme.palette.mode === 'dark' ? 'filled_black' : 'outline' }
              />
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default Login
