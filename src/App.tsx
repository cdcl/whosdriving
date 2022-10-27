import React, { useEffect, useState } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Login from './Login'
import Logout from './Logout'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'
import { getCookie, setCookie, removeCookie } from 'typescript-cookie'
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

interface IUser {
  token: string
  name: string
  email: string
  picture?: string
  email_verified: boolean
}

export class User implements IUser {
  token!: string
  name!: string
  email!: string
  picture?: string
  email_verified!: boolean

  constructor (credential: string) {
    this.token = credential
    const loginInfo = jwt_decode<Partial<User>>(this.token)
    this.name = loginInfo.name as string
    this.email = loginInfo.email as string
    this.picture = loginInfo.picture as string
    this.email_verified = loginInfo.email_verified as boolean
  }
}

const App : React.FC = () => {
  function makeUserFromCookie (): User | undefined {
    const cookieToken = getCookie('AuthUser.token')
    if (cookieToken !== undefined && cookieToken.length > 0) {
      console.log('cookieToken ' + cookieToken)
      return new User(cookieToken)
    }
    console.log('no valid cookieToken')
    return undefined
  }

  const cookieUser = makeUserFromCookie()
  const [token, setToken] = useState<string>(cookieUser === undefined ? '' : cookieUser.token)
  const [authUser, setAuthUser] = useState<User | undefined>(cookieUser)

  const onScriptLoadSuccess = () => {
    console.log('Successfully loaded script')
  }

  const onScriptLoadError = () => {
    console.error('Can\'t load script')
  }

  const onLoginAuthUser = (credential: string) => {
    console.log('login auth user ' + credential)
    setToken(credential)
  }

  useEffect(() => {
    if (token.length === 0) {
      setAuthUser(undefined)
      removeCookie('AuthUser.token')
      return () => { console.log(authUser) }
    }

    const newUser : User = new User(token)
    setAuthUser(newUser)
    setCookie('AuthUser.token', newUser.token, { expires: 1 })
    return () => { console.log(authUser) }
  }, [token])

  return (
    <GoogleOAuthProvider
      clientId="9552818156-lu2j4jg03japldo9jnsiurpmvantk2hi.apps.googleusercontent.com"
      onScriptLoadSuccess={onScriptLoadSuccess}
      onScriptLoadError={onScriptLoadError}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Whosdriving
            </Typography>
            <Logout AuthUser={authUser} loginAuthUser={onLoginAuthUser} />
          </Toolbar>
        </AppBar>
      </Box>
      {authUser === undefined && <Login AuthUser={authUser} loginAuthUser={onLoginAuthUser} />}
    </GoogleOAuthProvider>
  )
}

export default App
