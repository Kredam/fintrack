import { createTheme as createMuiTheme } from '@mui/material'

const createTheme = () => {
  const baseTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#393E46'
      },
      background: {
        main: '#222831'
      },
      secondary: {
        main: '#00ADB5'
      },
      accent: {
        main: '#7BC74D'
      },
      error: {
        main: '#BD2000'
      },
      warning: {
        main: '#FFBE0F'
      },
      info: {
        main: '#2196F3'
      },
      success: {
        main: '#1A5D1A'
      }
    }
  })

  return baseTheme
}

export default createTheme
