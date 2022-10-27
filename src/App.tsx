import React, { useEffect, useState } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material'
import { lightTheme, darkTheme } from './themes/defaultTheme'
import { getCookie, setCookie, removeCookie } from 'typescript-cookie'
import Login from './pages/Login'
import Header from './components/Header'
import Page from './pages/Page'
import { ColorContext } from './ColorContext'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'

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

  function makeThemeFromCookie (): PaletteMode {
    const cookieTheme = getCookie('general.theme')
    if (cookieTheme !== undefined &&
        cookieTheme === 'dark') {
      return 'dark'
    }
    return 'light'
  }

  const cookieUser = makeUserFromCookie()
  const [token, setToken] = useState<string>(cookieUser === undefined ? '' : cookieUser.token)
  const [authUser, setAuthUser] = useState<User | undefined>(cookieUser)
  const [mode, setMode] = React.useState<PaletteMode>(makeThemeFromCookie())

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => {
          const newMode: PaletteMode = prevMode === 'light' ? 'dark' : 'light'
          setCookie('general.theme', newMode, { expires: 7 })
          return newMode
        })
      }
    }),
    []
  )

  const theme = React.useMemo(
    () => createTheme(mode === 'light' ? lightTheme : darkTheme),
    [mode]
  )

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
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={ theme }>
        <CssBaseline enableColorScheme />
        <GoogleOAuthProvider
          clientId="9552818156-lu2j4jg03japldo9jnsiurpmvantk2hi.apps.googleusercontent.com"
          onScriptLoadSuccess={onScriptLoadSuccess}
          onScriptLoadError={onScriptLoadError}>
            <Header AuthUser={authUser} loginAuthUser={onLoginAuthUser} />
            {authUser === undefined && <Login AuthUser={authUser} loginAuthUser={onLoginAuthUser} />}
            {authUser !== undefined && <Page AuthUser={authUser} />}
        </GoogleOAuthProvider>
      </ThemeProvider>
    </ColorContext.Provider>
  )
}

export default App
