
import React from 'react'
import { GoogleLogin, CredentialResponse } from '@react-oauth/google'
import {
  Box,
  Typography
} from '@mui/material'

const Login = (props :any) => {
  const { loginAuthUser } = props

  const onSuccessLogin = (credentialResponse : CredentialResponse) => {
    loginAuthUser(credentialResponse?.credential ? credentialResponse.credential : '')
  }

  const onErrorLogin = () => {
    loginAuthUser('')
  }

  return (
    <Box sx={{
      m: 3,
      boxShadow: 1,
      borderRadius: 2,
      minWidth: 236,
      height: 150
    }}>
      <Typography variant="h6" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
        Please sign in
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
        <GoogleLogin
          onSuccess={onSuccessLogin}
          onError={onErrorLogin}
          // type="icon"
          size="large"
          text="signin_with"
          shape="pill"
        />
      </Box>
    </Box>
  )
}

export default Login
